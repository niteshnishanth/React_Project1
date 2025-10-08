import React from 'react'

function SidePanelListings() {
  return (
<div className='col-4'>
                
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Services
                    </button>
                    </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ul className='no-underline'>
                            <li><a href='#'>Accounting&Tax</a></li>
                            <li><a href='#'>Architects</a></li>
                            <li><a href='#'>Cell Repairs</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Real Estate
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ul className='no-underline'>
                            <li><a href='#'>Apartments</a></li>
                            <li><a href='#'>Furniture</a></li>
                            <li><a href='#'>Home Energy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                 Business
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul className='no-underline'>
                            <li><a href='#'>Appliances&Videos</a></li>
                            <li><a href='#'>Banks</a></li>
                            <li><a href='#'>Car Dealers</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                 Health
                </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul className='no-underline'>
                            <li><a href='#'>Anesthesiology</a></li>
                            <li><a href='#'>Cardiology</a></li>
                            <li><a href='#'>Dentists</a></li>
                    </ul>
                </div>
            </div>
        </div>
                <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Travel
                </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul className='no-underline'>
                            <li><a href='#'>Airport Taxi Pickup & Dropoff</a></li>
                            <li><a href='#'>Hotel & Motel</a></li>
                            <li><a href='#'>Travel Agents</a></li>
                    </ul>
                </div>
            </div>
        </div>
                <div class="accordion-item">
                <h2 class="accordion-header" id="headingSix">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                 General
                </button>
                </h2>
                <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul className='no-underline'>
                            <li><a href='#'>Advertising</a></li>
                            <li><a href='#'>Art & Painting</a></li>
                            <li><a href='#'>Associations</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SidePanelListings