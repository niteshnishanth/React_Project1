import React from 'react'

function Posting({index,event}) {
    console.log(event.status)
  return (                
        <div key={index} className='col-lg-6 col-md-12 col-sm-12 mb-3'>
            <div className="post">
                <div className='row'>
                    <div className="col-4">
                        <img src={event.image} className="img-fluid rounded" alt="" style={{maxHeight:'100px',width:'100%',objectFit:'cover'}}/></div>
                        <div className="col-8">
                        <p className="mb-1">{event.title}</p>
                        <p className='mb-1'>({event.startDate}) - ({event.endDate})</p>
                        <p className='mb-1'>{event.location}</p>
                    </div>
                </div>
                 <hr style={{height: '2px', backgroundColor:'black'}}/>
            </div>
        </div>              
  )
}

export default Posting