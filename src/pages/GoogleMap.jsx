// // import React, { useState } from 'react';
// // import { Box, Typography, Grid, InputAdornment, IconButton, Button } from '@mui/material';
// // import { Visibility, VisibilityOff } from '@mui/icons-material';
// // import GoogleMaps from '../assests/google-maps.png'
// // import Select from 'react-select-country-list';

// // const googleLogoWidth = { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' };

// // const styles = {
// //     input: {
// //         height: '1.3rem',
// //         fontSize: '16px',
// //         outline: 'none',
// //         border: 'none',
// //         borderBottom: '1px solid black',
// //         width: '100%' // Full width for responsiveness
// //     },
// //     label: {
// //         marginTop: '1rem'
// //     },
// //     passwordContainer: {
// //         position: 'relative',
// //         width: '100%'
// //     },
// //     iconButton: {
// //         position: 'absolute',
// //         right: 0,
// //         top: '10%',
// //         transform: 'translateY(-50%)',
// //     }
// // };

// // export default function LinkedinScrapping() {

// //     const [selectedCountry, setSelectedCountry] = useState('');

// //     const handleCountryChange = (option) => {
// //         setSelectedCountry(option);
// //     };

// //     return (
// //         <>
// //             <Box
// //                 display="flex"
// //                 alignItems="center"
// //                 p={0}
// //                 m={0}
// //                 sx={{ marginTop: '1rem', flexDirection: { xs: 'column', md: 'row' }, mb: "48px" }}
// //             >
// //                 <Box
// //                     component="img"
// //                     src={GoogleMaps}
// //                     alt="Google Maps"
// //                     sx={{ width: googleLogoWidth }}
// //                 />
// //                 <Typography variant="h3" component="h1" sx={{ ml: { md: 2 }, mt: { xs: 2, md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
// //                     Google Maps
// //                 </Typography>
// //             </Box>

// //             <Grid container spacing={3}>
// //                 <Grid item xs={12}>
// //                     <label htmlFor="category" style={styles.label}>Enter Your Email</label>
// //                     <input id="category" type="text" style={styles.input} />
// //                 </Grid>
// //                 <Grid item xs={12}>
// //                     <label htmlFor="country" style={styles.label}>Select Your Location</label>
// //                     <Select
// //                         id="country"
// //                         onChange={handleCountryChange}
// //                         value={selectedCountry}
// //                         options={Select.getAllCountries()} // Get all country options
// //                         styles={{
// //                             control: (base) => ({
// //                                 ...base,
// //                                 ...styles.select
// //                             })
// //                         }}
// //                     />
// //                 </Grid>
// //             </Grid>
// //             <Box
// //                 display="flex"
// //                 alignItems="center"
// //                 justifyContent="center"
// //                 p={0}
// //                 m={0}
// //                 sx={{ marginTop: '1rem', flexDirection: { xs: 'column', md: 'row' }, mb: 3 }}
// //             >
// //                 <Button sx={{ background: '#0088CC', borderRadius: '1000px', color: '#ffff', width: 'fit-content', height: '100%', padding: '1rem' }}>Scrape</Button>
// //             </Box>
// //         </>
// //     );
// // // }
// // console.log('Country Options:', countryOptions); // Log the country options to the console
// import React, { useState, useEffect } from 'react';
// import { Box, Typography, Grid, Button } from '@mui/material';
// import GoogleMaps from '../assests/google-maps.png';
// import Select from 'react-select';
// import { CountryRegionData } from 'react-country-region-selector';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// const googleLogoWidth = { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' };

// const styles = {
//     input: {
//         height: '1.3rem',
//         fontSize: '16px',
//         outline: 'none',
//         border: 'none',
//         borderBottom: '1px solid black',
//         width: '100%' // Full width for responsiveness
//     },
//     label: {
//         marginTop: '1rem'
//     }
// };

// export default function LinkedinScrapping() {
//     // const [selectedCountry, setSelectedCountry] = useState(null);
//     // const [countries, setCountries] = useState([]);

//     // useEffect(() => {
//     //     document.title = 'Google Map Scrapping | Sales Nexa';
//     //     const countryOptions = CountryRegionData.map(country => {
//     //         // console.log('Country object:', country); // Log each country object
//     //         return {
//     //             value: country[1], // Adjust based on actual property names
//     //             label: country[0]
//     //         };
//     //     });
    
//     //     // console.log('Country Options:', countryOptions); // Log the country options to the console
//     //     setCountries(countryOptions); // Set to the entire array
//     // }, []);
        

//     // const handleCountryChange = (option) => {
//     //     setSelectedCountry(option);
//     // };

//     // const navigate = useNavigate()
//     const [selectedCountry, setSelectedCountry] = useState('Karachi');
//     const [countries, setCountries] = useState([]);
//     const [email, setEmail] = useState('daddas');

//     useEffect(() => {
//         document.title = 'Google Map Scrapping | Sales Nexa';
//         const countryOptions = CountryRegionData.map(country => {
//             return {
//                 value: country[1],
//                 label: country[0]
//             };
//         });
//         setCountries(countryOptions);
//     }, []);

//     const handleCountryChange = (option) => {
//         setSelectedCountry(option);
//     };

//     const navigate = useNavigate();

//     // const handleScrape = async () => {
//     //     const token = localStorage.getItem('token'); // Retrieve token from local storage
//     //     const category = "daddas"; // Set the category as needed
//     //     const location = selectedCountry ? selectedCountry.label : "Karachi"; // Get location from selected country or set default

//     //     try {
//     //         const response = await fetch('http://salesnexa.indenta.ai:8000/api/scraper/google-map-scraper/start/', {
//     //             method: 'POST',
//     //             headers: {
//     //                 'Accept': 'application/json',
//     //                 'Authorization': `Bearer ${token}`,
//     //             },
//     //             body: new URLSearchParams({
//     //                 category: category,
//     //                 location: location,
//     //             })
//     //         });

//     //         if (response.ok) {
//     //             const data = await response.json(); // Process response data if needed
//     //             Swal.fire({
//     //                 title: 'Success!',
//     //                 text: 'Scraping started successfully!',
//     //                 icon: 'success',
//     //                 confirmButtonText: 'OK'
//     //             });
//     //         } else {
//     //             // Handle errors
//     //             Swal.fire({
//     //                 title: 'Error!',
//     //                 text: 'Failed to start scraping.',
//     //                 icon: 'error',
//     //                 confirmButtonText: 'OK'
//     //             });
//     //         }
//     //     } catch (error) {
//     //         console.error('Error:', error);
//     //         Swal.fire({
//     //             title: 'Error!',
//     //             text: 'An error occurred while contacting the server.',
//     //             icon: 'error',
//     //             confirmButtonText: 'OK'
//     //         });
//     //     }
//     // };

//     const handleScrape = async () => {
//         const token = localStorage.getItem('token'); // Retrieve token from local storage
//         const category = "daddas"; // Set the category as needed
//         const location = selectedCountry ? selectedCountry.label : "Karachi"; // Get location from selected country or set default
    
//         try {
//             const response = await fetch('http://salesnexa.indenta.ai:8000/api/scraper/google-map-scraper/start/', {
//                 method: 'POST',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Authorization': `Bearer ${token}`,
//                     'Content-Type': 'application/json', // Set content type to JSON
//                 },
//                 body: JSON.stringify({ // Use JSON.stringify to send JSON data
//                     category: category,
//                     location: location,
//                 })
//             });
    
//             if (response.ok) {
//                 const data = await response.json(); // Process response data if needed
//                 Swal.fire({
//                     title: 'Success!',
//                     text: 'Scraping started successfully!',
//                     icon: 'success',
//                     confirmButtonText: 'OK'
//                 });
//             } else {
//                 const errorData = await response.json();
//                 Swal.fire({
//                     title: 'Error!',
//                     text: errorData.detail || 'Failed to start scraping.',
//                     icon: 'error',
//                     confirmButtonText: 'OK'
//                 });
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             Swal.fire({
//                 title: 'Error!',
//                 text: 'An error occurred while contacting the server.',
//                 icon: 'error',
//                 confirmButtonText: 'OK'
//             });
//         }
//     };
//     const handleEmailChange = (e) => {
//         setEmail(e.target.value); // Update email state on input change
//     };    
//     return (
//         <div style={{borderRadius : '100px', display: 'flex', flexDirection: 'column', marginLeft: '30%', marginRight: '30%', background: '#FFFFFF', marginTop: '2rem', padding: '2rem'}}>
//             <Box
//                 display="flex"
//                 alignItems="center"
//                 p={0}
//                 m={0}
//                 sx={{ marginTop: '1rem', flexDirection: { xs: 'column', md: 'row' }, mb: "48px" }}
//             >
//                 <Box
//                     component="img"
//                     src={GoogleMaps}
//                     alt="Google Maps"
//                     sx={{ width: googleLogoWidth }}
//                 />
//                 <Typography variant="h3" component="h1" sx={{ ml: { md: 2 }, mt: { xs: 2, md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
//                     Google Maps
//                 </Typography>
//             </Box>

//             <Grid container spacing={3}>
//                 <Grid item xs={12}>
//                     <label htmlFor="category" style={styles.label}>Category</label>
//                     <input id="email" type="text" style={styles.input} value={email} onChange={handleEmailChange} />
//                 </Grid>
//                 <Grid item xs={12}>
//                     <label htmlFor="country" style={styles.label}>Select Your Location</label>
//                     <Select
//                         id="country"
//                         options={countries} // Use the populated country options
//                         value={selectedCountry}
//                         onChange={handleCountryChange}
//                     />
//                 </Grid>
//             </Grid>
//             <Box
//                 display="flex"
//                 alignItems="center"
//                 justifyContent="center"
//                 p={0}
//                 m={0}
//                 sx={{ marginTop: '1rem', flexDirection: { xs: 'column', md: 'row' }, mb: 3 }}
//             >
//                 <Button onClick={handleScrape} sx={{ background: '#0088CC', borderRadius: '1000px', color: '#ffff', width: 'fit-content', height: '100%', padding: '1rem', paddingLeft : '2rem' , paddingRight : '2rem' }}>Scrape</Button>
//             </Box>
//         </div>
//     );
// }
// import React, { useState, useEffect } from 'react';
// import { Box, Typography, Grid, Button } from '@mui/material';
// import GoogleMaps from '../assests/google-maps.png';
// import Swal from 'sweetalert2';

// const googleLogoWidth = { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' };

// const styles = {
//     input: {
//         height: '1.3rem',
//         fontSize: '16px',
//         outline: 'none',
//         border: 'none',
//         borderBottom: '1px solid black',
//         width: '100%', // Full width for responsiveness
//     },
//     label: {
//         marginTop: '1rem',
//     },
// };

// export default function LinkedinScrapping() {
//     const [location, setLocation] = useState('Karachi'); // State for location input
//     const [email, setEmail] = useState('daddas');

//     const handleScrape = async () => {
//         const token = localStorage.getItem('token'); // Retrieve token from local storage
//         const category = "daddas"; // Set the category as needed
//         const selectedLocation = location || "Karachi"; // Get location from input or set default

//         try {
//             const response = await fetch('http://salesnexa.indenta.ai:8000/api/scraper/google-map-scraper/start/', {
//                 method: 'POST',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Authorization': `Bearer ${token}`,
//                     'Content-Type': 'application/json', // Set content type to JSON
//                 },
//                 body: JSON.stringify({ // Use JSON.stringify to send JSON data
//                     category: category,
//                     location: selectedLocation,
//                 }),
//             });

//             if (response.ok) {
//                 const data = await response.json(); // Process response data if needed
//                 Swal.fire({
//                     title: 'Success!',
//                     text: 'Scraping started successfully!',
//                     icon: 'success',
//                     confirmButtonText: 'OK',
//                 });
//             } else {
//                 const errorData = await response.json();
//                 Swal.fire({
//                     title: 'Error!',
//                     text: errorData.detail || 'Failed to start scraping.',
//                     icon: 'error',
//                     confirmButtonText: 'OK',
//                 });
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             Swal.fire({
//                 title: 'Error!',
//                 text: 'An error occurred while contacting the server.',
//                 icon: 'error',
//                 confirmButtonText: 'OK',
//             });
//         }
//     };

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value); // Update email state on input change
//     };

//     const handleLocationChange = (e) => {
//         setLocation(e.target.value); // Update location state on input change
//     };

//     return (
//         <div style={{ borderRadius: '100px', display: 'flex', flexDirection: 'column', marginLeft: '30%', marginRight: '30%', background: '#FFFFFF', marginTop: '2rem', padding: '2rem' }}>
//             <Box
//                 display="flex"
//                 alignItems="center"
//                 p={0}
//                 m={0}
//                 sx={{ marginTop: '1rem', flexDirection: { xs: 'column', md: 'row' }, mb: "48px" }}
//             >
//                 <Box
//                     component="img"
//                     src={GoogleMaps}
//                     alt="Google Maps"
//                     sx={{ width: googleLogoWidth }}
//                 />
//                 <Typography variant="h3" component="h1" sx={{ ml: { md: 2 }, mt: { xs: 2, md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
//                     Google Maps
//                 </Typography>
//             </Box>

//             <Grid container spacing={3}>
//                 <Grid item xs={12}>
//                     <label htmlFor="email" style={styles.label}>Email</label>
//                     <input id="email" type="text" style={styles.input} value={email} onChange={handleEmailChange} />
//                 </Grid>
//                 <Grid item xs={12}>
//                     <label htmlFor="location" style={styles.label}>Enter Your Location</label>
//                     <input id="location" type="text" style={styles.input} value={location} onChange={handleLocationChange} />
//                 </Grid>
//             </Grid>
//             <Box
//                 display="flex"
//                 alignItems="center"
//                 justifyContent="center"
//                 p={0}
//                 m={0}
//                 sx={{ marginTop: '1rem', flexDirection: { xs: 'column', md: 'row' }, mb: 3 }}
//             >
//                 <Button onClick={handleScrape} sx={{ background: '#0088CC', borderRadius: '1000px', color: '#ffff', width: 'fit-content', height: '100%', padding: '1rem', paddingLeft: '2rem', paddingRight: '2rem' }}>Scrape</Button>
//             </Box>
//         </div>
//     );
// }
import React, { useState } from 'react';
import { Box, Typography, Grid, Button, CircularProgress } from '@mui/material';
import GoogleMaps from '../assests/google-maps.png';
import Swal from 'sweetalert2';

const googleLogoWidth = { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' };

const styles = {
    input: {
        height: '1.3rem',
        fontSize: '16px',
        outline: 'none',
        border: 'none',
        borderBottom: '1px solid black',
        width: '100%', // Full width for responsiveness
    },
    label: {
        marginTop: '1rem',
    },
};

export default function LinkedinScrapping() {
    const [location, setLocation] = useState('Karachi');
    const [email, setEmail] = useState('daddas');
    const [loading, setLoading] = useState(false);

    const handleScrape = async () => {
        const token = localStorage.getItem('token');
        const category = email; // Use the email as the category for scraping
        const selectedLocation = location || "Karachi";

        if (!email || !selectedLocation) {
            Swal.fire({
                title: 'Error!',
                text: 'Please fill in both email and location.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
            return;
        }

        setLoading(true); // Set loading state to true

        try {
            const response = await fetch('http://salesnexa.indenta.ai:8000/api/scraper/google-map-scraper/start/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    category: category,
                    location: selectedLocation,
                }),
            });

            setLoading(false); // Reset loading state after the request completes

            if (response.ok) {
                const data = await response.json();
                Swal.fire({
                    title: 'Success!',
                    text: 'Scraping started successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
            } else {
                const errorData = await response.json();
                Swal.fire({
                    title: 'Error!',
                    text: errorData.detail || 'Failed to start scraping.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        } catch (error) {
            setLoading(false); // Reset loading state on error
            console.error('Error:', error);
            Swal.fire({
                title: 'Error!',
                text: 'An error occurred while contacting the server.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };

    return (
        <div style={{ borderRadius: '100px', display: 'flex', flexDirection: 'column', marginLeft: '30%', marginRight: '30%', background: '#FFFFFF', marginTop: '2rem', padding: '2rem' }}>
            <Box display="flex" alignItems="center" p={0} m={0} sx={{ marginTop: '1rem', flexDirection: { xs: 'column', md: 'row' }, mb: "48px" }}>
                <Box component="img" src={GoogleMaps} alt="Google Maps" sx={{ width: googleLogoWidth }} />
                <Typography variant="h3" component="h1" sx={{ ml: { md: 2 }, mt: { xs: 2, md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
                    Google Maps
                </Typography>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <label htmlFor="email" style={styles.label}>Email</label>
                    <input id="email" type="text" style={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                    <label htmlFor="location" style={styles.label}>Enter Your Location</label>
                    <input id="location" type="text" style={styles.input} value={location} onChange={(e) => setLocation(e.target.value)} />
                </Grid>
            </Grid>

            <Box display="flex" alignItems="center" justifyContent="center" p={0} m={0} sx={{ marginTop: '1rem', flexDirection: { xs: 'column', md: 'row' }, mb: 3 }}>
                <Button onClick={handleScrape} disabled={loading} sx={{ background: '#0088CC', borderRadius: '1000px', color: '#ffff', width: 'fit-content', height: '100%', padding: '1rem', paddingLeft: '2rem', paddingRight: '2rem' }}>
                    {loading ? <CircularProgress size={24} color="inherit" /> : 'Scrape'}
                </Button>
            </Box>
        </div>
    );
}
