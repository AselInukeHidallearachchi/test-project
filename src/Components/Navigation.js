import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Authentication from './Authentication';
import DeliverooLogo from '../Assets/logo-teal.svg';
import PermIdentityAccountIcon from "@mui/icons-material/PermIdentityOutlined";
import SideBar from './SideBar/SideBar.jsx';
import { Button} from "@mui/material";


const svgImageStyle = {
  width: "120px",
  height: "35px",
  fill: "#00ccbc",
};

const AccountBtnStyles = {
 
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


const Navigation = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
  console.log('Sidebar was:', sidebarOpen);
  setSidebarOpen(!sidebarOpen);
};

 // Extended inline style for sticky Navbar with bg-white and border-bottom
 const stickyNavbarStyle = {
  position: 'sticky',
  top: 0,
  zIndex: 1020, // Ensure it's above other content, adjust if necessary
  backgroundColor: 'white', // This is your bg-white equivalent
  borderBottom: '1px solid #d0dbd7', // Add border bottom; adjust color as needed
};


  return (
    <Navbar expand="lg"  style={stickyNavbarStyle} >
      <Container style={{ paddingLeft: '6.5rem'}}>
        <Navbar.Brand href="/home"><img
            src={DeliverooLogo}
            alt="Deliveroo Logo"
            style={svgImageStyle} 
          />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ flexGrow: 0.95 }}>
           
          <div style={{ flexGrow: 1 }}></div>
             <Authentication/>

             <Nav.Link >
              <Button
                  sx={AccountBtnStyles}
                  variant="outlined"
                  startIcon={
                    <PermIdentityAccountIcon sx={{ color: "#00ccbc" }} />
                  }
                  onClick={toggleSidebar}
                >
                  Account
                </Button>
              </Nav.Link>
              
          </Nav>
        </Navbar.Collapse>
        {sidebarOpen && <SideBar isOpen={sidebarOpen} onClose={toggleSidebar} />}
      </Container> 
    </Navbar>
    
  );
}

export default Navigation;

