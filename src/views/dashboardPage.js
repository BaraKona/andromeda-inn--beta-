import React from 'react';
import {Switch} from 'react-router-dom'
import Dashboard from '../components/dashboard/Dashboard.js'
import Navbar from '../components/layout/navbar'
// import Footer from "../components/layout/footer.js"
const MainPage = () => {

    return(
        <>
        <Navbar />
        <Switch>
            <section className="main">
                <Dashboard />
            </section>
        </Switch>
        {/* <Footer /> */}
        </>
    );
};

export default MainPage;