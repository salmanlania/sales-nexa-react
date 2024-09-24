import React, { useState } from 'react';
import { AppBar, Toolbar, Button, List, ListItem, Box, IconButton, Drawer, Grid, Popover, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assests/logo.png';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

export default function Navbar() {
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null); // State for dropdown menu

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleMenuClick = (event) => {
        if (anchorEl) {
            setAnchorEl(null);
        } else {
            setAnchorEl(event.currentTarget);
        }
    };

    const handleMenuClose = () => {
        setAnchorEl(null); // Explicitly close
    };

    function isAuthenticated() {
        return !!localStorage.getItem("token");
    }

    // const handleLogout = async (event) => {
    //     event.preventDefault();
    //     const access = localStorage.getItem('token');
    //     const refresh = localStorage.getItem('refreshToken');

    //     if (!access || !refresh) {
    //         Swal.fire('Error', 'You are not authorized. Please log in.', 'error');
    //         return;
    //     }

    //     try {
    //         // Use FormData to send the refresh token as form data
    //         const formData = new FormData();
    //         formData.append('refresh_token', refresh);

    //         const response = await axios.post(
    //             'http://salesnexa.indenta.ai:8000/api/accounts/logout/',
    //             formData, // Send form data
    //             {
    //                 headers: {
    //                     'Content-Type': 'application/json', // Set the correct content type for form data
    //                     'Authorization': `Bearer ${access}`, // Include the access token in the headers
    //                 }
    //             }
    //         );

    //         console.log('API response:', response);
    //         Swal.fire('Success', 'Logged out successfully!', 'success');

    //         // Clear tokens from localStorage
    //         localStorage.removeItem('token');
    //         localStorage.removeItem('refreshToken');

    //         navigate('/'); // Redirect to login page after logout
    //     } catch (error) {
    //         console.error('Logout error:', error);
    //         Swal.fire('Error', 'Logout failed. Please try again.', 'error');
    //     }
    // };


    // const handleLogout = async (event) => {
    //     event.preventDefault();
    //     const access = localStorage.getItem('token');
    //     const refresh = localStorage.getItem('refreshToken'); // Assuming you store refresh token similarly

    //     if (!access || !refresh) {
    //         Swal.fire('Error', 'You are not authorized. Please log in.', 'error');
    //         return;
    //     }

    //     try {
    //         const response = await axios.post(
    //             'http://salesnexa.indenta.ai:8000/api/accounts/logout/',
    //             {
    //                 refresh: refresh
    //             },
    //             {
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Authorization': `Bearer ${access}` // Include the access token in the headers
    //                 }
    //             }
    //         );

    //         console.log('API response:', response);
    //         Swal.fire('Success', 'Logged out successfully!', 'success');

    //         // Clear tokens from localStorage
    //         localStorage.removeItem('token');
    //         localStorage.removeItem('refreshToken');

    //         navigate('/'); // Redirect to login page after logout
    //     } catch (error) {
    //         console.error('Logout error:', error);
    //         Swal.fire('Error', 'Logout failed. Please try again.', 'error');
    //     }
    // };

    // Platform dropdown content

    const handleLogout = async (event) => {
        event?.preventDefault(); // Ensure event is optional in case of automatic logout
        const access = localStorage.getItem('token');
        const refresh = localStorage.getItem('refreshToken');

        if (!access || !refresh) {
            Swal.fire('Error', 'You are not authorized. Please log in.', 'error');
            return;
        }

        const isTokenExpired = (token) => {
            try {
                const { exp } = JSON.parse(atob(token.split('.')[1])); // Decode JWT to check expiration
                return (Date.now() >= exp * 1000); // Compare current time with expiration time
            } catch (error) {
                console.error('Token decoding error:', error);
                return true; // If error, assume token is expired
            }
        };

        if (isTokenExpired(access)) {
            // Token is expired, log out automatically
            Swal.fire('Session Expired', 'Your session has expired. Logging out...', 'info');
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
            navigate('/login'); // Redirect to login
            return;
        }

        try {
            const formData = new FormData();
            formData.append('refresh_token', refresh);

            const response = await axios.post(
                'http://salesnexa.indenta.ai:8000/api/accounts/logout/',
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${access}`,
                    }
                }
            );

            console.log('API response:', response);
            Swal.fire('Success', 'Logged out successfully!', 'success');

            // Clear tokens from localStorage
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');

            navigate('/'); // Redirect to login page after logout
        } catch (error) {
            console.error('Logout error:', error);
            Swal.fire('Error', 'Logout failed. Please try again.', 'error');
        }
    };

    const platformContent = (
        <Box sx={{ p: 2, display: 'flex', flexDirection: 'row', gap: '20px' }}>
            <Grid container spacing={2}>
                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <Typography variant="h6">Automation</Typography>
                    <List>
                        <ListItem>
                            <Button onClick={() => navigate('/email-automation')}>Email</Button>
                        </ListItem>
                        <ListItem>
                            <Button onClick={() => navigate('/whatsapp-automation')}>WhatsApp</Button>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <Typography variant="h6">Others</Typography>
                    <List>
                        <ListItem>
                            <Button onClick={() => navigate('/google-map')} sx={{ minWidth: '122px' }}>Google Map</Button>
                        </ListItem>
                        <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button onClick={() => navigate('/linkedin-scrapping')}>Linkedin</Button>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Box>
    );

    const menuItems = (
        <List sx={{ width: 250 }} onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <ListItem disablePadding>
                <Button sx={{ color: '#000', fontSize: '15px' }} onClick={() => navigate('/')}>Home</Button>
            </ListItem>
            <ListItem disablePadding>
                <Button sx={{ color: '#000', fontSize: '15px' }} onClick={() => navigate('/tasks')}>Tasks</Button>
            </ListItem>
            <ListItem disablePadding>
                <Button sx={{ color: '#000', fontSize: '15px' }} onClick={handleMenuClick}>Platform</Button>
            </ListItem>
            <ListItem disablePadding>
                <Button sx={{ color: '#000', fontSize: '15px' }} onClick={() => navigate('/contact')}>Contact</Button>
            </ListItem>
            <ListItem disablePadding>
                <Button
                    sx={{
                        backgroundColor: '#0088CC',
                        color: '#ffffff',
                        padding: '8px 36px',
                        borderRadius: '24px',
                        fontSize: '15px',
                    }}
                    onClick={() => navigate('/login')}
                >
                    Login
                </Button>
            </ListItem>
            <ListItem disablePadding>
                <Button sx={{ color: '#000', fontSize: '15px' }} onClick={() => navigate('/signup')}>Signup</Button>
            </ListItem>
        </List>
    );

    return (
        <AppBar position="static" sx={{ backgroundColor: '#FBFBFB', padding: '16px 0' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* Logo Section */}
                <Box onClick={() => navigate('/')}>
                    <img src={logo} alt="Logo" style={{ maxWidth: '270px', cursor: 'pointer' }} />
                </Box>

                {/* Mobile View */}
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ display: { xs: 'block', md: 'none' } }}
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon sx={{ color: 'black' }} />
                </IconButton>

                {/* Navigation Links for Desktop View */}
                <List sx={{ display: { xs: 'none', md: 'flex' }, gap: '24px', alignItems: 'center', margin: 0, padding: 0 }}>
                    <ListItem disablePadding>
                        <Button sx={{ color: '#000', fontSize: '15px' }} onClick={() => navigate('/')}>Home</Button>
                    </ListItem>
                    <ListItem disablePadding>
                        <Button sx={{ color: '#000', fontSize: '15px' }} onClick={() => navigate('/tasks')}>Tasks</Button>
                    </ListItem>
                    {
                        isAuthenticated() ? (
                            <ListItem
                                disablePadding
                                // onMouseEnter={handleMenuClick}
                                onClick={handleMenuClick} // Toggle on click
                            // onMouseLeave={handleMenuClose}
                            >
                                <Button sx={{ color: '#000', fontSize: '15px' }}>Platform</Button>
                                <Popover
                                    open={Boolean(anchorEl)}
                                    anchorEl={anchorEl}
                                    onClose={handleMenuClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                    sx={{ display: { xs: 'none', md: 'block' } }} // Only show in desktop
                                >
                                    {platformContent}
                                </Popover>
                            </ListItem>
                        ) : (
                            null
                        )
                    }
                    <ListItem disablePadding>
                        <Button sx={{ color: '#000', fontSize: '15px' }} onClick={() => navigate('/contact')}>Contact</Button>
                    </ListItem>
                    <ListItem disablePadding>
                        {isAuthenticated() ? (
                            <Button
                                sx={{
                                    backgroundColor: '#0088CC',
                                    color: '#ffffff',
                                    padding: '8px 36px',
                                    borderRadius: '24px',
                                    fontSize: '15px',
                                }}
                                onClick={handleLogout}
                            >
                                Logout
                            </Button>
                        ) : (
                            <Button
                                sx={{
                                    backgroundColor: '#0088CC',
                                    color: '#ffffff',
                                    padding: '8px 36px',
                                    borderRadius: '24px',
                                    fontSize: '15px',
                                }}
                                onClick={() => navigate('/login')}
                            >
                                Login
                            </Button>
                        )}

                    </ListItem>
                    <ListItem disablePadding>
                        {isAuthenticated() ? (
                            ""
                        ) : (
                            <Button sx={{ color: '#000', fontSize: '15px' }} onClick={() => navigate('/signup')}>Signup</Button>
                        )}
                    </ListItem>
                </List>
            </Toolbar>

            {/* Drawer for Mobile View */}
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                {menuItems}
            </Drawer>
        </AppBar>
    );
}