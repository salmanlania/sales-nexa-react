// import React from 'react';
// import { Box, Grid, Typography, Button } from '@mui/material';
// import Slider from 'react-slick';
// import slideOne from '../assests/Landing-Page/slide1.png';
// import slideTwo from '../assests/Landing-Page/slide2.png';
// import slideThree from '../assests/Landing-Page/slide3.png';
// import '../pages/home.css'

// export default function GatewayAutomation() {
//   // Slider settings for auto sliding every 4 seconds
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     arrows: false,
//   };

//   return (
//     <Box
//       sx={{
//         background: '#EEEFEF',
//         position: 'relative',
//         paddingBottom: '2rem',
//       }}
//     >
//       <Grid container>
//         <Grid item xs={12} md={6}>
//           <Typography
//             variant="h6"
//             sx={{
//               fontSize: '18px',
//               display: 'flex',
//               alignItems: 'center',
//               marginTop: '10px',
//               letterSpacing: '3px',
//               paddingLeft: '1rem',
//             }}
//           >
//             Welcome To
//           </Typography>
//         </Grid>

//         {/* "Sales Nexa" - Center */}
//         <Grid
//           container
//           item
//           xs={12}
//           justifyContent="center"
//           alignItems="center"
//           sx={{ gap: '1rem', marginRight: '3rem' }}
//         >
//           <Grid item>
//             <Typography
//               variant="h1"
//               sx={{
//                 fontSize: { xs: '100px', sm: '120px', md: '140px' },
//                 textTransform: 'uppercase',
//                 fontWeight: 'bold',
//                 fontFamily: 'Bakbak One',
//               }}
//             >
//               Sales
//             </Typography>
//           </Grid>
//           <Grid item>
//             <Typography
//               variant="h1"
//               sx={{
//                 fontSize: { xs: '100px', sm: '120px', md: '140px' },
//                 textTransform: 'uppercase',
//                 color: '#0088CC',
//                 fontWeight: 'bold',
//                 fontFamily: 'Bakbak One',
//               }}
//             >
//               Nexa
//             </Typography>
//           </Grid>
//         </Grid>

//         {/* "Your Gateway to Automation" - Bottom Right */}
//         <Grid item xs={12}>
//           <Typography
//             variant="h6"
//             sx={{
//               fontSize: '18px',
//               display: 'flex',
//               justifyContent: 'flex-end',
//               letterSpacing: '3px',
//               paddingRight: '1rem',
//             }}
//           >
//             Your Gateway to Automation
//           </Typography>
//         </Grid>

//         {/* Slider Section */}
//         <Grid item xs={12}>
//           <Slider {...sliderSettings} style={{ marginLeft: '23%', position: 'relative', bottom: '50px' }}>
//             <Box
//               component="img"
//               src={slideOne}
//               alt="Slide 1"
//               sx={{ width: '500px !important', height: 'auto' }}
//             />
//             {/* <Box
//               component="img"
//               src={slideTwo}
//               alt="Slide 2"
//               sx={{ width: '500px !important', height: 'auto' }}
//             /> */}
//             <Box
//               component="img"
//               src={slideThree}
//               alt="Slide 3"
//               sx={{ width: '500px !important', height: 'auto' }}
//             />
//           </Slider>
//         </Grid>

//         {/* Get Started Button */}
//         <Grid item xs={12} sx={{ textAlign: 'center', marginTop: '2rem' }}>
//           <Button
//             variant="contained"
//             size="large"
//             sx={{ padding: '10px 30px', fontSize: '18px', color: '#0088CC', border: '2px solid #0088CC', background: 'none', borderRadius: '1000px' }}
//           >
//             Get Started
//           </Button>
//         </Grid>
//       </Grid>
//       {/* <hr /> */}
//     </Box>
//   );
// }
import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import Slider from 'react-slick';
import slideOne from '../assests/Landing-Page/slide1.png';
import slideTwo from '../assests/Landing-Page/slide2.png';
import slideThree from '../assests/Landing-Page/slide3.png';
import '../pages/home.css';

export default function GatewayAutomation() {
    // Slider settings for auto sliding every 4 seconds
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
    };

    return (
        <Box
            sx={{
                background: '#EEEFEF',
                position: 'relative',
                paddingBottom: '2rem',
                paddingX: { xs: '1rem', sm: '2rem', md: '3rem', lg: '5rem' }, // Responsive padding
            }}
        >
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: { xs: '14px', sm: '16px', md: '18px' }, // Responsive font size
                            display: 'flex',
                            alignItems: 'center',
                            marginTop: '10px',
                            letterSpacing: '3px',
                            paddingLeft: '1rem',
                        }}
                    >
                        Welcome To
                    </Typography>
                </Grid>

                {/* "Sales Nexa" - Center */}
                <Grid
                    container
                    item
                    xs={12}
                    justifyContent="center"
                    alignItems="center"
                    sx={{ gap: '1rem', marginRight: { xs: '0', md: '3rem' } }}
                >
                    <Grid item>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: '60px', sm: '80px', md: '120px', lg: '140px' }, // Responsive font size
                                textTransform: 'uppercase',
                                fontWeight: 'bold',
                                fontFamily: 'Bakbak One',
                            }}
                        >
                            Sales
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: '60px', sm: '80px', md: '120px', lg: '140px' }, // Responsive font size
                                textTransform: 'uppercase',
                                color: '#0088CC',
                                fontWeight: 'bold',
                                fontFamily: 'Bakbak One',
                            }}
                        >
                            Nexa
                        </Typography>
                    </Grid>
                </Grid>

                {/* "Your Gateway to Automation" - Bottom Right */}
                <Grid item xs={12}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: { xs: '14px', sm: '16px', md: '18px' }, // Responsive font size
                            display: 'flex',
                            justifyContent: 'flex-end',
                            letterSpacing: '3px',
                            paddingRight: '1rem',
                        }}
                    >
                        Your Gateway to Automation
                    </Typography>
                </Grid>

                {/* Slider Section */}
                <Grid item xs={12}>
                    <Slider
                        {...sliderSettings}
                        style={{
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            width: '100%',
                            maxWidth: '450px', // Center slider container with max width
                            display: 'flex !important',
                            justifyContent: 'center',
                        }}
                    >
                        <Box
                            component="img"
                            src={slideOne}
                            alt="Slide 1"
                            sx={{
                                width: '100%',
                                maxWidth: '450px',
                                height: 'auto',
                                margin: '0 auto',
                            }}
                        />
                        <Box
                            component="img"
                            src={slideThree}
                            alt="Slide 3"
                            sx={{
                                width: '100%',
                                maxWidth: '450px', // Set max width to 450px
                                height: 'auto',
                                margin: '0 auto', // Center the image
                            }}
                        />
                    </Slider>
                </Grid>

                {/* Get Started Button */}
                <Grid item xs={12} sx={{ textAlign: 'center', marginTop: '2rem' }}>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            padding: { xs: '8px 20px', sm: '10px 25px', md: '12px 30px' }, // Responsive padding
                            fontSize: { xs: '16px', sm: '18px' }, // Responsive font size
                            color: '#0088CC',
                            border: '2px solid #0088CC',
                            background: 'none',
                            borderRadius: '1000px',
                        }}
                    >
                        Get Started
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}
