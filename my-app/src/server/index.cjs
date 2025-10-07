const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cron=require('node-cron')
const app = express();
const http=require('http')
const server=http.createServer(app)
const { Server }=require('socket.io')
const io=new Server(server,{
  cors:{
    origin:'*'
  }
})

app.use(cors());
app.use(express.json());
const port = 5000;
mongoose.connect(
  "mongodb+srv://niteshnishanth:nitesh123@cluster0.cwczvul.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

const userSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    phoneNumber:String,
    state:String,
    city:String,
    password:String,  
});
const postSchema = new mongoose.Schema({
    title: String,
    startDate: String,
    endDate: String, 
    location: String,
    category: [String],
    description: String,
    image: String,
    status: String// Store image as a base64 string
}); 
const Post = mongoose.models.Post || mongoose.model("Post", postSchema);


// ✅ define once
const User = mongoose.models.User || mongoose.model("User", userSchema);

// ✅ login endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  console.log("Login attempt:", email, password);

  try {
    const user = await User.findOne({ email, password });

    if (user) {
      return res.json({ success: true, message: "Login successful!" ,username:user.firstName});
    } else {
      return res.status(401).json({ success: false, message: "Invalid credentials" ,username:null});
    }
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ success: false, message: "Server error" ,username:null });
  }
});
// ✅ login endpoint

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
app.post('/api/register',async (req,res)=>{
  const { firstName, lastName, registerEmail, phoneNumber, state, city, registerPassword }=req.body
  try{
    const user=await User.findOne({email:registerEmail})
    console.log(user)
    if(user)
    return res.json({success:false})
    else
      {
        const newUser= new User(
          {
            firstName:firstName,
            lastName:lastName,
            email:registerEmail,
            phoneNumber:phoneNumber,
            state:state,
            city:city,
            password:registerPassword
          })
          await newUser.save()
          .then(() => { console.log('User saved') })
          .catch((e) => { console.log(e) })
          return res.json({ success: true })
      }
  }
  catch(e)
  {
    console.log(e)
  }
})
app.post('/api/newpost',async (req,res)=>{
  const { title, startDate, endDate, location, category, description, image }=req.body
  console.log("Received new post data:", req.body);
  try{
    const newPost= new Post(
      {
        title:title,
        startDate:startDate,
        endDate:endDate,
        location:location,
        category:category,
        description:description,
        image:image,
        status:'pending'
      })
      console.log(newPost)
      await newPost.save()
      .then(() => { console.log('Post saved') })
      .catch((e) => { console.log(e) })
      return res.json({ success: true })
  }
  catch(e)
  {
    console.log(e)
  }
})
app.post('/api/AllEvents',async (req,res)=>{
  try{
    const AllEvents= await Post.find()
    if(AllEvents.length!=0)
    {
      console.log(AllEvents)
      dailyTask()
    return res.json({success:true,AllEvents:AllEvents})

    }
    else
    return res.json({success:false,AllEvents:[]})
  }
  catch(e)
  {
    console.log(e)
  }


}
)
async function dailyTask(){
  console.log('Task to Update Database run')
  console.log(new Date().toLocaleDateString())
  console.log('Task to Update Database run', new Date().toLocaleDateString())
  const AllEvents= await Post.find()
  for(let i=0;i<AllEvents.length;i++)
  {
    const event=AllEvents[i]
    
    
    if(event.endDate<new Date().toISOString().split('T')[0]&&event.status!='completed')
    {
      console.log(event.title)
      const updated=await Post.findOneAndUpdate(event._id,{status:'completed'})
      .then(() => { 
        console.log('Post updated') 
        
      })
      .catch((e) => { console.log(e) })
      io.emit('Post Updated',updated)
    }
  }
}
cron.schedule('0 0 * * *', async ()=>{
  try{
  await dailyTask()
  }
  catch(e)
  {
    console.log(e)
  }
})

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
}
)