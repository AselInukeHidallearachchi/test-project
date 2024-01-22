import { useState , useEffect} from 'react';
import {auth, app } from "../firebase";
import Nav from 'react-bootstrap/Nav';
import {
  AppBar,
  Box,
  Button,
  InputBase,
  Toolbar,
  styled,
  Grid,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";


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

    const buttonStyles = {
      borderWidth: "1px",
      color: "black",
      borderColor: "#e8ebeb",
      textTransform: "none",
      "&:hover": { borderWidth: "1px", borderColor: "#dbdbdb" },
    };

  return (
    <>
    {authenticatedUser === null ? 
      <>
      <Nav.Link href="/">
              <Button
                    sx={buttonStyles}
                    variant="outlined"
                    startIcon={<HomeOutlinedIcon sx={{ color: "#00ccbc" }} />}
                  > Sign Up or Log In
              </Button>
      </Nav.Link>

      {/* <Nav.Link href="/signup">Sign Up</Nav.Link> */}
      </> : 
      <>
      <Nav.Link href="/" onClick={userSignOut}>
              <Button
                    sx={buttonStyles}
                    variant="outlined"
                    startIcon={<HomeOutlinedIcon sx={{ color: "#00ccbc" }} />}
                  > Sign Out
              </Button>
      </Nav.Link>
      </>
      }
    </>
  );
}

export default Authentication;