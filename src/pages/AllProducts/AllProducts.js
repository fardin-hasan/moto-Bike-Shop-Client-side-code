import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <Box>
            <Typography sx={{ my: 5, textAlign: 'center' }} variant="h3" gutterBottom component="div">
                Our Products
            </Typography>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }


                </Grid>
            </Container >
        </Box>
    );
};

export default AllProducts;