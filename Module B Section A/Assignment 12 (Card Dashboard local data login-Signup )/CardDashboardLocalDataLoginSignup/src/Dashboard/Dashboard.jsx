import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Compcards from '../Compcards';
import './Dashboard.css'

const Dashboard = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // localStorage.removeItem('isLoggedIn');
    // setIsLoggedIn(false); 
    navigate('/login'); 
  };

  return (
    <div >
      <Button 
        variant="outlined" 
        color="secondary" 
        onClick={handleLogout} 
        style={{ position: 'absolute', top: '20px', right: '20px' }}>
        Logout
      </Button>
      <div  >
      <Compcards/>

      </div>
    
    </div>
  );
};

export default Dashboard;
