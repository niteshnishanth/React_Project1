import React from 'react'

function SidePanelDeals({category,setCategory,events,setEvents,counts}) {
  return (
    <div className='col-4'>
            <strong>BROWSE BY CATEGORY</strong>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Deals
                    </button>
                    </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ul className='no-underline'>
                            <li><a href='#' onClick={(e)=>{e.preventDefault();setCategory(['Deals','Dining & Grocery'])}}>Dining & Grocery{counts['Dining & Grocery']}</a></li>
                            <li><a href='#'onClick={(e)=>{e.preventDefault();setCategory(['Deals','Fashion'])}}>Fashion{counts['Fashion']}</a></li>
                            <li><a href='#' onClick={(e)=>{e.preventDefault();setCategory(['Deals','Computer Training'])}}>Computer Training{counts['ComputerTraining']}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
    </div>
  )
}

export default SidePanelDeals