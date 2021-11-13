import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import AboutUs from '../AboutUS/AboutUs';



import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Products from '../Products/Products';
import Review from '../Review/Review';


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Products></Products>
            <Review></Review>

            <ContactUs></ContactUs>

        </div>
    );
};

export default Home;