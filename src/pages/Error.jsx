import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Button } from '@mui/material';
import ErrorGif from '../assests/error.gif';

const Error = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 4 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Box component="img" src={ErrorGif} alt="Error" sx={{ maxWidth: '100%', height: 'auto', mb: 2 }} />

        <Typography variant="h1" sx={{ color: '#989898', fontSize: { xs: '4rem', md: '6rem' }, mb: 1 }}>
          404
        </Typography>

        <Typography variant="h4" sx={{ color: '#0088CC', mb: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}>
          Oops! Page not found...
        </Typography>

        <Typography sx={{ color: '#86868B', mb: 4, fontSize: { xs: '1rem', md: '1.2rem' } }}>
          The resource requested could not be found on this server.
        </Typography>

        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate('/')}
          sx={{
            color: '#0088CC',
            borderColor: '#0088CC',
            borderRadius: '1000px',
            padding: '0.75rem 1.5rem',
            '&:hover': {
              backgroundColor: '#0088CC',
              color: '#ffffff',
            },
          }}
        >
          Back to home
        </Button>
      </Box>
    </Container>
  );
};

export default Error;