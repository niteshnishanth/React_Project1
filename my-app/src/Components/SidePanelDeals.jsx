import React from 'react'

function SidePanelDeals({category,setCategory,events,setEvents,counts}) {
        const getCount = (label) => {
       return counts && counts[label] !== undefined ? counts[label] : 0;
    }
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
                            <li><a href='#' onClick={(e)=>{e.preventDefault();setCategory(['Deals','Dining & Grocery'])}}>Dining & Grocery{getCount('Dining & Grocery')}</a></li>
                            <li><a href='#'onClick={(e)=>{e.preventDefault();setCategory(['Deals','Fashion'])}}>Fashion{getCount('Fashion')}</a></li>
                            <li><a href='#' onClick={(e)=>{e.preventDefault();setCategory(['Deals','Computer Training'])}}>Computer Training{getCount('ComputerTraining')}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
    </div>
  )
}

export default SidePanelDeals