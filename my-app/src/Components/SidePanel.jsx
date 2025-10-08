import React from 'react'

function SidePanel() {
  return (
                <div className='col-4'>
                <strong>BROWSE BY CATEGORY</strong>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Listings
                    </button>
                    </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ul className='no-underline'>
                            <li><a href='#'>Beauty Parlours</a></li>
                            <li><a href='#'>Birthday Party</a></li>
                            <li><a href='#'>Child Learning Centers </a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Classifieds
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ul className='no-underline'>
                            <li><a href='#'>Accounting & Finance</a></li>
                            <li><a href='#'>Administration</a></li>
                            <li><a href='#'>Apartments Rental</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Deals
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                </div>
            </div>
        </div>
    </div>
    <div className='row' style={{paddingTop:'15px',paddingLeft:'15px',paddingRight:'15px'}}>
        <strong>RECENT CLASSIFIEDS</strong>
        <hr style={{height:'2px', backgroundColor:'black'}}/>
        <div className='row' style={{lineHeight:'1'}}>
            <p style={{fontSize:'15px'}}>link to Classified</p>
            <p style={{fontSize:'12px'}}>location 1</p>
            <p style={{fontSize:'12px'}}>Date Range</p>
        </div>
             <hr style={{height:'1px', backgroundColor:'black'}}/>

    </div>
    </div>
  )
}

export default SidePanel