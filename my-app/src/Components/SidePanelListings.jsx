import React from 'react'

function SidePanelListings({category,setCategory,events,setEvents,counts}) {
        const getCount = (label) => {
       return counts && counts[label] !== undefined ? counts[label] : 0;
    }
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
                            <li><a href='#' onClick={(e)=>{e.preventDefault();setCategory(['Services','Accounting & Tax'])}}>Accounting & Tax{getCount('Accounting & Tax')}</a></li>
                            <li><a href='#' onClick={(e)=>{e.preventDefault();setCategory(['Services','Architects'])}}>Architects{getCount('Architects')}</a></li>
                            <li><a href='#' onClick={(e)=>{e.preventDefault();setCategory(['Services','Cell Repairs'])}}>Cell Repairs{getCount('Cell Repairs')}</a></li>
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
                            <li><a href='#' onClick={(e)=>{e.preventDefault();setCategory(['Real Estate','Apartments'])}}>Apartments{getCount('Apartments')}</a></li>
                            <li><a href='#'onClick={(e)=>{e.preventDefault();setCategory(['Real Estate','Furniture'])}}>Furniture{getCount('Furniture')}</a></li>
                            <li><a href='#' onClick={(e)=>{e.preventDefault();setCategory(['Real Estate','Home Energy'])}}>Home Energy{getCount('HomeEnergy')}</a></li>
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
                            <li><a href='#' onClick={(e)=>{e.preventDefault();setCategory(['Business','Appliances&Videos'])}}>Appliances&Videos{getCount('Appliances&Videos')}</a></li>
                            <li><a href='#' onClick={(e)=>{e.preventDefault();setCategory(['Business','Banks'])}}>Banks{getCount('Banks')}</a></li>
                            <li><a href='#' onClick={(e)=>{e.preventDefault();setCategory(['Business','Car Dealers'])}}>Car Dealers{getCount('CarDealers')}</a></li>
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
                            <li><a href='#' onClick={()=>setCategory(['Health','Anesthesiology'])}>Anesthesiology{getCount('Anesthesiology')}</a></li>
                            <li><a href='#'onClick={()=>setCategory(['Health','Cardiology'])}>Cardiology{getCount('Cardiology')}</a></li>
                            <li><a href='#' onClick={()=>setCategory(['Health','Dentists'])}>Dentists{getCount('Dentists')}</a></li>
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
                            <li><a href='#' onClick={(e)=>{e.preventDefault();setCategory(['Travel','Airport Taxi Pickup & Dropoff'])}}>Airport Taxi Pickup & Dropoff{getCount('AirportTaxiPickupDropoff')}</a></li>
                            <li><a href='#' onClick={(e)=>{e.preventDefault();setCategory(['Travel','Car Rentals'])}}>Car Rentals{getCount('CarRentals')}</a></li>
                            <li><a href='#' onClick={(e)=>{e.preventDefault();setCategory(['Travel','Hotel & Motel'])}}>Hotel & Motel{getCount('Hotel&Motel')}</a></li>
                            <li><a href='#'>Travel Agents{getCount('TravelAgents')}</a></li>
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
                            <li><a href='#' onClick={(e)=>{e.preventDefault();setCategory(['General','Advertising'])}}>Advertising{getCount('Advertising')}</a></li>
                            <li><a href='#' onClick={(e)=>{e.preventDefault();setCategory(['General','Art & Painting'])}}>Art & Painting{getCount('Art&Painting')}</a></li>
                            <li><a href='#' onClick={(e)=>{e.preventDefault();setCategory(['General','Associations'])}}>Associations{getCount('Associations')}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SidePanelListings