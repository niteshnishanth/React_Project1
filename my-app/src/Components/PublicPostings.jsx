import {React,useEffect,useState} from 'react'
import { useNavigate,Router, Routes,Route } from 'react-router-dom'
import axios from 'axios';
import Posting from './Posting';
import io from 'socket.io-client';
import SidePanel from './SidePanel';
import SidePanelListings from './SidePanelListings';
import SidePanelClassifieds from './SidePanelClassifieds';
import SidePanelDeals from './SidePanelDeals';

import CardsContainer from './CardsContainer';
const socket = io('http://localhost:5000');
function PublicPostings({sidePanel,events,setEvents,setEventsLoaded}) {
            const [category,setCategory]=useState([])
            const [filterData,setFilterData]=useState([])
            const [counter,setCounter]=useState({})
            const eventData= async ()=>{
            try
            {
                const response=await axios.post('http://localhost:5000/api/AllEvents')
                if(response.data.success)
                {
                    // log the raw counts payload so we can confirm keys/shape before setting state
                    console.log('counts payload from server:', response.data.counts)
                    // server currently returns counts as an array (find()), use first element or empty object
                    setCounter(response.data.counts?.[0] || {})
                    setEvents(response.data.AllEvents)
                    setEventsLoaded(true)
                    console.log('AllEvents length:', response.data.AllEvents?.length)
                }
                else{
                
                console.log('nothing to update')
                setEventsLoaded(false)
                }
            }
            catch(error)
            {
                console.log(error)
                setEventsLoaded(false)
            }
        }
    useEffect(()=>{
        if(category.length>0){
            const tempData=events.filter(event=>event.type===category[0]&&event.subcategory===category[1])
            setFilterData(tempData)
        }
        else{
            setFilterData(events)
        }
    },[category,events])
    useEffect(()=>{
        eventData()
        socket.on('Post Updated',(updatedPost)=>{
            console.log(updatedPost)
            eventData()
        }
        )
        return()=>{
            socket.off('Post Updated')
        }
    },[])
    const navigate = useNavigate();
    const handlePostNew = () => {
        navigate('/newpost');
    }
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-8">
                <div className="customcontainer">
                    <div className='row'>
                        <div className='col-6'>
                            <h5>Public Postings</h5>
                        </div>
                        <div className='col-6 text-end'>
                            <button className='btn btn-primary btn-sm' style={{paddingBottom:'2px'}} onClick={handlePostNew}>post new</button>
                            </div>  
                    </div>
                    <div className='row'>
                        <hr style={{height:'2px', backgroundColor:'black'}}/>
                    </div>
                    <div className='row'>
                        <h6>Events
                            <hr style={{height:'2px', backgroundColor:'black'}}/>
                        </h6>
                    </div>
                    <div className='row'>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a className="nav-link active" data-bs-toggle="tab" href="#upcoming">Upcoming</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#completed">Completed</a>
                            </li>
                        </ul>
                        <div id="eventsContent" className='tab-content'>
                            <div id="upcoming" className='tab-pane fade show active'>
                                <br />
                                <div className="row">
                                {
                                filterData && filterData.map((filter,index)=>(
                                    filter.status=='pending'&&<Posting key={index} filter={filter}/>
                                ))
                                }
                                </div>
                            </div>
                            <div id="completed" className='tab-pane fade'>
                                <br />
                                <div className="row">
                                    {
                                    filterData&&filterData.map((filter,index)=>(
                                        filter.status=='completed'&&<Posting key={index} filter={filter}/>
                                    ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
               {sidePanel==='Home'&&Object.keys(counter).length>0&&(<SidePanel category={category} setCategory={setCategory} events={events} setEvents={setEvents} counts={counter}/>)}
               {sidePanel==='Listings'&&Object.keys(counter).length>0&&(<SidePanelListings  category={category} setCategory={setCategory} events={events} setEvents={setEvents} counts={counter}/>)}
               {sidePanel==='Classifieds'&&Object.keys(counter).length>0&&(<SidePanelClassifieds  category={category} setCategory={setCategory} events={events} setEvents={setEvents} counts={counter}/>)}
               {sidePanel==='Deals'&&Object.keys(counter).length>0&&(<SidePanelDeals category={category} setCategory={setCategory} events={events} setEvents={setEvents} counts={counter}/>)}
        </div>
        </div>
        
    </>
  )
}

export default PublicPostings