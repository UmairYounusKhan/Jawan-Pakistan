import React, { useEffect, useState } from 'react';
import Tables from '../../Components/Table/Tables';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Home.css'
import { Margin, Padding } from '@mui/icons-material';

const Home = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1972/users")
      .then((res) => setUserData(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='main'>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'Lucida Sans' }}>
        <h1>CRUD OPERATION APP</h1>
        <h2>USER DATA</h2>
      </div>
      <Button onClick={() => navigate('/createuser')} variant='contained' sx={{ marginTop: 3, marginBottom: 2, float: 'right' }}>Create</Button>
      <Tables data={userData} setUserData={setUserData} />
    </div>
  );
}

export default Home;
