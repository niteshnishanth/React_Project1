import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import $ from 'jquery';
import { useState, useEffect } from 'react';
import axios from 'axios';
function NewPost() {
  const [Title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [Category, setCategory] = useState([]);
  const [Description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const today = new Date().toISOString().split('T')[0];
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  const handleSubmit = async (e) => {
    console.log('Title:', Title);
    console.log('Location:', location);
    console.log('Category:', Category);
    console.log('Description:', Description);
    e.preventDefault();
    try{
        const postData ={
        title: Title,
        startDate: startDate,
        endDate: endDate,
        location: location,
        category: Category,
        description: Description,
        image: image,
        }
        console.log(postData)
        const response=await axios.post('http://localhost:5000/api/newpost',postData)
            
            if(response.data.success){
                alert('Post created successfully');
            }
            else{
                alert('Failed to create post');
            }
        }
    catch(error){
        console.error("Error submitting the form:", error);
    }
  }
   const handleChangeImage = (e) => {
        const file = e.target.files[0];
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        if (file && allowedTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onloadend = () => {
        setImage(reader.result); // save as base64 string
        };
    reader.readAsDataURL(file);
  } else {
    alert("Please select a valid image file (jpg or png)");
    e.target.value = "";
    setImage(null);
  }
}
const handleCheckBoxChange = (event) => {
  const { value, checked } = event.target;
  setCategory((prev) =>
    checked ? [...prev, value] : prev.filter((v) => v !== value)
  );
};

  return (
    <>
    <div className="container-fluid" style={{padding:'10px'}}>
        <div className="row">
            <div className="col-6">
                <div className="customcontainer">
                    <div className='row'>
                        <div className='col-12'>
                            <h5>New Post</h5>
                        </div>
                    </div>
                    <div className='row'>
                        <hr style={{height:'2px', backgroundColor:'black'}}/>
                    </div>
                    <div className='row'>
                        <form className="new-post-form" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <input type="text" className="form-control" onChange={(e)=>setTitle(e.target.value)} required/>
                            </div>
                            <div className="row mb-3">
                                <div className="col-6">
                                <label className="form-label">Start Date</label>
                                <input type="date" className="form-control" value={startDate} onChange={(e)=>setStartDate(e.target.value)} min={today} required />
                                </div>
                                <div className="col-6">
                                <label className="form-label">End Date</label>
                                <input type="date" className="form-control" value={endDate} onChange={(e)=>setEndDate(e.target.value)} min={startDate||today} required/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Location</label>
                                <input type="text" className="form-control" onChange={(e)=>setLocation(e.target.value)} required/>
                            </div>
                            <div className='mb-3'>
                                <label className="form-label">Category</label><br />
                                    <div style={{fontWeight:'normal', lineHeight:'2',paddingLeft:'10px'}}>
                                    <div className='row'>
                                        <div className='col-4'>
                                            <label><input type="checkbox" name="Classified" id="Classified" value="Classified" onChange={handleCheckBoxChange} />Classified</label>
                                        </div>
                                        <div className='col-4'>
                                            <label><input type="checkbox" name="Event" id="Event" value="Event" onChange={handleCheckBoxChange} />Event</label>
                                        </div>
                                        <div className='col-4'>
                                            <label><input type="checkbox" name="Postings" id="Postings" value="Postings" onChange={handleCheckBoxChange}/>Postings</label>
                                        </div>
                                        </div>
                                    </div>
                             </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea className="form-control" rows="3" onChange={(e)=>{setDescription(e.target.value)}}></textarea>
                            </div>
                            <div className="mb-3">
                            <label className="form-label">Upload Image</label>
                            <input className="form-control" type="file" accept='image/*' onChange={handleChangeImage}/>
                            </div>
                            <br />
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>                              
        </div>
    </div>
    </>
  )
}

export default NewPost