// import React, { useEffect } from 'react';
// import { Box, Typography, Grid, Button } from '@mui/material';
// import Whatsapp from '../assests/whatsapp.png';
// import { useNavigate } from 'react-router-dom';
// const whatsappLogoWidth = { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' };

// const styles = {
//     input: {
//         height: '1.3rem',
//         fontSize: '16px',
//         outline: 'none',
//         border: 'none',
//         flexGrow: 1,
//         width: '100%'
//     },
//     label: {
//         marginRight: '1rem',
//         fontSize: '16px',
//         flexShrink: 0,
//         minWidth: '150px',
//     },
//     labelInputContainer: {
//         display: 'flex',
//         alignItems: 'baseline',
//         justifyContent: 'space-between',
//         marginBottom: '1rem',
//         width: '100%',
//         borderBottom: '1px solid black',
//         paddingBottom: '1rem',
//     }
// };

// export default function LinkedinScrapping() {

//     useEffect(() => {
//         document.title = 'Whatsapp Automation | Sales Nexa';
//     }, []);

//     const navigate = useNavigate()
import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import Whatsapp from '../assests/whatsapp.png';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const whatsappLogoWidth = { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' };

const styles = {
    input: {
        height: '1.3rem',
        fontSize: '16px',
        outline: 'none',
        border: 'none',
        flexGrow: 1,
        width: '100%',
    },
    label: {
        marginRight: '1rem',
        fontSize: '16px',
        flexShrink: 0,
        minWidth: '150px',
    },
    labelInputContainer: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        marginBottom: '1rem',
        width: '100%',
        borderBottom: '1px solid black',
        paddingBottom: '1rem',
    },
};

export default function LinkedinScrapping() {
    const [messageFile, setMessageFile] = useState(null);
    const [csvFile, setCsvFile] = useState(null);
    const [numLeads, setNumLeads] = useState(0);

    useEffect(() => {
        document.title = 'Whatsapp Automation | Sales Nexa';
    }, []);

    const navigate = useNavigate();

    const handleFileChange = (event, setter) => {
        setter(event.target.files[0]);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        if (messageFile) {
            formData.append('message_file', messageFile);
        }
        if (csvFile) {
            formData.append('csv_file', csvFile);
        }
        formData.append('leads', numLeads);

        for (let [key, value] of formData.entries()) {
            console.log(key, value);
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
            const response = await fetch('http://salesnexa.indenta.ai:8000/api/automation/whatsapp-automation/start/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: formData,
            });
            const data = await response.json();
            if (response.ok) {
                // Show success alert
                Swal.fire({
                    title: 'Success!',
                    text: 'Your request has been processed successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                }).then(() => {
                    // Redirect to the home page
                    navigate('/');
                });
            } else {
                // Show error alert
                Swal.fire({
                    title: 'Error!',
                    text: data.message || 'An error occurred. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error
            Swal.fire({
                title: 'Error!',
                text: 'An unexpected error occurred. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };
    return (
        <>
            <div style={{ borderRadius: '100px', display: 'flex', flexDirection: 'column', marginLeft: '30%', marginRight: '30%', background: '#FFFFFF', marginTop: '1rem', padding: '2rem' }}>
                <Box
                    display="flex"
                    alignItems="center"
                    p={0}
                    m={0}
                    sx={{ marginTop: '2rem', flexDirection: { xs: 'column', md: 'row' }, mb: 3 }}
                >
                    <Box
                        component="img"
                        src={Whatsapp}
                        alt="Whatsapp"
                        sx={{ width: whatsappLogoWidth }}
                    />
                    <Typography variant="h3" component="h1" sx={{ ml: { md: 2 }, mt: { xs: 2, md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
                        WhatsApp
                    </Typography>
                </Box>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Box sx={styles.labelInputContainer}>
                            <label htmlFor="file-upload-1" style={styles.label}>Send Files</label>
                            <Box>
                                <Box
                                    component="input"
                                    id="file-upload-1"
                                    type="file"
                                    onChange={(event) => handleFileChange(event, setCsvFile)}
                                    sx={{
                                        width: '100%',
                                        marginLeft: '4.5%',
                                        '&::file-selector-button': {
                                            backgroundColor: '#0088CC',
                                            color: 'white',
                                            border: 'none',
                                            padding: '0.5rem 1rem',
                                            width: '15rem',
                                            marginLeft: '1rem',
                                            borderRadius: '100px',
                                            cursor: 'pointer',
                                            fontSize: '16px',
                                        }
                                    }}
                                />
                                <Typography sx={{ textAlign: 'right', marginRight: '1rem', fontSize: '12px', color: '#666' }}>
                                    * Upload CSV Format File.
                                </Typography>
                            </Box>
                        </Box>
                        {/* Add text below file input */}
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={styles.labelInputContainer}>
                            <label htmlFor="file-upload-2" style={styles.label}>Send Files from WhatsApp</label>
                            <Box>
                                <Box
                                    component="input"
                                    id="file-upload-2"
                                    type="file"
                                    onChange={(event) => handleFileChange(event, setMessageFile)}
                                    sx={{
                                        width: '100%',
                                        '&::file-selector-button': {
                                            backgroundColor: '#0088CC',
                                            color: 'white',
                                            border: 'none',
                                            padding: '0.5rem 1rem',
                                            width: '15rem',
                                            marginLeft: '1rem',
                                            borderRadius: '100px',
                                            cursor: 'pointer',
                                            fontSize: '16px',
                                        }
                                    }}
                                />
                                <Typography sx={{ textAlign: 'right', marginRight: '1rem', fontSize: '12px', color: '#666' }}>
                                    * Upload CSV Format File.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <label htmlFor="leads" style={{ marginTop: '1rem' }}>No of Leads</label>
                        <input id="leads" type="number" value={numLeads} onChange={(e) => setNumLeads(e.target.value)} style={{ height: '1.3rem', fontSize: '16px', outline: 'none', border: 'none', borderBottom: '1px solid black', marginTop: '1rem' }} />
                        {/* Add text below number input */}
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
                    <Button onClick={handleSubmit} sx={{ background: '#0088CC', borderRadius: '1000px', color: '#ffff', width: 'fit-content', height: '100%', padding: '1rem', paddingLeft: '2rem', paddingRight: '2rem' }}>Send</Button>
                </Box>
            </div>
        </>
    );
}
