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

import { logout, selectUser } from '../Redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const Authentication = () => {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
    

    const userSignOut = (e) =>{
      e.preventDefault();
      dispatch(logout());

    }

    const buttonStyles = {
      borderWidth: "1px",
      color: "black",
      borderColor: "#e8ebeb",
      textTransform: "none",
      fontSize: "1rem", 
      padding: "6px 20px", 
      fontFamily: "'IBM Plex Sans', sans-serif", 
      fontWeight: "400", 
      "&:hover": { borderWidth: "1px", borderColor: "#dbdbdb" },
      "&:active": {
        borderColor: "#00ccbc",
        boxShadow: "0 0 8px #00ccbc", 
      },
    };

  return (
    <>
    {user === null ? 
      <>
      <Nav.Link href="/">
              <Button
                    sx={buttonStyles}
                    variant="outlined"
                    startIcon={<HomeOutlinedIcon sx={{ color: "#00ccbc" }} />}
                  > Sign up or log in
              </Button>
      </Nav.Link>
      </> : 
      <>
      <Nav.Link href="/" onClick={(e)=>userSignOut (e)}>
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