
import {
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarIcon from '@mui/icons-material/Star';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import { Link } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


import ResbannerImg from '../../Assets/Resbanner.jpeg';

import { ReactComponent as DeliveryIcon } from '../../Assets/delivery.svg'; // Import SVG as a React component


const RestaurantInfoBanner = () => {
  const theme = useTheme();
  const mobile = useMediaQuery('(max-width: 600px)');

  
  

  

  return (
    <Box
      sx={{
        [theme.breakpoints.up('sm')]: {
          marginLeft: '65px',
          marginRight: '65px',
        },
      }}
    >
      <Box
        sx={{
          marginTop: '20px',
          marginBottom: '25px',
        }}
      >
        {!mobile && (
          <Button
            
            sx={{
              padding: '0px',
              color: '#00ccbc',
              display: 'flex',
              alignItems: 'center',
              marginBottom: '15px',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <ArrowBackIcon sx={{ fontSize: '1.5rem' }} />
            <Typography
              sx={{
                marginLeft: '10px',
                fontSize: '1rem',
                fontFamily: "'IBM Plex Sans', sans-serif", 
                fontWeight: "400",
                textTransform: 'none',
              }}
            >
              {' '}
              Back
            </Typography>
          </Button>
        )}
        {mobile && (
          <IconButton
            
            sx={{
              color: '#00ccbc',
              position: 'absolute',
              top: '100px',
              left: '10px',
              backgroundColor: 'white',
            }}
          >
            <ArrowBackIcon sx={{ fontSize: '1.5rem', color: '#00ccbc' }} />
          </IconButton>
        )}
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <img
                src={ResbannerImg}
                alt="Restaurant"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '5px',
                  objectFit: 'cover',
                }}
              />
              {mobile && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '550px',
                    right: '10px',
                  }}
                >
                  <Button
                    variant="outlined"
                    size="medium"
                    sx={{
                      color: '#2e3333',
                      fontFamily: "'IBM Plex Sans', sans-serif", 
                      fontWeight: "400",
                      textTransform: 'none',
                      backgroundColor: 'white',
                      border: '1px solid #D1D4D4',
                      '&:hover': {
                        backgroundColor: 'white',
                        border: '1px solid #D1D4D4',
                      },
                    }}
                    startIcon={<PeopleOutlinedIcon sx={{ color: '#00ccbc' }} />}
                  >
                    Start group order
                  </Button>
                </Box>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  '@media (max-width: 600px)': {
                    marginLeft: '20px',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'PT Sans, sans-serif',
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    lineHeight: '1.5',
                    '@media (max-width: 600px)': {
                      fontSize: '1.2rem',
                    },
                  }}
                >
                  Tossed - St Martin&apos;s Lane
                </Typography>
                <Typography
                  sx={{
                    fontSize: '1rem',
                    color: '#585c5c',
                    fontFamily: "'IBM Plex Sans', sans-serif", 
                    fontWeight: "400",
                    marginTop: '10px',
                    '@media (max-width: 600px)': {
                      fontSize: '0.9rem',
                    },
                  }}
                >
                  {' '}
                  Chicken · Salads · Healthy{' '}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontFamily: "'IBM Plex Sans', sans-serif", 
                    fontWeight: "400",
                    marginTop: '5px',
                    color: '#585c5c',
                    '@media (max-width: 600px)': {
                      fontSize: '0.9rem',
                    },
                  }}
                >
                  {' '}
                  0.20 miles away · Opens at 11:00 · £7.00 minimum · £0.49 delivery {' '}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '10px',
                    marginTop: '16px',
                  }}
                >
                  <ErrorOutlineOutlinedIcon
                    sx={{
                      marginRight: '10px',
                      color: '#929696',
                      fontSize: '20px',
                    }}
                  />
                  <Box sx={{ marginRight: '10px' }}>
                    <Typography
                      sx={{
                        fontSize: '16px',
                        fontFamily: "'IBM Plex Sans', sans-serif", 
                        fontWeight: "400",
                        lineHeight: '1.5',
                      }}
                    >
                      Info
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        color: '#585c5c',
                        lineHeight: '1',
                        fontFamily: "'IBM Plex Sans', sans-serif", 
                        fontWeight: "400",
                      }}
                    >
                      {' '}
                      Map, allergens and hygiene rating
                    </Typography>
                  </Box>
                  <ArrowForwardIosIcon
                    sx={{
                      color: '#00ccbc',
                      fontSize: '1rem',
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '16px',
                  }}
                >
                  <StarIcon
                    sx={{
                      color: '#4d7c1b',
                      marginRight: '10px',
                      fontSize: '20px',
                    }}
                  />
                  <Box sx={{ marginRight: '10px' }}>
                    <Typography
                      sx={{
                        color: '#4d7c1b',
                        fontSize: '16px',
                        lineHeight: '1.5',
                        fontFamily: "'IBM Plex Sans', sans-serif", 
                        fontWeight: "400",
                      }}
                    >
                      4.7 Excellent
                    </Typography>
                    <Typography sx={{ fontSize: '14px', lineHeight: '1.5' , fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: "400",}}>
                      {' '}
                      See all 500 reviews
                    </Typography>
                  </Box>
                  <ArrowForwardIosIcon
                    sx={{
                      color: '#00ccbc',
                      fontSize: '1rem',
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3} >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  '@media (min-width: 600px)': {
                    alignItems: 'flex-end',
                  },
                }}
              >
                <Box
                  sx={{
                    fontFamily: "'IBM Plex Sans', sans-serif", 
                    fontWeight: "400",
                    fontSize: '16px',
                    marginBottom: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    '@media (max-width: 600px)': {
                      marginLeft: '20px',
                    },
                  }}
                >
                 <DeliveryIcon
                       style={{ 
                        width: '24px',
                        height: '24px', 
                        marginRight: '10px',
                        
                      }}
                    />
                  Deliver{' '}
                  <Link
                    href=""
                    underline="none"
                    color="#00ccbc"
                    sx={{ marginLeft: '10px',
                    fontFamily: "'IBM Plex Sans', sans-serif", 
                    fontWeight: "400", }}
                  >
                    Change
                  </Link>
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'block' , } }}>
                  <Button
                    variant="outlined"
                    size="medium"
                    sx={{
                      color: '#2e3333',
                      fontFamily: "'IBM Plex Sans', sans-serif", 
                      fontWeight: "400",
                      textTransform: 'none',
                      backgroundColor: 'white',
                      border: '1px solid #D1D4D4',
                      '&:hover': {
                        backgroundColor: 'white',
                        border: '1px solid #D1D4D4',
                      },
                    }}
                    startIcon={<PeopleOutlinedIcon sx={{ color: '#00ccbc' }} />}
                  >
                    Start group order
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default RestaurantInfoBanner;