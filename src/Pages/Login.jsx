import React, { useEffect } from "react";
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
  

  const dispatch = useDispatch();

  const signIn = (e) => {
    e.preventDefault();

    dispatch(
      login({
        email: email,
        password: password,
        loggedIn: true,
      })
    );
    navigate("/home");
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
              fontSize: "15px",
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
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. name@example.com"
          />
          {email === "user@gmail.com" && (
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
            />
          )}
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
            onClick={signIn}
            disabled={!(email === "user@gmail.com" && password === "1234")} // Enable button only if email and password match
          >
            Continue
          </Button>
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
