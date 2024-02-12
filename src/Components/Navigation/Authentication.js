
import Nav from 'react-bootstrap/Nav';
import {Button } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import { logout, selectUser } from '../../Redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

const Authentication = () => {

  // const navigate = useNavigate('');
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
    

    const userSignOut = (e) =>{
      e.preventDefault();
      console.log("user",user);
      dispatch(logout());
      // navigate("/") private route will navigate user 

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