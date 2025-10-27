import React from 'react'

function ContactUs() {
  return (
    <div className='container-fluid' style={{padding:'20px',border:'1px solid black',borderRadius:'10px'}}>
      <div>
        <div className='row'>
          <div className='col-12'>
            <strong>Contact Us</strong>
            <hr style={{height:'2px', backgroundColor:'black'}}/>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <strong style={{padding:'15px'}}>CONTACT INFORMATION</strong>
            <h6 style={{fontStyle:'bold'}}>Corporate Office</h6>
            <p>
              13241 Bartam Park Blvd, Suite 1613, Jacksonville, FL, 32216, USA
            </p>
            <h6 style={{fontStyle:'bold'}}>
            Phone:
            </h6>
            <h6 style={{fontStyle:'bold'}}>
            Email:
            </h6>
          </div>
          <div className='col-6'>
            <strong>CONTACT FORM</strong>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} required/>
                </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} required/>
              </div>
              <div className='mb-3'>
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="3" onChange={(e)=>{setMessage(e.target.value)}}></textarea>
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>

        </div>
    </div>
    </div>
  )
}

export default ContactUs