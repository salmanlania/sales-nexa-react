import React from 'react';
import { Box, Grid, Typography, IconButton, Link, useTheme } from '@mui/material';
import { RiFacebookBoxFill as Facebook } from "react-icons/ri";
import { FaLinkedin as Linkedin, FaInstagram as Instagram, FaXTwitter as XTwitter } from "react-icons/fa6";
import footer from "../assests/Landing-Page/footer-bg-created.svg";
import logo from "../assests/Landing-Page/LOGO.svg";

const FooterTest = () => {
    const theme = useTheme();
    const options = ["Home", "About", "Features", "Contact Us"];

    return (
        <Box
            component="footer"
            sx={{
                position: 'relative',
                width: '100%',
                backgroundColor: theme.palette.grey[100],
                py: 5,
                backgroundImage: `url(${footer})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Grid container spacing={4} sx={{ justifyContent: 'center', color: theme.palette.common.white }}>
                {/* Social Links Section */}
                <Grid item xs={12} sm={6} md={3} textAlign="center">
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                        <IconButton href="#"><Facebook fontSize="large" /></IconButton>
                        <IconButton href="#"><Linkedin fontSize="large" /></IconButton>
                        <IconButton href="#"><Instagram fontSize="large" /></IconButton>
                        <IconButton href="#"><XTwitter fontSize="large" /></IconButton>
                    </Box>
                </Grid>

                {/* Logo and Description */}
                <Grid item xs={12} sm={6} md={3}>
                    <Box textAlign="center">
                        <Box component="img" src={logo} alt="logo" sx={{ width: 150, mb: 2 }} />
                        <Typography variant="body1" sx={{ fontSize: '16px', lineHeight: 1.5 }}>
                            Join the ranks of sales professionals who are transforming their approach with SalesNexa.
                            Say goodbye to the manual work and hello to the future of sales automation. Get started today and experience the difference.
                        </Typography>
                    </Box>
                </Grid>

                {/* Quick Menu */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" sx={{ mb: 2 }}>Quick Menu</Typography>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {options.map((option, i) => (
                            <li key={i} style={{ marginBottom: '8px', cursor: 'pointer' }}>
                                <Typography variant="body1">{option}</Typography>
                            </li>
                        ))}
                    </ul>
                </Grid>

                {/* Contact Section */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" sx={{ mb: 2 }}>Contact</Typography>
                    <Typography variant="body1">
                        Address: 21-C, 5th Lane, Zamzama Commercial, Phase 5, DHA, Karachi, Pakistan
                    </Typography>
                    <Link href="mailto:info@indenta-technologies.com" color="inherit">
                        info@indenta-technologies.com
                    </Link>
                    <Typography variant="body1">
                        +92 21 111 124 338
                    </Typography>
                </Grid>
            </Grid>

            {/* Copyright Section */}
            <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Typography variant="body2">
                    &copy; {new Date().getFullYear()} Indenta-Technologies. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
};

export default FooterTest;