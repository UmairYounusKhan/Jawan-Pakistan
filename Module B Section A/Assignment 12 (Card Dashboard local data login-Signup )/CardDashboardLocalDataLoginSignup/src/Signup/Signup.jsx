import React, { useState } from 'react';
import { TextField, Button, InputAdornment, IconButton } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import './Signup.css'; 

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
    };
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/login");
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="signup-container">
      <h2 style={{ textAlign: "center" }}>Register Form</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <TextField
          type="text"
          variant='outlined'
          color='secondary'
          label="First Name"
          onChange={e => setFirstName(e.target.value)}
          value={firstName}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="text"
          variant='outlined'
          color='secondary'
          label="Last Name"
          onChange={e => setLastName(e.target.value)}
          value={lastName}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="email"
          variant='outlined'
          color='secondary'
          label="Email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type={showPassword ? "text" : "password"}
          variant='outlined'
          color='secondary'
          label="Password"
          onChange={e => setPassword(e.target.value)}
          value={password}
          required
          fullWidth
          sx={{ mb: 4 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton style={{color:'white'}}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> :  <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button className="signup-button" type="submit">Register</Button>
      </form>
      <small style={{color:'white', marginLeft:'5px'}}>Already have an account? <Link to="/login" style={{textDecoration:"none", color:'red'}}> Login here</Link></small>
    </div>
  );
};

export default Signup;
