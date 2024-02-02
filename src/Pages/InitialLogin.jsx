import React, {  } from "react";

import { Box, Container, Button, Typography, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleSvgIcon from "../Assets/google.f4674e20.svg";
import Navigation from "../Components/Navigation";
import { useNavigate } from "react-router-dom";

// import { auth, provider } from "../firebase";
// import { signInWithPopup } from "firebase/auth";
import Footer from "../Components/Footer/Footer";

const SocialLoginButton = ({ children, icon, sx, onClick }) => (
  <Button
    variant="contained"
    sx={{ width: "100%", ...sx }}
    startIcon={icon}
    onClick={onClick}
  >
    {children}
  </Button>
);

export default function InitialLogin() {
  //const [value, setValue] = useState("");
  let navigate = useNavigate();

  const handleEmailLoginClick = () => {
    navigate("/login");
  };

  // const googleSignIn = () => {
  //   signInWithPopup(auth, provider)
  //     .then((data) => {
  //       setValue(data.user.email);
  //       localStorage.setItem("email", data.user.email);
  //       console.log("user", data.user);
  //       navigate("/home");
  //     })
  //     .catch((error) => {
  //       if (error.code === "auth/popup-closed-by-user") {
  //         alert("Sign-in process was cancelled. Please try again.");
  //       } else {
  //         console.error(error);
  //         alert("An error occurred during sign-in. Please try again.");
  //       }
  //     });
  // };

  // useEffect(() => {
  //   setValue(localStorage.getItem("email"));
  // });

  return (
    <Box>
      <Navigation />

      <Container maxWidth="xs" sx={{ mt: -4 }}>
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

          <Box id="social-buttons">
            <div>
              <SocialLoginButton
                icon={<FacebookIcon />}
                sx={{
                  backgroundColor: "#4c69ba",
                  color: "white",
                  padding: "14px 1px",
                  marginTop: "8px",
                  marginBottom: "8px",
                  fontWeight: "600",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#4c69ba" },
                }}
              >
                Continue with Facebook
              </SocialLoginButton>
            </div>
            <div>
              <SocialLoginButton
                icon={<img src={GoogleSvgIcon} alt="Google Icon" />}
                sx={{
                  backgroundColor: "#ffff",
                  padding: "14px 1px",
                  marginTop: "8px",
                  marginBottom: "8px",
                  fontWeight: "600",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "transparent" },
                  color: "#000000",
                }}
                // onClick={googleSignIn}
              >
                Continue with Google
              </SocialLoginButton>
            </div>
            <div>
              <SocialLoginButton
                icon={<AppleIcon />}
                sx={{
                  backgroundColor: "#000000",
                  color: "white",
                  padding: "14px 1px",
                  marginTop: "8px",
                  marginBottom: "8px",
                  "&:hover": { backgroundColor: "#000000" },
                  fontWeight: "600",
                  textTransform: "none",
                }}
              >
                Continue with Apple
              </SocialLoginButton>
            </div>
            
          <Box sx={{ my: 2, width: '100%', textAlign: 'center' }}>
            <hr style={{ border: 'none', borderTop: '1px solid #999588' }} />
            <Typography
              sx={{
                display: 'inline-block',
                position: 'relative',
                top: '-30px',
                background: 'white',
                px: 1,
                fontSize: '14px',
                color: '#black'
              }}
            >
              or
            </Typography>
          </Box>
            <div>
              <SocialLoginButton
                icon={<MailIcon />}
                sx={{
                  backgroundColor: "#00ccbc",
                  color: "white",
                  padding: "14px 1px",
                  marginTop: "-2rem",
                  "&:hover": { backgroundColor: "#00ccbc" },
                  fontWeight: "600",
                  textTransform: "none",
                }}
                onClick={handleEmailLoginClick}
              >
                Continue with email
              </SocialLoginButton>
            </div>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Typography sx={{
                    mt: 2,
                    fontSize: "14px",
                    color: "#585c5c",
                    fontFamily: "'IBM Plex Sans', sans-serif", 
                    fontWeight: "400", 
                  }}>
                By continuing you agree to our{" "}
                <Link href="#" underline="hover" sx={{ color: "#00ccbc" , textDecoration: "underline"}}>
                  T&Cs
                </Link>
                . Please also check out our{" "}
                <Link href="#" underline="hover" sx={{ color: "#00ccbc",textDecoration: "underline" }}>
                  Privacy Policy
                </Link>
                . We use your data to offer you a personalized experience and to
                better understand and improve our services.{" "}
                <Link href="#" sx={{ color: "#00ccbc",textDecoration: "underline" }}>
                  For more information see here
                </Link>
                .
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
