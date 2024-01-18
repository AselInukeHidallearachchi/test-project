import React from 'react'
import Navigation from '../Components/Navigation'
import './styles.css';
import { useState } from 'react';
import {auth, app } from "../firebase";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function SignUp() {

  const navigate = useNavigate('');

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const signUp = (e) => {

    e.preventDefault();
    createUserWithEmailAndPassword (auth, email, password)
  .then((userCredential) => {
    // Signed in 
    navigate("/login")
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
              <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-5 text-center">
                  <form onSubmit={signUp}>
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
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
                        Sign Up
                      </button>

                      <div className="d-flex justify-content-center text-center mt-4 pt-1">
                        <a href="#!" className="text-white">
                          <i className="fab fa-facebook-f fa-lg"></i>
                        </a>
                        <a href="#!" className="text-white">
                          <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                        </a>
                        <a href="#!" className="text-white">
                          <i className="fab fa-google fa-lg"></i>
                        </a>
                      </div>
                    </div>
                  </form>

                  <div>
                    <p className="mb-0">
                      Already have an account? <a href="/login" className="text-white-50 fw-bold">Login</a>
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

export default SignUp