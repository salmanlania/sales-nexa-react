import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import user from '../assests/Landing-Page/user.png'
import data from '../assests/Landing-Page/data.png'
import automation from '../assests/Landing-Page/automation.png'
import sendMessage from '../assests/Landing-Page/send-message.png'

export default function GatewayAutomation() {

  return (
    <div>
      <section>
        <h1>Efficiency at your Finger Tips</h1>
        <h4>SalesNexa automates the most time-consuming parts <span style={{ color: '#86868B' }}> of the sales process.</span></h4>
      </section>
      <section>
        <div style={{ background: '#0088CC' ,boxShadow: '0px 4px 4px 0px #0000004D', boxShadow: '0px 8px 12px 6px #00000026'}}>
          <section style={{background: '#FBFBFB', display: 'flex' , alignItems : 'center', borderRadius : '100px', padding : '1rem'}}>
            <img src={user} style={{background: '#0088CC', angle: '43.49 deg'}} alt="" />
            <h5 style={{color : '#595151'}}>Users.</h5>
          </section>
        </div>
      </section>
    </div>
  );
}
