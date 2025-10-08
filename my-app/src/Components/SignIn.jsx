import React, { useState,useEffect } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function SignIn({ setIsLoggedIn, setShowSignIn, setUsername }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');
  const [matchError, setMatchError] = useState(false);
  useEffect(() => {
    if (registerPassword && registerConfirmPassword && registerPassword !== registerConfirmPassword) {
      setMatchError(true);
    }
    else{
      setMatchError(false);
    }
  }, [registerPassword, registerConfirmPassword]);
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post('http://localhost:5000/api/login', { email, password });
    if (response.data.success) {
      setIsLoggedIn(true);
      setShowSignIn(false);
      setUsername(response.data.username); // Set the username in App state'
      // Persist session to sessionStorage (cleared when the tab/window is closed)
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('username', response.data.username);
      console.log("Logged in user:", response.data.username);
      //console.log(response.data.username.username);
      //console.log(response.data.user.username);
    } else {
      alert('Login failed');
    }
  }
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (matchError) {
      alert('Please fix the errors in the form before submitting.');
      return;
    }
    else{
      const response = await axios.post('http://localhost:5000/api/register', { firstName, lastName, registerEmail, phoneNumber, state, city, registerPassword });
      if(response.data.success){
        alert('Registration successful! Please log in.')
        return
      }
      if(!response.data.success){
        alert('Account already exists. Please log in.')
      }
      else{
        alert('Registration failed. Please try again.')
      }
    }
  }

  return (
    <><div className="container py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow">
            <div className="card-body row">
              {/* Returning Customer */}
              <div className="col-md-6 border-end">
                <h4 className="mb-4">I am a returning customer</h4>
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={(e)=>{setEmail(e.target.value)}}/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
                  </div>
                 
                  <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                    <button className="btn btn-primary me-md-2" type="button" onClick={handleSubmit}>SignIn</button>
                    <button type="button" className="google-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
  <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"></path>
</svg>
                Sign In with Google
              </button>     
                  </div>
                </form>
              </div>

              {/* New Customer */}
              <div className="col-md-6 text-center d-flex flex-column justify-content-center">
                <h4 className="mb-4">New Customer</h4>
                <p className="mb-4">Create an account to enjoy faster checkout and order tracking.</p>
                <button type="button" className="btn btn-primary w-50 mx-auto" data-bs-toggle="modal" data-bs-target="#registerModal">Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="registerModalLabel">User Information</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">* First Name</label>
                    <input type="text" className="form-control" onChange={(e)=>{setFirstName(e.target.value)}} required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">* Last Name</label>
                    <input type="text" className="form-control" onChange={(e)=>{setLastName(e.target.value)}} required />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">* E-Mail</label>
                  <input type="email" className="form-control" onChange={(e)=>{setRegisterEmail(e.target.value)}} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">State</label>
                    <select className="form-select" onChange={(e)=>{setState(e.target.value)}}>
                      <option>--Select State--</option>
                      <option>Florida</option>
                      <option>Texas</option>
                      <option>California</option>
                      <option>New York</option>
                      <option>Illinois</option>
                      <option>Pennsylvania</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">City</label>
                    <input type="text" className="form-control" onChange={(e)=>{setCity(e.target.value)}} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">* Password</label>
                    <input type="password" className="form-control" onChange={(e)=>{setRegisterPassword(e.target.value)}} required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">* Password Confirm</label>
                    <input type="password" className="form-control" onChange={(e)=>{setRegisterConfirmPassword(e.target.value)}} required />
                  </div>
                  <div className="col-md-12 mb-3">
                    {matchError && <span className="text-danger">* Passwords do not match</span>}
                </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary w-100" onClick={handleRegisterSubmit}>Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>

</>
  )
}

export default SignIn
