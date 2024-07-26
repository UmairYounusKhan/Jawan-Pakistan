import React from 'react';
import ActionAreaCard from '../Cards/ActionAreaCard.jsx';
import { Grid } from '@mui/material';
import Card1 from '../assets/Logos/Card1.png';
import Card2 from '../assets/Logos/Card2.jfif';
import Card3 from '../assets/Logos/Card3.jpg';
import Card4 from '../assets/Logos/Card4.png';
import Card5 from '../assets/Logos/Card5.jpg';
import './Training.css'; // Import the CSS file

const Training = () => {
  return (
    <div style={{ paddingLeft: '5%', paddingRight: '5%', paddingBottom:'20px', }}>
      <div style={{
        textAlign: 'center',
        margin: '0 auto',
        color: '#006838',
        fontFamily: "'Fira Sans', sans-serif",
        fontWeight: 'bold',
        fontSize: '25px',
        letterSpacing: '.05em'
      }}>
        <h1>IT Trainings Offering In Jawan Pakistan</h1>
      </div>

      <Grid sx={{ justifyContent: 'center' , }} container spacing={2}>
        <Grid item xs={12} sm={6} md={4} xl={4}>
          <ActionAreaCard 
            label="Web and Mobile Application Development"
            image={Card1}
            className="hover-card"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={4}>
          <ActionAreaCard 
            label="Flutter Mobile Application Development"
            image={Card2}
            className="hover-card"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={4}>
          <ActionAreaCard 
            label="Graphic Design And Video Editing"
            image={Card3}
            className="hover-card"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={4}>
          <ActionAreaCard 
            label="Digital And Social Media Marketing"
            image={Card4}
            className="hover-card"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={4}>
          <ActionAreaCard 
            label="BlockChain Development"
            image={Card5}
            className="hover-card"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Training;
