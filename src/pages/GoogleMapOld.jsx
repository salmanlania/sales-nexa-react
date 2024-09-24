import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import GoogleMaps from '../assests/google-maps.png';
import Select from 'react-select';
import { CountryRegionData } from 'react-country-region-selector';

const googleLogoWidth = { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' };

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
    }
};

export default function LinkedinScrapping() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        document.title = 'Google Map Scrapping | Sales Nexa';
        const countryOptions = CountryRegionData.map(country => {
            return {
                value: country[1], 
                label: country[0]
            };
        });
        setCountries(countryOptions); 
    }, []);
        

    const handleCountryChange = (option) => {
        setSelectedCountry(option);
    };

    return (
        <>
            <Box
                display="flex"
                alignItems="center"
                p={0}
                m={0}
                sx={{ marginTop: '1rem', flexDirection: { xs: 'column', md: 'row' }, mb: "48px" }}
            >
                <Box
                    component="img"
                    src={GoogleMaps}
                    alt="Google Maps"
                    sx={{ width: googleLogoWidth }}
                />
                <Typography variant="h3" component="h1" sx={{ ml: { md: 2 }, mt: { xs: 2, md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
                    Google Maps
                </Typography>
            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <label htmlFor="email" style={styles.label}>Enter Your Email</label>
                    <input id="email" type="text" style={styles.input} />
                </Grid>
                <Grid item xs={12}>
                    <label htmlFor="country" style={styles.label}>Select Your Location</label>
                    <Select
                        id="country"
                        options={countries} 
                        value={selectedCountry}
                        onChange={handleCountryChange}
                    />
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
                <Button sx={{ background: '#0088CC', borderRadius: '1000px', color: '#ffff', width: 'fit-content', height: '100%', padding: '1rem' }}>Scrape</Button>
            </Box>
        </>
    );
}
