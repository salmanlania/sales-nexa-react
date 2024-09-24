import React, {useState} from 'react';
import { Container, Typography, Grid, TextField, Button, Box } from '@mui/material';
import manImage from "../assests/contact-us/man-image.png";
import yellowQuestion from "../assests/contact-us/yellowQuestion.png";
import blueQuestion from "../assests/contact-us/blueQuestion.png";
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: 'Muhammad',
    lastName: 'Salman',
    email: 'abc@gmail.com',
    phoneNumber: '03001234567',
    message: 'Contact us form dummy testing'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Validate the form data before submitting
  //   const { firstName, lastName, email, phoneNumber, message } = formData;
  //   if (!firstName || !lastName || !email || !phoneNumber || !message) {
  //     Swal.fire('Error', 'Please fill all the fields', 'error');
  //     return;
  //   }

  //   // Create FormData object
  //   const formPayload = new FormData();
  //   formPayload.append('first_name', firstName);
  //   formPayload.append('last_name', lastName);
  //   formPayload.append('email', email);
  //   formPayload.append('phone_number', phoneNumber);
  //   formPayload.append('message', message);

  //   try {
  //     const response = await axios.post(
  //       'http://salesnexa.indenta.ai:8000/api/contact/contact-us/',
  //       formPayload,
  //       {
  //         headers: {
  //           'Accept': 'application/json',
  //           'Content-Type': 'multipart/form-data'
  //         }
  //       }
  //     );

  //     // Show success message if the API request is successful
  //     if (response.status === 200) {
  //       Swal.fire('Success', 'Your message has been sent!', 'success');
  //       setFormData({ firstName: '', lastName: '', email: '', phoneNumber: '', message: '' });  // Clear the form
  //     }
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //     Swal.fire('Error', 'Failed to send message. Please try again later.', 'error');
  //   }
  // };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate the form data before submitting
    const { firstName, lastName, email, phoneNumber, message } = formData;
    if (!firstName || !lastName || !email || !phoneNumber || !message) {
      Swal.fire('Error', 'Please fill all the fields', 'error');
      return;
    }
  
    // Log the form data for debugging
    console.log('Form Data:', formData);
  
    // Create FormData object
    const formPayload = new FormData();
    formPayload.append('first_name', firstName);
    formPayload.append('last_name', lastName);
    formPayload.append('email', email);
    formPayload.append('phone_number', phoneNumber);
    formPayload.append('message', message);
  
    try {
      const response = await axios.post(
        'http://salesnexa.indenta.ai:8000/api/contact/contact-us/',
        formPayload,
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
          },
        }
      );
  
      // Show success message if the API request is successful
      if (response.status === 200) {
        Swal.fire('Success', 'Your message has been sent!', 'success');
        setFormData({ firstName: '', lastName: '', email: '', phoneNumber: '', message: '' }); // Clear the form
      }
    } catch (error) {
      if (error.response) {
        console.error('Server responded with:', error.response.data);
        const errorMessages = Object.values(error.response.data)
          .flat() // Flatten the array of messages
          .join(', '); // Join into a single string
  
        Swal.fire('Error', errorMessages || 'Failed to send message. Please try again later.', 'error');
      } else {
        console.error('Error submitting form:', error.message);
        Swal.fire('Error', 'Failed to send message. Please try again later.', 'error');
      }
    }
  };
  
  return (
    <div>
      <Box sx={{ background: 'linear-gradient(180deg, #EEEEEE 0%, #FBFBFB 100%)' }}>
        <Container sx={{ borderRadius: '30px', background: '#FBFBFB', padding: '2rem', margin: '2rem auto', textAlign: 'center', width: { xs: '90%', md: '80%', lg: '50%' } }}>
          <Typography variant="h4" component="h1">SalesNexa Support</Typography>
          <Typography>Have some Questions? Our team is ready to hear from you.</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '1rem', margin: '2rem 0' }}>
            <img src={blueQuestion} alt="blue question" />
            <img src={manImage} alt="man" style={{ width: '380px', maxWidth: '100%' }} />
            <img src={yellowQuestion} alt="yellow question" />
          </Box>
        </Container>
      </Box>

      <Container sx={{ background: '#FBFBFB', padding: '2rem', margin: '2rem auto', textAlign: 'center', width: { xs: '100%', md: '100%', lg: '100%' } }}>
        <Typography variant="h4" component="h1" gutterBottom>Get Support</Typography>
        <Typography>Share a few details with us, and we'll find the best solution for you.</Typography>
        <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
          <Grid container spacing={2}>
            {/* First Row of Inputs */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                sx={{ borderRadius: '30px' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                sx={{ borderRadius: '30px' }}
              />
            </Grid>

            {/* Second Row of Inputs */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                sx={{ borderRadius: '30px' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone no"
                variant="outlined"
                fullWidth
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                sx={{ borderRadius: '30px' }}
              />
            </Grid>

            {/* Textarea for Message */}
            <Grid item xs={12}>
              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                name="message"
                value={formData.message}
                onChange={handleChange}
                sx={{ marginTop: '1rem', borderRadius: '30px' }}
              />
            </Grid>
          </Grid>

          <Button onClick={handleSubmit} variant="contained" color="primary" sx={{
            marginTop: '1rem', border: '2px solid #0088CC', color: '#0088CC !important', background: '#FFFFFF !important', boxShadow: 'none', borderRadius: '20px', padding: '8px 36px !important', '&:hover': {
              cursor: 'pointer !important',
              backgroundColor: '#0088CC !important',
              border: '2px solid #FFFFFF !important',
              color: '#ffffff !important',
              fontWeight: '700 !important',
              boxShadow: 'none !important',
            }
          }}>
            Send Message
          </Button>
        </form>
      </Container>
    </div>
  );
}
