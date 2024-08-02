import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
      <h1 style={{ color: "red", textAlign:'center' }}>Welcome to the Dashboard's Main Page</h1>
      <h2 style={{ color: "white", background:'grey', textAlign:'center'  }}>Great job! You've logged in successfully.</h2>
    </div>
  );
};

export default Dashboard;
