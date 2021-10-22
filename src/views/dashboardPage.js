import React from 'react';
import {Switch} from 'react-router-dom'
import Dashboard from '../components/dashboard/Dashboard.js'

const MainPage = () => {

    return(
        <>
        <Switch>
            <section className="main">
                <Dashboard />
            </section>
        </Switch>
        </>
    );
};

export default MainPage;