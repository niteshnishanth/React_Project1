import React, { use, useEffect } from 'react'
import Navbar from './Components/Navbar.jsx'
import SignIn from './Components/SignIn.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import PublicPostings from './Components/PublicPostings.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';
import NewPost from './Components/NewPost.jsx';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [showSignIn, setShowSignIn] = useState(false);
  const [username, setUsername] = useState(localStorage.getItem('username') ?? null); // New state for username
  useEffect(() => {
    console.log("App component - isLoggedIn:", isLoggedIn);
    console.log("App component - username:", username);
  }, [isLoggedIn, username]); 
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setShowSignIn={setShowSignIn} username={username} setUsername={setUsername} />

      <main className="container mt-4">
        {!isLoggedIn && showSignIn && (
          <SignIn setIsLoggedIn={setIsLoggedIn} setShowSignIn={setShowSignIn} setUsername={setUsername} />
        )}
      </main>
      
      {/* Hide page routes while sign-in UI is displayed so the sign-in panel appears alone */}
      {!showSignIn && (
        <Routes>
          <Route path="/" element={<PublicPostings />} />
          <Route path="/newpost" element={isLoggedIn ? <NewPost /> : <Navigate to="/" replace />} />
        </Routes>
      )}
       
    </>
  )
}

export default App