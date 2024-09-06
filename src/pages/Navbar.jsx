import React, { useState } from 'react';
import { AppBar, Toolbar, Button, List, ListItem, Box, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assests/logo.png';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const menuItems = (
        <List sx={{ width: 250 }} onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <ListItem disablePadding>
                <Button sx={{ color: '#000', fontSize: '15px' }} onClick={() => navigate('/')}>Home</Button>
            </ListItem>
            <ListItem disablePadding>
                <Button sx={{ color: '#000', fontSize: '15px' }} onClick={() => navigate('/notification')}>Notifications</Button>
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

                {/* Hamburger Icon for Mobile View */}
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ display: { xs: 'block', md: 'none' } }}
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon sx={{color : 'black'}} />
                </IconButton>

                {/* Navigation Links for Desktop View */}
                <List sx={{ display: { xs: 'none', md: 'flex' }, gap: '24px', alignItems: 'center', margin: 0, padding: 0 }}>
                    <ListItem disablePadding>
                        <Button sx={{ color: '#000', fontSize: '15px' }} onClick={() => navigate('/')}>Home</Button>
                    </ListItem>
                    <ListItem disablePadding>
                        <Button sx={{ color: '#000', fontSize: '15px' }} onClick={() => navigate('/notification')}>Notifications</Button>
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
            </Toolbar>

            {/* Drawer for Mobile View */}
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                {menuItems}
            </Drawer>
        </AppBar>
    );
}
// import React, { useState } from 'react';
// import { AppBar, Toolbar, Button, List, ListItem, Box, IconButton, Menu, MenuItem } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import logo from '../assests/logo.png';
// import { useNavigate } from 'react-router-dom';

// export default function Navbar() {
//     const navigate = useNavigate();
//     const [anchorEl, setAnchorEl] = useState(null);

//     const handleMenuClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//     return (
//         <AppBar position="static" sx={{ backgroundColor: '#FBFBFB', padding: '16px 0' }}>
//             <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
//                 {/* Logo Section */}
//                 <Box onClick={() => navigate('/')}>
//                     <img src={logo} alt="Logo" style={{ maxWidth: '270px', cursor: 'pointer' }} />
//                 </Box>

//                 {/* Hamburger Icon for Mobile View */}
//                 <IconButton
//                     size="large"
//                     edge="start"
//                     color="inherit"
//                     aria-label="menu"
//                     sx={{ display: { xs: 'block', md: 'none' } }}
//                     onClick={handleMenuClick}
//                 >
//                     <MenuIcon sx={{ color: '#000' }} />
//                 </IconButton>

//                 {/* Navigation Links for Desktop View */}
//                 <List sx={{ display: { xs: 'none', md: 'flex' }, gap: '24px', alignItems: 'center', margin: 0, padding: 0 }}>
//                     <ListItem disablePadding>
//                         <Button sx={{ color: '#000', fontSize: '15px' }} onClick={() => navigate('/')}>Home</Button>
//                     </ListItem>
//                     <ListItem disablePadding>
//                         <Button sx={{ color: '#000', fontSize: '15px' }} onClick={() => navigate('/notification')}>Notifications</Button>
//                     </ListItem>
//                     <ListItem disablePadding>
//                         <Button sx={{ color: '#000', fontSize: '15px' }} onClick={() => navigate('/contact')}>Contact</Button>
//                     </ListItem>
//                     <ListItem disablePadding>
//                         <Button
//                             sx={{
//                                 backgroundColor: '#0088CC',
//                                 color: '#ffffff',
//                                 padding: '8px 36px',
//                                 borderRadius: '24px',
//                                 fontSize: '15px',
//                             }}
//                             onClick={() => navigate('/login')}
//                         >
//                             Login
//                         </Button>
//                     </ListItem>
//                     <ListItem disablePadding>
//                         <Button sx={{ color: '#000', fontSize: '15px' }} onClick={() => navigate('/signup')}>Signup</Button>
//                     </ListItem>
//                 </List>
//             </Toolbar>

//             {/* Dropdown Menu for Mobile View */}
//             <Menu
//                 anchorEl={anchorEl}
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//                  // Adjust margin as necessary
//             >
//                 <MenuItem onClick={() => { navigate('/'); handleClose(); }}>Home</MenuItem>
//                 <MenuItem onClick={() => { navigate('/notification'); handleClose(); }}>Notifications</MenuItem>
//                 <MenuItem onClick={() => { navigate('/contact'); handleClose(); }}>Contact</MenuItem>
//                 <MenuItem onClick={() => { navigate('/login'); handleClose(); }}>Login</MenuItem>
//                 <MenuItem onClick={() => { navigate('/signup'); handleClose(); }}>Signup</MenuItem>
//             </Menu>
//         </AppBar>
//     );
// }
