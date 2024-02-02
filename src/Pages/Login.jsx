import React, {  } from "react";
import Navigation from "../Components/Navigation";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import "./styles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../Redux/userSlice";
import Footer from "../Components/Footer/Footer";


function Login() {
  const navigate = useNavigate("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [showSignUpButton, setShowSignUpButton] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);
  //const [showSignUp, setShowSignUp] = useState(false);
 
  

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    if (password !== "1234") {
      setIsPasswordCorrect(false);
    } else {
      dispatch(
        login({
          email: email,
          password: password,
          loggedIn: true,
        })
      );
      navigate("/home");
    }
    
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsButtonActive(validateEmail(e.target.value));
    setIsEmailValid(true);
    setShowSignUpButton(false);
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleContinue = () => {
    if (email !== "user@gmail.com") {
      setIsEmailValid(false);
      setShowSignUpButton(true);
      setIsButtonActive(false); 
    } else {
      setIsPasswordVisible(true);
    }
  };

  const handleSignUpClick = (e) => {
  
    e.preventDefault();
    navigate("/signup");
  };

  
  return (
    <Box>
      <Navigation />
      <Container maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 8,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            component="h1"
            sx={{ mt: 2, mb: 2, fontSize: "20px", fontWeight: "600" }}
          >
            Sign up or log in
          </Typography>
          <Typography
            sx={{
              mb: -1,
              fontSize: "1rem",
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontWeight: "400",
            }}
          >
            Email address
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleEmailChange}
            placeholder="e.g. name@example.com"
            error={!isEmailValid}
            helperText={!isEmailValid && "Email address Invalid"}
          />
          {/* conditionally render password text field and login now button based
          correct entered email , if not  continue button will be disabled and sign up button will render */}
          {isPasswordVisible ? (  
            <>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!isPasswordCorrect}
              helperText={!isPasswordCorrect && "Password incorrect"}
            />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "#00ccbc",
              color: "white",
              borderRadius: "5px",
              padding: "10px 20px",
              textTransform: "none",
              fontSize: "15px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#009da5",
              },
            }}
            onClick={handleLogin}
          >
            Login Now
          </Button>
          </>
           ):(
            <>
            <Button
            variant="contained"
            sx={{
              backgroundColor: "#00ccbc",
              color: "white",
              padding: "14px 1px",
              marginBottom: "8px",
              fontWeight: "600",
              textTransform: "none",
            }}
            fullWidth
            onClick={handleContinue}
            disabled={!isButtonActive}
          >
            Continue
          </Button>

          {/* in order to render sign up button isPasswordVisible == false and showSignUpButton == true  */}

          {showSignUpButton && ( 
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#00ccbc",
                color: "white",
                padding: "14px 1px",
                marginBottom: "8px",
                fontWeight: "600",
                textTransform: "none",
              }}
              fullWidth
              onClick={handleSignUpClick}
            >
              Sign Up Now
            </Button>
          )}
            
            </>
           )}
           <Button
            fullWidth
            variant="text"
            sx={{
              mb: 2,
              backgroundColor: "white",
              color: "#00ccbc",
              borderRadius: "5px",
              border: "1px solid #dedddc",
              padding: "10px 20px",
              textTransform: "none",
              fontSize: "1rem",
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontWeight: "400",
            }}
          >
            Forgot password?
          </Button>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

export default Login;
