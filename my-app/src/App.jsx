import React, { use, useEffect } from 'react'
import Navbar from './Components/Navbar.jsx'
import SignIn from './Components/SignIn.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import PublicPostings from './Components/PublicPostings';
import { Routes, Route, Navigate } from 'react-router-dom';
import NewPost from './Components/NewPost.jsx';
import CardsContainer from './Components/CardsContainer';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('isLoggedIn') === 'true');
  const [showSignIn, setShowSignIn] = useState(false);
  const [sidePanel, setSidePanel] = useState('Home')
  const [username, setUsername] = useState(sessionStorage.getItem('username') ?? null);
  const [events,setEvents]=useState([])
  const [category,setCategory]=useState([])
  const [eventsLoaded,setEventsLoaded]=useState(false)
  useEffect(() => {
    console.log("App component - isLoggedIn:", isLoggedIn);
    console.log("App component - username:", username);
  }, [isLoggedIn, username]); 
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setShowSignIn={setShowSignIn} username={username} setUsername={setUsername} setSidePanel={setSidePanel} setCategory={setCategory} />
      
      <main className="container mt-4">
        {!isLoggedIn && showSignIn && (
          <SignIn setIsLoggedIn={setIsLoggedIn} setShowSignIn={setShowSignIn} setUsername={setUsername} />
        )}
      </main>
      
      {/* Hide page routes while sign-in UI is displayed so the sign-in panel appears alone */}
      {!showSignIn && (
        <Routes>
          <Route path="/" element={<PublicPostings sidePanel={sidePanel} setSidePanel={setSidePanel} events={events} setEvents={setEvents} username={username} setEventsLoaded={setEventsLoaded} setCategory={setCategory} category={category} />} />
          <Route path="/newpost" element={isLoggedIn ? <NewPost /> : <Navigate to="/" replace />} />
          <Route path="/CardsContainer" element={isLoggedIn && eventsLoaded? <CardsContainer events={events} username={username}/> : <Navigate to="/" replace />} />
        </Routes>
      )}
       
    </>
  )
}

export default App