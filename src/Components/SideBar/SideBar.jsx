import "./SideBar.css"; // Assuming you keep the CSS file name as is
import DeliverooLogo from "../../Assets/logo-teal.svg";
import Slide from "@mui/material/Slide";

import CloseIcon from "@mui/icons-material/Close";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { Button, IconButton, MenuItem, Select } from "@mui/material";
import { Link } from "react-router-dom";

const svgImageStyle = {
  width: "130px",
  height: "auto",
  fill: "#00ccbc",
};

const SideBar = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`backdrop ${isOpen ? "open" : ""}`}
        onClick={onClose}
      ></div>
      <Slide direction="left" in={isOpen} mountOnEnter unmountOnExit>
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <div className="sidebar-header">
            <div className="logo">
              <Link to="/">
                <img src={DeliverooLogo} alt="logo" style={svgImageStyle} />
              </Link>
            </div>

            <IconButton
              className="close-button"
              disableRipple
              onClick={onClose}
            >
              <CloseIcon sx={{ color: "#00ccbc" }} fontSize="medium" />
            </IconButton>
          </div>
          <div className="sidebar-content">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#00ccbc",
                color: "white",
                borderRadius: "5px",
                padding: "10px 20px",
                textTransform: "none",
                fontSize: '15px', 
                fontWeight: 'bold', 
                "&:hover": {
                  backgroundColor: "#009da5", // Darker on hover
                },
              }}
            >
              Sign up or log in
            </Button>
            <br />
            <Button
              disableRipple
              variant="text"
              startIcon={<HelpOutlineOutlinedIcon sx={{ color: 'grey' }} />}
              sx={{
                justifyContent: 'flex-start', // Aligns the button contents (icon and text) to the left
                color: 'black', 
                textTransform: 'none', // Override text capitalization
                '&:hover': {
                    color: '#00ccbc', // Changes the text color to blue on hover
                    backgroundColor: 'transparent' // Keeps the background transparent on hover
                  },
              }}
            >
              FAQs
            </Button>
            <div className="spacer"></div>
            <Select value="English">
              <MenuItem value="English">English</MenuItem>
            </Select>
            <br />
            <Select value="United Kingdom">
              <MenuItem value="United Kingdom">United Kingdom</MenuItem>
              <MenuItem value="United States">United States</MenuItem>
              <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
              <MenuItem value="Singapore">Singapore</MenuItem>
            </Select>
          </div>
        </div>
      </Slide>
    </>
  );
};

export default SideBar;
