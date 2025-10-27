import React, { use, useEffect } from 'react'
import Navbar from './Components/Navbar.jsx'
import SignIn from './Components/SignIn.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import PublicPostings from './Components/PublicPostings.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';
import NewPost from './Components/NewPost.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('isLoggedIn') === 'true');
  const [showSignIn, setShowSignIn] = useState(false);
  const [sidePanel, setSidePanel] = useState('Home')
  const [username, setUsername] = useState(sessionStorage.getItem('username') ?? null);
  const [events,setEvents]=useState([])
  useEffect(() => {
    console.log("App component - isLoggedIn:", isLoggedIn);
    console.log("App component - username:", username);
  }, [isLoggedIn, username]); 
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setShowSignIn={setShowSignIn} username={username} setUsername={setUsername} setSidePanel={setSidePanel} />

      <main className="container mt-4">
        {!isLoggedIn && showSignIn && (
          <SignIn setIsLoggedIn={setIsLoggedIn} setShowSignIn={setShowSignIn} setUsername={setUsername} />
        )}
      </main>
      
      {/* Hide page routes while sign-in UI is displayed so the sign-in panel appears alone */}
      {!showSignIn && (
        <Routes>
          <Route path="/" element={<PublicPostings sidePanel={sidePanel} setSidePanel={setSidePanel} events={events} setEvents={setEvents}/>} />
          <Route path="/newpost" element={isLoggedIn ? <NewPost /> : <Navigate to="/" replace />} />
        </Routes>
      )}
       
    </>
  )
}

export default App