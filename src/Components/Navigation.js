import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Authentication from './Authentication';
import DeliverooLogo from '../Assets/logo-teal.svg';
import {
  InputBase,
  IconButton,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityAccountIcon from "@mui/icons-material/PermIdentityOutlined";


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
  "&:hover": { borderWidth: "1px", borderColor: "#dbdbdb" },
};

const Navigation = () => {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container style={{ paddingLeft: '8rem' }}>
        <Navbar.Brand href="/home"><img
            src={DeliverooLogo}
            alt="Deliveroo Logo"
            style={svgImageStyle} 
          />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ flexGrow: 0.5 }}>
            {/* <Nav.Link href="/home">Home</Nav.Link> */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#f5f2f2",
                borderRadius: 4,
                
                marginLeft: "5rem", 
                marginRight: "5rem",
                flexGrow: 1,
                
              }}
            >
              <IconButton>
                <SearchIcon />
              </IconButton>
              <InputBase
                placeholder="Search Tossed - St Martin's Lane"
                style={{
                  flexGrow: 1,
                  marginLeft: 5,
                  marginTop: 5,
                  marginBottom: 5,
                 
                }}
                inputProps={{
                  style: {
                    backgroundColor: "transparent",
                    border: "",
                    outline: "none",
                  },
                }}
                
              />
            </div>
             <Authentication/>

             <Nav.Link >
              <Button
                  sx={AccountBtnStyles}
                  variant="outlined"
                  startIcon={
                    <PermIdentityAccountIcon sx={{ color: "#00ccbc" }} />
                  }
                >
                  Account
                </Button>
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;