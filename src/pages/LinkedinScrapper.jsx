// import React, { useState, useEffect } from 'react';
// import { Box, Typography, Grid, IconButton, Button } from '@mui/material';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import linkedin from '../assests/linkedin.svg'
// import { useNavigate } from 'react-router-dom';
// const linkedinLogoWidth = { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' };

// const styles = {
//     input: {
//         height: '1.3rem',
//         fontSize: '16px',
//         outline: 'none',
//         border: 'none',
//         borderBottom: '1px solid black',
//         width: '100%'
//     },
//     label: {
//         marginTop: '1rem'
//     },
//     passwordContainer: {
//         position: 'relative',
//         width: '100%'
//     },
//     iconButton: {
//         position: 'absolute',
//         right: 0,
//         top: '10%',
//         transform: 'translateY(-50%)',
//     }
// };

// export default function LinkedinScrapper() {
//     const [showPassword, setShowPassword] = useState(false);

//     const handleClickShowPassword = () => {
//         setShowPassword((prev) => !prev);
//     };

//     useEffect(() => {
//         document.title = 'Linkedin Scrapping | Sales Nexa';
//     }, []);

//     const navigate = useNavigate()

//     return (
//         <div style={{ borderRadius: '100px', display: 'flex', flexDirection: 'column', marginLeft: '30%', marginRight: '30%', background: '#FFFFFF', marginTop: '2rem', padding: '2rem' }}>
//             <Box
//                 display="flex"
//                 alignItems="center"
//                 p={0}
//                 m={0}
//                 sx={{ flexDirection: { xs: 'column', md: 'row' }, mb: 3 }}
//             >
//                 <Typography variant="h3" component="h1" sx={{ ml: { md: 2 }, mt: { xs: 2, md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
//                     Linkedin
//                 </Typography>
//                 <Box
//                     component="img"
//                     src={linkedin}
//                     alt="linkedin"
//                     sx={{ width: linkedinLogoWidth }}
//                 />
//             </Box>

//             <Grid container spacing={3}>
//                 <Grid item xs={12}>
//                     <label htmlFor="email" style={styles.label}>Enter Your Email</label>
//                     <input id="email" type="email" style={styles.input} />
//                 </Grid>
//                 <Grid item xs={12}>
//                     <label htmlFor="password" style={styles.label}>Enter Your Password</label>
//                     {/* <input id="password" type="password" style={styles.input} /> */}
//                     <Box sx={styles.passwordContainer}>
//                         <input
//                             id="password"
//                             type={showPassword ? 'text' : 'password'}
//                             style={styles.input}
//                         />
//                         <IconButton
//                             onClick={handleClickShowPassword}
//                             sx={styles.iconButton}
//                         >
//                             {showPassword ? <VisibilityOff /> : <Visibility />}
//                         </IconButton>
//                     </Box>
//                 </Grid>
//                 <Grid item xs={12}>
//                     <label htmlFor="company" style={styles.label}>Enter Your Company</label>
//                     <input id="dummy1" type="text" style={styles.input} />
//                 </Grid>
//                 <Grid item xs={12}>
//                     <label htmlFor="country" style={styles.label}>Enter Your Country</label>
//                     <input id="dummy2" type="text" style={styles.input} />
//                 </Grid>
//                 <Grid item xs={12}>
//                     <label htmlFor="leads" style={styles.label}>Enter Your Leads</label>
//                     <input id="leads" type="number" style={styles.input} />
//                     <Typography sx={{ textAlign: 'left', fontSize: '12px', color: '#666', marginTop: '0.5rem' }}>
//                         * Max 250 Recipients.
//                     </Typography>
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
//                 <Button onClick={()=>navigate('/tasks')} sx={{ background: '#0088CC', borderRadius: '1000px', color: '#ffff', width: 'fit-content', height: '100%', padding: '1rem', paddingLeft: '2rem', paddingRight: '2rem' }}>Scrape</Button>
//             </Box>
//         </div>
//     );
// }
import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, IconButton, Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import linkedin from '../assests/linkedin.svg';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const linkedinLogoWidth = { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' };

const styles = {
    input: {
        height: '1.3rem',
        fontSize: '16px',
        outline: 'none',
        border: 'none',
        borderBottom: '1px solid black',
        width: '100%'
    },
    label: {
        marginTop: '1rem'
    },
    passwordContainer: {
        position: 'relative',
        width: '100%'
    },
    iconButton: {
        position: 'absolute',
        right: 0,
        top: '10%',
        transform: 'translateY(-50%)',
    }
};

export default function LinkedinScrapper() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('hammadasif308@gmail.com');
    const [password, setPassword] = useState('Pubg40241@');
    const [company, setCompany] = useState('Habibi Group');
    const [country, setCountry] = useState('Pakistan');
    const [leads, setLeads] = useState(1);
    const navigate = useNavigate();

    // 'country_name="Pakistan"' \
    // --form 'company_name="Habibi Group"' \
    // --form 'number_of_leads="1"' \
    // --form 'email="hammadasif308@gmail.com"' \
    // --form 'password="Pubg40241@"'

    const handleClickShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    useEffect(() => {
        document.title = 'Linkedin Scrapping | Sales Nexa';
    }, []);

    const handleSubmit = async () => {
        const token = localStorage.getItem('token'); // Fetch the token from localStorage

        if (!token) {
            Swal.fire({
                title: 'Error!',
                text: 'No authorization token found. Please log in first.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }

        try {
            const response = await fetch('http://salesnexa.indenta.ai:8000/api/scraper/linkedin-scraper/start/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: new URLSearchParams({
                    'country_name': country,
                    'company_name': company,
                    'number_of_leads': leads,
                    'email': email,
                    'password': password
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data); // Handle the response data
            Swal.fire({
                title: 'Success!',
                text: 'Scraping started successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });

            // Navigate to the tasks page after success
            navigate('/');
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                title: 'Error!',
                text: 'Failed to start scraping. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <div style={{ borderRadius: '20px', display: 'flex', flexDirection: 'column', marginLeft: '20%', marginRight: '20%', background: '#FFFFFF', marginTop: '2rem', padding: '2rem' }}>
            <Box
                display="flex"
                alignItems="center"
                p={0}
                m={0}
                sx={{ flexDirection: { xs: 'column', md: 'row' }, mb: 3 }}
            >
                <Typography variant="h3" component="h1" sx={{ ml: { md: 2 }, mt: { xs: 2, md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
                    Linkedin
                </Typography>
                <Box
                    component="img"
                    src={linkedin}
                    alt="linkedin"
                    sx={{ width: linkedinLogoWidth }}
                />
            </Box>

            <Grid container spacing={3} sx={{ gap: '1.6rem' }}>
                <Grid item xs={12}>
                    {/* <label htmlFor="email" style={styles.label}>Enter Your Email</label> */}
                    <input id="email" type="email" style={styles.input} value={email} placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                    {/* <label htmlFor="password" style={styles.label}>Enter Your Password</label> */}
                    <Box sx={styles.passwordContainer}>
                        <input
                            placeholder='Enter Your Password'
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            style={styles.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <IconButton
                            onClick={handleClickShowPassword}
                            sx={styles.iconButton}
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    {/* <label htmlFor="company" style={styles.label}>Enter Your Company</label> */}
                    <input id="dummy1" type="text" style={styles.input} placeholder='Enter Your Company' value={company} onChange={(e) => setCompany(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                    {/* <label htmlFor="country" style={styles.label}>Enter Your Country</label> */}
                    <input id="dummy2" type="text" style={styles.input} value={country} placeholder='Enter Your Country' onChange={(e) => setCountry(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                    {/* <label htmlFor="leads" style={styles.label}>Enter Your Leads</label> */}
                    <input id="leads" type="number" style={styles.input} value={leads} placeholder='Enter Your Leads' onChange={(e) => setLeads(e.target.value)} />
                    <Typography sx={{ textAlign: 'left', fontSize: '12px', color: '#666', marginTop: '0.5rem' }}>
                        * Max 250 Recipients.
                    </Typography>
                </Grid>
            </Grid>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                p={0}
                m={0}
                sx={{ marginTop: '1rem', flexDirection: { xs: 'column', md: 'row' }, mb: 3 }}
            >
                <Button onClick={handleSubmit} sx={{ background: '#0088CC', borderRadius: '1000px', color: '#ffff', width: 'fit-content', height: '100%', padding: '1rem', paddingLeft: '2rem', paddingRight: '2rem' }}>Scrape</Button>
            </Box>
        </div>
    );
}
