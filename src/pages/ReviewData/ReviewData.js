import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../Hooks/useAuth';

const ReviewData = ({ review }) => {
    const { name, feedback } = review;

    return (
        <Grid sx={{ m: 'auto' }} item xs={2} sm={4} md={3} >
            <Card variant="outlined">
                <React.Fragment>
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            {name}
                        </Typography>
                        <Typography sx={{ fontSize: '14' }} color="text.secondary" component="div">
                            {feedback}
                        </Typography>

                    </CardContent>

                </React.Fragment>
            </Card>
        </Grid>

    );
};

export default ReviewData;