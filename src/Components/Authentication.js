import { useState , useEffect} from 'react';
import {auth, app } from "../firebase";
import Nav from 'react-bootstrap/Nav';

import {onAuthStateChanged , signOut} from "firebase/auth";

const Authentication = () => {
    const [authenticatedUser , setAuthenticatedUser] = useState("");

    useEffect( () => {
      const listenAuth = onAuthStateChanged(auth, (user)=>{
        if(user){
            setAuthenticatedUser(user)
        }else{
          setAuthenticatedUser(null)
        }
      }
      )
      return () =>{
        listenAuth()
      }
    },[])

    const userSignOut = () =>{
       signOut(auth).then(()=>{
        console.log("user signed out")
       }).catch(error => console.log("error"))
    }

  return (
    <>
    {authenticatedUser === null ? 
      <>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/signup">Sign Up</Nav.Link>
      </> : 
      <>
      <Nav.Link href="/" onClick={userSignOut}>Sign Out</Nav.Link>
      </>
      }
    </>
  );
}

export default Authentication;