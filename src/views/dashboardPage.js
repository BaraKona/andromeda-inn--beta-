import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Dashboard from '../components/dashboard/Dashboard.js'
import Navbar from '../components/layout/navbar'
const MainPage = () => {

    return(
        <>
        <Navbar />
        <Switch>
            <section className="main">
                <Dashboard />
            </section>
        </Switch>
        </>
    );
};

export default MainPage;