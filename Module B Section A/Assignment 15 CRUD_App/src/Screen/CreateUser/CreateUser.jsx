import { Button, Paper, TextField, Typography, Snackbar, Alert } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const CreateUser = () => {
    const navigate = useNavigate();

    const [createData, setCreateData] = useState({
        name: '',
        username: '',
        email: '',
        phone: ''
    });

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, username, email, phone } = createData;

        if (!name || !username || !email || !phone) {
            setSnackbarMessage('Please fill in all fields.');
            setOpenSnackbar(true);
            return;
        }

        axios.post("http://localhost:1972/users", createData)
            .then((res) => {
                setSnackbarMessage('User created successfully!');
                setOpenSnackbar(true);
                setCreateData({
                    name: '',
                    username: '',
                    email: '',
                    phone: ''
                });
            })
            .catch((error) => {
                console.error(error);
                setSnackbarMessage('Error creating user.');
                setOpenSnackbar(true);
            });

        console.log(createData);
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Paper elevation={24} sx={{ marginTop: 10,marginLeft:20,marginRight:20, padding: 5 }}>
                    <Typography variant='h4' sx={{ marginBottom: 5 }}>
                        Create User
                    </Typography>
                    <TextField
                        onChange={(e) => setCreateData({ ...createData, name: e.target.value })}
                        value={createData.name}
                        fullWidth
                        sx={{ marginTop: 3 }}
                        label="Name"
                        variant="outlined"
                    />
                    <TextField
                        onChange={(e) => setCreateData({ ...createData, username: e.target.value })}
                        value={createData.username}
                        fullWidth
                        sx={{ marginTop: 3 }}
                        label="Username"
                        variant="outlined"
                    />
                    <TextField
                        onChange={(e) => setCreateData({ ...createData, email: e.target.value })}
                        value={createData.email}
                        fullWidth
                        sx={{ marginTop: 3 }}
                        label="Email"
                        variant="outlined"
                    />
                    <TextField
                        onChange={(e) => setCreateData({ ...createData, phone: e.target.value })}
                        value={createData.phone}
                        fullWidth
                        sx={{ marginTop: 3 }}
                        label="Phone"
                        variant="outlined"
                    />
                    <Button type='submit' variant="contained" sx={{ marginTop: 3, marginRight: 6 }}>
                        Create User
                    </Button>
                    <Button onClick={() => navigate('/')} variant="contained" color='secondary' sx={{ marginTop: 3 }}>
                        Back to Data Chart
                    </Button>
                </Paper>
            </form>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
            >
                <Alert onClose={handleSnackbarClose} severity={snackbarMessage.includes('Error') ? 'error' : 'success'}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </>
    );
};

export default CreateUser;
