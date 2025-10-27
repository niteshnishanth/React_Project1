import React from 'react'

function SidePanel({category,setCategory,events,setEvents,counts }) {
    // defensive helper to get a count for a label; tolerates undefined `counts` and minor naming differences
    const getCount = (label) => {
        if (!counts) return 0;
        // exact match
        if (counts[label] !== undefined) return counts[label];
        // try normalized match (lowercase, remove non-alphanum)
        const normalize = s => s?.toString().toLowerCase().replace(/[^a-z0-9]/g, '') || '';
        const target = normalize(label);
        for (const k of Object.keys(counts)) {
            if (normalize(k) === target) return counts[k];
        }
        return 0;
    }
    console.log('SidePanel counts:', counts)
  return (          
                <div className='col-4'>
                <strong>BROWSE BY CATEGORY</strong>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Listings
                    </button>
                    </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <ul className='no-underline'>
                            <li><a href='#' onClick={(e)=>{e.preventDefault(); setCategory(['Listings','Beauty Parlours'])}}>Beauty Parlours {getCount('Beauty Parlours')}</a></li>
                            <li><a href='#' onClick={(e)=>{e.preventDefault(); setCategory(['Listings','Birthday Party'])}}>Birthday Party {getCount('Birthday Party')}</a></li>
                            <li><a href='#' onClick={(e)=>{e.preventDefault(); setCategory(['Listings','Child Learning Centers'])}}>Child Learning Centers {getCount('Child Learning Centers')}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Classifieds
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <ul className='no-underline'>
                            <li><a href='#' onClick={(e)=>{e.preventDefault(); setCategory(['Classifieds','Baby Sitting'])}}>Baby Sitting {getCount('Baby Sitting')}</a></li>
                            <li><a href='#' onClick={(e)=>{e.preventDefault(); setCategory(['Classifieds','Computers'])}}>Computers {getCount('Computers')}</a></li>
                            <li><a href='#' onClick={(e)=>{e.preventDefault(); setCategory(['Classifieds','Electronics'])}}>Electronics {getCount('Electronics')}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Deals
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <ul className='no-underline'>
                            <li><a href='#' onClick={(e)=>{e.preventDefault(); setCategory(['Deals','Dining & Grocery'])}}>Dining & Grocery {getCount('Dining & Grocery')}</a></li>
                            <li><a href='#' onClick={(e)=>{e.preventDefault(); setCategory(['Deals','Fashion'])}}>Fashion {getCount('Fashion')}</a></li>
                            <li><a href='#' onClick={(e)=>{e.preventDefault(); setCategory(['Deals','Computer Training'])}}>Spa & Salon {getCount('Spa & Salon')}</a></li>
                    </ul>
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