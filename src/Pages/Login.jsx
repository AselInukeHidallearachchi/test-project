import React, { useEffect } from 'react'
import Navigation from '../Components/Navigation'
import './styles.css';
import { useState } from 'react';
import {auth, app , provider } from "../firebase";
import {signInWithEmailAndPassword , signInWithPopup} from "firebase/auth";
import { useNavigate } from 'react-router-dom';


function Login() {

  const navigate = useNavigate('');
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value , setValue] = useState("");
  


  const signIn = (e) => {

     e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    navigate("/home")
    console.log(userCredential);
    // ...
  })
  .catch((error) => {
    console.log(error);
  });

  }


  return (
    <>
      <Navigation />
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card  text-white" style={{ backgroundColor: '#35B5AC', borderRadius: '1rem' }}>
                <div className="card-body p-5 text-center">
                  <form onSubmit={signIn}>
                    <div className="mb-md-4 mt-md-4 pb-5">
                      
                      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                      <p className="text-white-50 mb-5">Please enter your login and password!</p>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="email"
                          id="typeEmailX"
                          className="form-control form-control-lg"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="form-label" htmlFor="typeEmailX">
                          Email
                        </label>
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="password"
                          id="typePasswordX"
                          className="form-control form-control-lg"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label" htmlFor="typePasswordX">
                          Password
                        </label>
                      </div>

                      {/* Uncomment the following lines if you want to add a "Forgot password?" link */}
                      {/* <p className="small mb-5 pb-lg-2">
                        <a className="text-white-50" href="#!">
                          Forgot password?
                        </a>
                      </p> */}

                      <button className="btn btn-outline-light btn-lg px-5" type="submit">
                        Login
                      </button>

                    </div>
                  </form>

                  <div>
                    <p className="mb-0">
                      Don't have an account? <a href="/signup" className="text-white-50 fw-bold">Sign Up</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login