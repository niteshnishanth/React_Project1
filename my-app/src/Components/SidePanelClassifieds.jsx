import React from 'react'

function SidePanelClassifieds({category,setCategory,events,setEvents,counts}) {
    console.log('SidePanelClassifieds',counts['Computers'])
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
                        <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['General','BabySitting'])}}>BabySitting{counts['BabySitting']}</a></li>
                        <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['General','Computers'])}}>Computers{counts['Computers']}</a></li>
                        <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['General','Electronics'])}}>Electronics{counts['Electronics']}</a></li>
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
                    <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Jobs','Accounting'])}}>Accounting{counts['Accounting']}</a></li>
                    <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Jobs','Software'])}}>Software{counts['Software']}</a></li>
                    <li><a href=''onClick={(e)=>{e.preventDefault();setCategory(['Jobs','Hr&Recruting'])}}>Hr&Recruting{counts['Hr&Recruting']}</a></li>
                    <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Jobs','Sales'])}}>Sales{counts['Sales']}</a></li>
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
                        <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Autos','Passenger Cars'])}}>Passenger Cars{counts['PassengerCars']}</a></li>
                        <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Autos','Trucks'])}}>Trucks{counts['Trucks']}</a></li>
                        <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Autos','SUV'])}}>SUV{counts['SUV']}</a></li>
                        <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Autos','Motorcycles'])}}>Motorcycles{counts['Motorcycles']}</a></li>
                        <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Autos','Commercial Vehicles'])}}>Trucks{counts['CommercialVehicles']}</a></li>
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
                        <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Real Estate','Apartments'])}}>Apartments{counts['Apartments']}</a></li>
                        <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Real Estate','Condominiums'])}}>Condominiums{counts['Condominiums']}</a></li>
                        <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Real Estate','Townhouses'])}}>Townhouses{counts['Townhouses']}</a></li>
                        <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Real Estate','Single Family Homes'])}}>Single Family Homes{counts['SingleFamilyHomes']}</a></li>
                        <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Real Estate','Commercial Homes'])}}>Condominiums{counts['CommercialHomes']}</a></li>
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
                        <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Roommates','Lease Transfers'])}}>Lease Transfers{counts['LeaseTransfers']}</a></li>
                        <li><a href=''onClick={(e)=>{e.preventDefault();setCategory(['Roommates','Wanted Roommate'])}}>Wanted Roommate{counts['WantedRoommate']}</a></li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default SidePanelClassifieds