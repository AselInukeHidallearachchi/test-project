import React, { useState } from "react";
import { Box, Button, Container, Typography, TextField } from "@mui/material";
//import { useNavigate } from "react-router-dom";
import Navigation from "../Components/Navigation/Navigation";
import Footer from "../Components/Footer/Footer";

const SignUp = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  //const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateFields = () => {
    const { name, email, password } = formData;
    return name.trim() !== "" && validateEmail(email) && password.trim() !== "";
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSignUp = (e) => {
   
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
            variant="h6"
            sx={{ mt: 2, mb: 2, fontSize: "20px", fontWeight: "600" }}
          >
            Sign Up Now
          </Typography>
          <form onSubmit={handleSignUp}>
            {/* Each TextField now has a name attribute */}
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "16px" }}
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "16px" }}
              value={formData.email}
              onChange={handleChange}
              error={formData.email.trim() !== "" && !validateEmail(formData.email)}
              helperText={
                formData.email.trim() !== "" && !validateEmail(formData.email) && "Invalid email"
              }
            />
            <TextField
              name="password"
              label="Password"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "16px" }}
              value={formData.password}
              onChange={handleChange}
              type="password"
            />
            <Button
              type="submit"
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
              disabled={!validateFields()}
            >
              Sign Up
            </Button>
          </form>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default SignUp;
