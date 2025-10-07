import {React,useEffect,useState} from 'react'
import { useNavigate,Router, Routes,Route } from 'react-router-dom'
import axios from 'axios';
import Posting from './Posting';
import io from 'socket.io-client';
const socket = io('http://localhost:5000');
function PublicPostings() {
    const [events,setEvents]=useState([])
            const eventData= async ()=>{
            try
            {
                const response=await axios.post('http://localhost:5000/api/AllEvents')
                if(response.data.success)
                {setEvents(response.data.AllEvents)
                    console.log(response.data.AllEvents)
                }
                else{
                console.log('nothing to update')
                }
            }
            catch(error)
            {
                console.log(error)
            }
        }
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
            <div className="col-6">
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
                                events && events.map((event,index)=>(
                                    event.status=='pending'&&<Posting key={index} event={event}/>
                                ))
                                }
                                </div>
                            </div>
                            <div id="completed" className='tab-pane fade'>
                                <br />
                                <div className="row">
                                    {
                                    events&&events.map((event,index)=>(
                                        event.status=='completed'&&<Posting key={index} event={event}/>
                                    ))
                                    }
                                </div>
                            </div>
                            
                        
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default PublicPostings