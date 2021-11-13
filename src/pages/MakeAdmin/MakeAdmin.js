import { Alert, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdmin = e => {
        const user = { email };
        fetch('https://hidden-bayou-70618.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {

                    setSuccess(true)
                }

            })
        e.preventDefault()
    }
    return (
        <div>
            <Typography sx={{ my: 2, textAlign: 'center' }} variant="h4" >Make An User Admin </Typography>
            <Grid container spacing={2}>
                <Grid sx={{ m: 'auto', textAlign: 'center' }} item xs={8} md={8}>
                    <form onSubmit={handleAdmin}>
                        <TextField
                            sx={{ width: '75%', my: 1 }}
                            id="standard-basic"
                            name='email'
                            type='email'
                            onBlur={handleOnBlur}
                            required
                            label="User Email"
                            variant="standard" />

                        <Button sx={{ width: '30%', my: 3 }} variant='contained' type='submit'>Make Admin</Button>
                        {success && <Alert sx={{ width: '70%', m: 'auto' }} severity="success">Admin Added Successfilly</Alert>}
                    </form>
                </Grid>

            </Grid>

        </div >
    );
};

export default MakeAdmin;