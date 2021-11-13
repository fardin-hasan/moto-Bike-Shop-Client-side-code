import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, NavLink } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, img, engine, weight, milage, maximumPower, _id } = product
    return (
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="210"
                    image={img}
                    alt="green iguana"
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ textAlign: 'left' }} variant="subtitle1" color="text.secondary">
                        Engine : {engine}
                    </Typography>
                    <Typography sx={{ textAlign: 'left' }} variant="subtitle1" color="text.secondary">
                        Milage : {milage}
                    </Typography>
                    <Typography sx={{ textAlign: 'left' }} variant="subtitle1" color="text.secondary">
                        Total Weight : {weight}
                    </Typography>
                    <Typography sx={{ textAlign: 'left' }} variant="subtitle1" color="text.secondary">
                        Maximum Power : {maximumPower}
                    </Typography>
                </CardContent>
                <CardActions sx={{ m: 'auto' }}>
                    <NavLink style={{ margin: 'auto', textDecoration: 'none' }} to={`/purchase/${_id}`}> <Button color="secondary" variant='outlined' size="small">Purchase</Button></NavLink>

                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;