import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = () => {

    return (

        <Box>
            <img width='100%' height='500px' src="https://www.tvsmotor.com/-/media/Feature/Vehicles/vehicles/Homepage/Desktop/TVS_RTR_Series_2020.jpg?h=484&w=890&la=en&hash=4121E3A86CF5F07869CDC027C3124EDA" alt="" />

            <Box sx={{ display: 'flex', mt: -10, justifyContent: 'right', mx: 5 }}>
                <NavLink style={{ textDecoration: 'none' }} to='allProducts'>  <Button sx={{ width: '220px' }} variant='contained'> All Products</Button></NavLink>
            </Box>
        </Box>


    );
};

export default Banner;