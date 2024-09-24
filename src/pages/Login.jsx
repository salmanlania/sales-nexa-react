import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Swal from 'sweetalert2';
import bgLogin from '../assests/login.svg';
import book from '../assests/logo.png';
import MyButton from '../components/MyButton';
import axios from 'axios';

const defaultTheme = createTheme();

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('ali@gmail.com');
    const [password, setPassword] = useState('Pakistan@123');
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Log input values to ensure they are correctly captured
        console.log('Username:', username);
        console.log('Password:', password);
    
        try {
            // Create form-data as required by backend
            const formData = new FormData();
            formData.append('username_or_email', username);
            formData.append('password', password);
    
            const response = await axios.post(
                'http://salesnexa.indenta.ai:8000/api/accounts/login/',
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json'  // Ensure content type is set to form-data
                    }
                }
            );
    
            console.log('API response:', response);
            const { access, refresh } = response.data;
            console.log('Received access token:', access);
            console.log('Received refresh token:', refresh);
    
            // Store tokens in localStorage
            localStorage.setItem('token', access);
            localStorage.setItem('refreshToken', refresh);
    
            // Display success message using Swal
            Swal.fire('Success', 'Logged in successfully!', 'success');
    
            // Navigate to chatbot route after successful login
            navigate('/');
        } catch (error) {
            console.error('Login error:', error);
    
            if (error.response) {
                // Log server response for troubleshooting
                console.error('Response data:', error.response.data);
    
                if (error.response.data.non_field_errors) {
                    const errorMessage = error.response.data.non_field_errors.join(', ');
                    Swal.fire('Error', ` ${errorMessage}`, 'error');
                } else {
                    Swal.fire('Error', 'Login failed. Please check your credentials.', 'error');
                }
            } else if (error.request) {
                // Handle no response from server
                console.error('No response received:', error.request);
                Swal.fire('Error', 'No response from server. Please try again later.', 'error');
            } else {
                // Handle unexpected errors
                console.error('Error setting up request:', error.message);
                Swal.fire('Error', 'An unexpected error occurred. Please try again later.', 'error');
            }
        }
    };    
    
    return (
        <div>
            {/* <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#1D474599' }}>
                <Navbar />
            </Toolbar> */}
            <ThemeProvider theme={defaultTheme}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={6}
                        md={6}
                        sx={{
                            backgroundImage: `url(${bgLogin})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={6} md={6} component={Paper} elevation={6} square sx={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
                        <div style={{ cursor: 'pointer' , display : 'flex' , justifyContent : 'space-between' , alignItems : 'center' }} onClick={() => navigate('/')}>
                            <img alt='' src={book} style={{ width: '250px', marginTop: '20px' }} />
                            <Tooltip title='Home'>
                                <HomeIcon sx={{ marginTop: '1rem' }} />
                            </Tooltip>
                        </div>
                        <Box
                            sx={{
                                my: 8,
                                mx: 'auto',
                                maxWidth: '400px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                marginTop: '60px',
                                textAlign: 'center'
                            }}
                        >
                            <Typography component="h4" variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                                Welcome back!
                            </Typography>
                            <Typography component="p" variant="p">
                                Log in your account to continue your automation journey.
                            </Typography>
                            <Box component="form" validate sx={{ width: '100%' }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="username"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    sx={{ width: '100%' }}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                {/* <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                    sx={{ mb: 1 }}
                                /> */}
                                <MyButton button={'Sign In'} style={{ width: '100%', marginBottom: '5px' }} onClick={handleSubmit} />
                                <Grid container sx={{ marginTop: '1.4rem', gap: '5px' }}>
                                    <Typography component="p" variant="p">
                                        Don’t have an account?
                                    </Typography>
                                    <Link sx={{ cursor: 'pointer' }} variant="body1" onClick={() => navigate('/signup')}>
                                        {"Create an Account"}
                                    </Link>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    );
}
