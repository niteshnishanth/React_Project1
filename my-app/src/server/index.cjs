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
  type: String,
  subcategory: String,
    description: String,
    image: String,
    status: String// Store image as a base64 string
}); 
const counterSchema=new mongoose.Schema({
  BeautyParlours:Number,
  BirthdayParty:Number,
  ChildLearningCenters:Number,
  BabySitting:Number,
  Computer:Number,
  Electronics:Number,
  AccountingTax:Number,
  Architects:Number,
  CellRepairs:Number,
  Apartments:Number,
  Furniture:Number,
  HomeEnergy:Number,
  SpaSalon:Number,
  ApplianceVideos:Number,
  Banks:Number,
  CarDealers:Number,
  Anesthesiology:Number,
  Cardiology:Number,
  Dentists:Number,
  AirportTaxi:Number,
  CarRentals:Number,
  HotelMotel:Number,
  TravelAgents:Number,
  Advertising:Number,
  ArtPainting:Number,
  Associations:Number,
  DiningGrocery:Number,
  Fashion:Number,
  ComputerTraining:Number,

})
const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
const counter=mongoose.models.counter || mongoose.model("counter",counterSchema)

// ✅ define once
const User = mongoose.models.User || mongoose.model("User", userSchema);

// ✅ login endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  console.log("Login attempt:", email, password);
  try {
    var user = await User.findOne({ email, password});
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

// Start the HTTP server (Socket.IO is attached to `server` above)
server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

server.on('error', (err) => {
  console.error('Server error:', err);
});
// simple health-check route to verify server connectivity
app.get('/', (req, res) => {
  res.json({ success: true, message: 'Server is up' });
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
  const { title, startDate, endDate, location, type, subcategory, description, image } = req.body
  console.log("Received new post data:", req.body);
  try{
    const newPost= new Post(
      {
        title: title,
        startDate: startDate,
        endDate: endDate,
        location: location,
        type: type,
        subcategory: subcategory,
        description: description,
        image: image,
        status: 'pending'
      })
      const count=await counter.findOneAndUpdate(event._id,{subcategory:subcategory+1})
      .then(() => { 
        console.log('Post Counter updated') 
        
      })
      .catch((e) => { console.log(e) })
      
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
    const count=await counter.find()
    console.log(count)
    if(AllEvents.length!=0)
    {
    
      dailyTask()
    return res.json({success:true,AllEvents:AllEvents,counts:count})

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
async function initializeCounter() {
  try {
    const existing = await counter.findOne();
    if (!existing) {
      const newCounter = new counter({
        BeautyParlours: 0,
        BirthdayParty: 0,
        ChildLearningCenters: 0,
        BabySitting: 0,
        Computer: 0,
        Electronics: 0,
        AccountingTax: 0,
        Architects: 0,
        CellRepairs: 0,
        Apartments: 0,
        Furniture: 0,
        HomeEnergy: 0,
        SpaSalon: 0,
        ApplianceVideos: 0,
        Banks: 0,
        CarDealers: 0,
        Anesthesiology: 0,
        Cardiology: 0,
        Dentists: 0,
        AirportTaxi: 0,
        CarRentals: 0,
        HotelMotel: 0,
        TravelAgents: 0,
        Advertising: 0,
        ArtPainting: 0,
        Associations: 0,
        DiningGrocery: 0,
        Fashion: 0,
        ComputerTraining: 0,
      });

      await newCounter.save();
      console.log('✅ Counter initialized successfully with all zeros.');
    } else {
      console.log('✅ Counter already exists — skipping initialization.');
    }
  } catch (err) {
    console.error('❌ Error initializing counter:', err);
  }
}
initializeCounter();
app.post('/api/gloginSignUp',async (req,res)=>{
  const {email,username}=req.body
  try{

      var user = await User.findOne({email});
      if(user){
        return res.json({success:true})
      }
      else
      {
        const newUser= new User({
          firstName:username,
          email:email
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
app.post('/api/dropcard', async (req, res) => {
  const { item } = req.body; // receive only the ID
  try {
    const deleted = await Post.findByIdAndDelete(item._id);
    if (deleted) {
      console.log('✅ Post deleted:', deleted.title);
      return res.json({ success: true });
    } else {
      console.warn('⚠️ No post found with ID:', item._id);
      return res.status(404).json({ success: false, message: 'Post not found' });
    }
  } catch (error) {
    console.error('❌ Error deleting post:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});
