import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
  });
  const [initialData, setInitialData] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:1972/users/${id}`)
      .then((res) => {
        setUserData(res.data);
        setInitialData(res.data); // Store the initial data for comparison
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleUpdate = () => {
    if (JSON.stringify(userData) === JSON.stringify(initialData)) {
      setOpenConfirmDialog(true);
    } else {
      axios.put(`http://localhost:1972/users/${id}`, userData)
        .then(() => {
          setOpenDialog(true);
        })
        .catch((error) => console.log(error));
    }
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    navigate('/');
  };

  const handleConfirmDialogClose = () => {
    setOpenConfirmDialog(false);
  };

  const handleConfirmDialogYes = () => {
    setOpenConfirmDialog(false);
    navigate('/'); // Navigate to the data chart if confirmed
  };

  return (
    <div
      style={{
        width: '400px',
        margin: '50px auto',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        borderRadius: '8px',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Edit User</h1>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <TextField
          label="Name"
          name="name"
          value={userData.name}
          onChange={handleInputChange}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Username"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Phone"
          name="phone"
          value={userData.phone}
          onChange={handleInputChange}
          margin="normal"
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdate}
          sx={{ marginTop: '20px' }}
        >
          Update User
        </Button>
      </form>

      {/* Success Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <Typography>Your update was successful!</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>

      {/* Confirmation Dialog */}
      <Dialog open={openConfirmDialog} onClose={handleConfirmDialogClose}>
        <DialogTitle>No Changes Detected</DialogTitle>
        <DialogContent>
          <Typography>You haven't made any changes. Are you sure you want to proceed without making any changes?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmDialogYes} color="primary">
            Yes
          </Button>
          <Button onClick={handleConfirmDialogClose} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditUser;
