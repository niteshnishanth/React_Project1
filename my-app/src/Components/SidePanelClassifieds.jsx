import React from 'react'

function SidePanelClassifieds({category,setCategory,events,setEvents,counts}) {
        const getCount = (label) => {
       return counts && counts[label] !== undefined ? counts[label] : 0;
    }
    
  return (
    <div className='col-4'>
            <strong>BROWSE BY CATEGORY</strong>
            <hr style={{height:'2px', backgroundColor:'black'}}/>
            <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    General
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul className='no-underline'>
                        <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['General','BabySitting'])}}>BabySitting{getCount('BabySitting')}</a></li>
                        <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['General','Computers'])}}>Computers{getCount('Computers')}</a></li>
                        <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['General','Electronics'])}}>Electronics{getCount('Electronics')}</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Jobs
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul className='no-underline'>
                    <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Jobs','Accounting'])}}>Accounting{getCount('Accounting')}</a></li>
                    <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Jobs','Software'])}}>Software{getCount('Software')}</a></li>
                    <li><a href=''onClick={(e)=>{e.preventDefault();setCategory(['Jobs','Hr&Recruting'])}}>Hr&Recruting{getCount('Hr&Recruting')}</a></li>
                    <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Jobs','Sales'])}}>Sales{getCount('Sales')}</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Autos
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul className='no-underline'>
                        <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Autos','Passenger Cars'])}}>Passenger Cars{getCount('PassengerCars')}</a></li>
                        <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Autos','Trucks'])}}>Trucks{getCount('Trucks')}</a></li>
                        <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Autos','SUV'])}}>SUV{getCount('SUV')}</a></li>
                        <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Autos','Motorcycles'])}}>Motorcycles{getCount('Motorcycles')}</a></li>
                        <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Autos','Commercial Vehicles'])}}>Trucks{getCount('CommercialVehicles')}</a></li>
                    </ul>
                               
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseFour">
                    Real Estate
                </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul className='no-underline'>
                        <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Real Estate','Apartments'])}}>Apartments{getCount('Apartments')}</a></li>
                        <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Real Estate','Condominiums'])}}>Condominiums{getCount('Condominiums')}</a></li>
                        <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Real Estate','Townhouses'])}}>Townhouses{getCount('Townhouses')}</a></li>
                        <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Real Estate','Single Family Homes'])}}>Single Family Homes{getCount('SingleFamilyHomes')}</a></li>
                        <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Real Estate','Commercial Homes'])}}>Condominiums{getCount('CommercialHomes')}</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Roommates
                </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul className='no-underline'>
                        <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Roommates','Lease Transfers'])}}>Lease Transfers{getCount('LeaseTransfers')}</a></li>
                        <li><a href=''onClick={(e)=>{e.preventDefault();setCategory(['Roommates','Wanted Roommate'])}}>Wanted Roommate{getCount('WantedRoommate')}</a></li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default SidePanelClassifieds