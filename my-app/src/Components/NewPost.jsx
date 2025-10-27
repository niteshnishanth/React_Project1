import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import axios from 'axios';
function NewPost() {
  const [Title, setTitle] = useState('');
  const [location, setLocation] = useState('');
    // post classification: top-level type (Classifieds/Listings/Deals/Events) and a subcategory
    const [type, setType] = useState('Classifieds');
    const [subcategory, setSubcategory] = useState('');
  const [Description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const today = new Date().toISOString().split('T')[0];
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  const handleSubmit = async (e) => {
    console.log('Title:', Title);
    console.log('Location:', location);
    console.log('Description:', Description);
    e.preventDefault();
    try{
        const postData ={
        title: Title,
        startDate: startDate,
        endDate: endDate,
        location: location,
        type: type,
        subcategory: subcategory,
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

// helper to supply subcategories for each top-level type
const getSubcategoriesForType = (type) => {
    switch(type){
        case 'Classifieds':
            return ['Babysitting','Computers','Electronics','Accounting','Software','Passenger Cars'];
        case 'Listings':
            return ['Accounting & Tax','Architects','Cell Repairs','Apartments','Appliances & Videos'];
        case 'Deals':
            return ['Dining & Grocery','Fashion','Computer Training','Spa & Salon'];
        case 'Events':
            return ['Community','Concerts','Meetups'];
        default:
            return [];
    }
}

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
                                <label className="form-label">Post Type</label>
                                <select className="form-select" value={type} onChange={(e)=>{setType(e.target.value)}}>
                                    <option value="Classifieds">Classifieds</option>
                                    <option value="Listings">Listings</option>
                                    <option value="Deals">Deals</option>
                                    <option value="Events">Events</option>
                                </select>
                            </div>

                            <div className='mb-3'>
                                <label className="form-label">Subcategory</label>
                                <select className="form-select" value={subcategory} onChange={(e)=>setSubcategory(e.target.value)} required>
                                    <option value="">-- Select subcategory --</option>
                                    {getSubcategoriesForType(type).map((sc, idx)=>(
                                        <option key={idx} value={sc}>{sc}</option>
                                    ))}
                                </select>
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