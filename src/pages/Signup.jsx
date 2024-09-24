import React, { useState } from 'react';
import { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Swal from 'sweetalert2';
import bgLogin from '../assests/signup.svg';
import book from '../assests/logo.png';
import MyButton from '../components/MyButton';
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('ali@gmail.com');
  const [name, setName] = useState('Ali');
  const [password, setPassword] = useState('Pakistan@123');
  const [confirmPassword, setConfirmPassword] = useState('Pakistan@123');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswords, setShowPasswords] = useState(false);

  useEffect(() => {
    document.title = 'AI Taxpert | Sign Up';
  }, []);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClickShowPasswords = () => {
    setShowPasswords((prev) => !prev);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://salesnexa.indenta.ai:8000/api/accounts/register/', {
        email: email,
        username: name,
        password: password,
        password2: confirmPassword,
      });

      if (response.status === 200 || response.status === 201) {
        const { token } = response.data;

        if (token) {
          localStorage.setItem('token', token);
        }

        Swal.fire('Success', 'Signup successful!', 'success').then(() => {
          navigate('/login');  // Navigate only after the success message is shown
        });
      } else {
        Swal.fire('Error', 'Unexpected response from server. Please try again.', 'error');
      }
    } catch (error) {
      let errorMessage = 'Signup failed. Please check your credentials and try again.';

      if (error.response && error.response.data) {
        if (error.response.data.username) {
          errorMessage = error.response.data.username.join(', ');
        } else if (error.response.data.email) {
          errorMessage = error.response.data.email.join(', ');
        }
      } else if (error.request) {
        errorMessage = 'No response from server. Please try again later.';
      } else {
        errorMessage = 'An unexpected error occurred. Please try again later.';
      }

      Swal.fire('Error', errorMessage, 'error');
    }
  };

  return (
    <>
      <ThemeProvider theme={createTheme()}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={6}
            md={6}
            sx={{
              backgroundImage: `url(${bgLogin})`,
              paddingBottom: '4rem',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={6} md={6} component={Paper} elevation={6} square sx={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
            <div style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} onClick={() => navigate('/')}>
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
                Discover SalesNexa
              </Typography>
              <Typography component="p" variant="p">
                Sign up your account, enter your details, and start your automation journey seamlessly.
              </Typography>
              <Box component="form" validate sx={{ width: '100%' }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="new-password"
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
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="confirm-password"
                  label="Confirm Password"
                  type={showPassword ? 'text' : 'password'}
                  id="confirmpassword"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPasswords}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPasswords ? <VisibilityOff /> : <Visibility />}
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
                <MyButton type="submit" button={'Sign Up'} style={{ width: '100%', marginBottom: '5px' }} onClick={handleSubmit} />
                <Grid container sx={{ marginTop: '1.4rem', gap: '5px' }}>
                  <Typography component="p" variant="p">
                    Already have an account?
                  </Typography>
                  <Link sx={{ cursor: 'pointer' }} variant="body1" onClick={() => navigate('/login')}>
                    {"Log in"}
                  </Link>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default Signup;