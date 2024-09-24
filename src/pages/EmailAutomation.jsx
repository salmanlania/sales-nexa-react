import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, IconButton, Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Email from '../assests/email.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const emailLogoWidth = { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' };

const styles = {
    input: {
        height: '1.3rem',
        fontSize: '16px',
        outline: 'none',
        border: 'none',
        borderBottom: '0.5px solid #595151',
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

export default function EmailAutomation() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('rhammad501@gmail.com');
    const [password, setPassword] = useState('galforqaxpldpzdx');
    const [serverAddress, setServerAddress] = useState('smtp.gmail.com');
    const [smtpPort, setSmtpPort] = useState('465');
    const [subject, setSubject] = useState('Email-Automation-Testing');
    const [template, setTemplate] = useState('This is a email subject.');
    const [leads, setLeads] = useState('1');
    const [loading, setLoading] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    useEffect(() => {
        document.title = 'Email Automation | Sales Nexa';
    }, []);

    const navigate = useNavigate()

    const handleSend = async () => {
        const formData = new FormData();
        formData.append('sender_email', email);
        formData.append('password', password);
        formData.append('server_address', serverAddress || 'smtp.gmail.com'); // Default if not provided
        formData.append('smtp_port', smtpPort || '465'); // Default if not provided
        formData.append('email_subject', subject);
        formData.append('email_template', template);
        formData.append('max_emails', leads);
    
        const fileInput = document.getElementById('file-upload');
        if (fileInput.files[0]) {
            formData.append('csv_file', fileInput.files[0]);
        }
    
        const token = localStorage.getItem('token'); // Fetch token from session storage
        if (!token) {
            Swal.fire({
                title: 'Error',
                text: 'Authentication token is missing.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }
    
        try {
            const response = await fetch('http://salesnexa.indenta.ai:8000/api/automation/email-automation/start/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`, // Use token from session storage
                },
                body: formData, // No Content-Type header needed
            });
    
            if (response.ok) {
                Swal.fire({
                    title: 'Automation Started',
                    text: 'Your automation has started successfully! see task to see automation complition',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    navigate('/'); // Redirect to home
                });
            } else {
                const errorData = await response.json(); // Capture more detailed error info
                throw new Error(`Failed to start automation: ${errorData.detail || 'Unknown error'}`);
            }
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }finally {
            setLoading(false); // Stop loading
        }
    };
    

    return (
        <div style={{ borderRadius: '10px', display: 'flex', flexDirection: 'column', marginLeft: '15%', marginRight: '15%', background: '#FFFFFF', marginTop: '2rem', padding: '2rem' }}>
            <Box
                display="flex"
                alignItems="center"
                p={0}
                m={0}
                sx={{ flexDirection: { xs: 'column', md: 'row' }, mb: 3 }}
            >
                <Box
                    component="img"
                    src={Email}
                    alt="Email"
                    sx={{ width: emailLogoWidth }}
                />
                <Typography variant="h3" component="h1" sx={{ ml: { md: 2 }, mt: { xs: 2, md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
                    Email
                </Typography>
            </Box>

            <Grid container spacing={3} sx={{ gap: '0.9rem' }}>
                <Grid item xs={12}>
                    {/* <label htmlFor="email" style={styles.label}>Enter Your Email</label> */}
                    <input id="email" type="email" style={styles.input} placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                    {/* <label htmlFor="password" style={styles.label}></label> */}
                    {/* <input id="password" type="password" style={styles.input} /> */}
                    <Box sx={styles.passwordContainer}>
                        <input
                            id="password"
                            placeholder='Enter Your Password'
                            type={showPassword ? 'text' : 'password'}
                            style={styles.input}
                            value={password} onChange={(e) => setPassword(e.target.value)}
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
                    {/* <label htmlFor="dummy1" style={styles.label}>Dummy</label> */}
                    <input id="server_address" type="email" style={styles.input} placeholder='Server Address' value={serverAddress} onChange={(e) => setServerAddress(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                    {/* <label htmlFor="dummy2" style={styles.label}>Dummy</label> */}
                    <input id="smtp_port" type="number" style={styles.input} placeholder='Smtp Port' value={smtpPort} onChange={(e) => setSmtpPort(e.target.value)} />
                </Grid>
                {/* <Grid item xs={12}>
                    <input id="dummy2" type="file" style={styles.input} />
                </Grid> */}
                {/* <Grid item xs={12}>
                    <Box>
                        <Box
                            component="input"
                            id="file-upload"
                            type="file"
                            sx={{
                                width: '100%',
                                borderBottom: '1px solid black',
                                paddingBottom: '1rem',
                                '&::file-selector-button': {
                                    backgroundColor: '#0088CC',
                                    color: 'white',
                                    border: 'none',
                                    padding: '0.5rem 1rem',
                                    width: '15rem',
                                    marginLeft: '1rem',
                                    borderRadius: '100px',
                                    cursor: 'pointer',
                                    fontSize: '16px'
                                }
                            }}
                        />
                        <Typography sx={{ marginRight: '1rem', fontSize: '12px', color: '#666' }}>
                            * Upload CSV Format File.
                        </Typography>
                    </Box>
                </Grid> */}
                <Grid item xs={12}>
                    <input
                        id="file-upload"
                        type="file"
                        sx={{
                            width: '100%',
                            borderBottom: '1px solid black',
                            paddingBottom: '1rem',
                            '&::file-selector-button': {
                                backgroundColor: '#0088CC',
                                color: 'white',
                                border: 'none',
                                padding: '0.5rem 1rem',
                                width: '15rem',
                                marginLeft: '1rem',
                                borderRadius: '100px',
                                cursor: 'pointer',
                                fontSize: '16px'
                            }
                        }}
                        accept=".csv"
                    />
                    <Typography sx={{ marginRight: '1rem', fontSize: '12px', color: '#666' }}>
                        * Upload CSV Format File.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    {/* <label htmlFor="subject" style={styles.label}>Subject</label> */}
                    <input id="subject" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} style={styles.input} placeholder='Subject' />
                </Grid>
                <Grid item xs={12}>
                    {/* <label htmlFor="template" style={styles.label}>Email Template</label> */}
                    <input id="template" type="text" style={styles.input} placeholder='Email Template' value={template} onChange={(e) => setTemplate(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                    {/* <label htmlFor="leads" style={styles.label}>No of Leads</label> */}
                    <input id="leads" type="number" style={styles.input} placeholder='No of Leads' value={leads} onChange={(e) => setLeads(e.target.value)} />
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
                <Button onClick={handleSend} sx={{ background: '#0088CC', borderRadius: '1000px', color: '#ffff', width: 'fit-content', height: '100%', padding: '1rem', paddingLeft: '2rem', paddingRight: '2rem' }}>{loading ? 'Sending...' : 'Send Email'}</Button>
            </Box>
        </div>
    );
}
