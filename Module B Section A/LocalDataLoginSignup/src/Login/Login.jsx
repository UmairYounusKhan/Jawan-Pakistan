import React, { useState } from "react";
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions, InputAdornment, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import './Login.css';

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    const storedData = JSON.parse(localStorage.getItem("user"));

    if (email === '') {
      setEmailError(true);
    }
    if (password === '') {
      setPasswordError(true);
    }

    if (email && password) {
      if (storedData) {
        if (email === storedData.email && password === storedData.password) {
          localStorage.setItem('isLoggedIn', true);
          setIsLoggedIn(true);
          navigate("/dashboard");
        } else {
          alert("Invalid credentials");
        }
      } else {
        setOpen(true);
      }
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-container">
      <React.Fragment>
        <form autoComplete="off" onSubmit={handleSubmit} className="login-form">
          <h2 style={{ textAlign: "center" }}>Login Form</h2>
          <TextField 
            label="Email"
            onChange={e => setEmail(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="email"
            sx={{ mb: 3 }}
            fullWidth
            value={email}
            error={emailError}
          />
          <TextField 
            label="Password"
            onChange={e => setPassword(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type={showPassword ? "text" : "password"}
            value={password}
            error={passwordError}
            fullWidth
            sx={{ mb: 3 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton style={{color:'white'}}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility/> :  <VisibilityOff  />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Button className="login-button" type="submit">Login</Button>
        </form>
        <small>Need an account? <Link to="/signup" style={{textDecoration:"none", color:'red'}}>Register here</Link></small>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Not Registered</DialogTitle>
          <DialogContent>
            Please register your account first by signing up.
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">Close</Button>
            <Button onClick={() => navigate('/signup')} color="primary">Sign Up</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </div>
  );
};

export default Login;
