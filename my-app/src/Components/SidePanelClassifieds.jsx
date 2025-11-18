import React from 'react'

function SidePanelClassifieds({category,setCategory,events,setEvents,counts}) {
  const getCount = (label) => {
    return counts && counts[label] !== undefined ? counts[label] : 0;
  }
    
  return (
    <div className='col-4'>
      <strong>BROWSE BY CATEGORY</strong>
      <hr style={{height:'2px', backgroundColor:'black'}}/>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              General
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <ul className='no-underline'>
                <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['GeneralClassifieds','BabySitting'])}}>BabySitting{getCount('BabySitting')}</a></li>
                <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['GeneralClassifieds','Computers'])}}>Computers{getCount('Computers')}</a></li>
                <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['GeneralClassifieds','Electronics'])}}>Electronics{getCount('Electronics')}</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Services
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <ul className='no-underline'>
                <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Services','Accounting&Tax'])}}>Accounting & Tax{getCount('AccountingTax')}</a></li>
                <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Services','Architects'])}}>Architects{getCount('Architects')}</a></li>
                <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Services','CellRepairs'])}}>Cell Repairs{getCount('CellRepairs')}</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Real Estate */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Real Estate
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <ul className='no-underline'>
                <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['RealEstate','Apartments'])}}>Apartments{getCount('Apartments')}</a></li>
                <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['RealEstate','Furniture'])}}>Furniture{getCount('Furniture')}</a></li>
                <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['RealEstate','HomeEnergy'])}}>Home Energy{getCount('HomeEnergy')}</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Auto */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Auto
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <ul className='no-underline'>
                <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Auto','PassengerCars'])}}>Passenger Cars</a></li>
                <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Auto','Trucks'])}}>Trucks</a></li>
                <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Auto','SUV'])}}>SUV</a></li>
                <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Auto','Motorcycles'])}}>Motorcycles</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Roommates */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              Roommates
            </button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <ul className='no-underline'>
                <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Roommates','LeaseTransfers'])}}>Lease Transfers{getCount('LeaseTransfers')}</a></li>
                <li><a href='' onClick={(e)=>{e.preventDefault();setCategory(['Roommates','WantedRoommates'])}}>Wanted Roommates{getCount('WantedRoommates')}</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SidePanelClassifieds