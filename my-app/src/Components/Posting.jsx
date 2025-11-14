import React from 'react'

function Posting({index,filter}) {

  return (                
        <div key={index} className='col-lg-6 col-md-12 col-sm-12 mb-3'>
            <div className="post">
                <div className='row'>
                    <div className="col-4 d-flex align-items-center">
                        <img src={filter.image} className="img-fluid rounded event-image" alt="Event" />
                    </div>
                        <div className="col-8">
                        <p className="mb-1">{filter.title}</p>
                        <p className='mb-1'>({filter.startDate}) - ({filter.endDate})</p>
                        <p className='mb-1'>{filter.location}</p>
                    </div>
                </div>
                 <hr style={{height: '2px', backgroundColor:'black'}}/>
            </div>
        </div>              
  )
}

export default Posting