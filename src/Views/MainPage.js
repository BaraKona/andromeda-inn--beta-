import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Mainbody from '../components/mainPage/mainbody.js'
import Navbar from '../components/layout/navbar'
const MainPage = () => {

    return(
        <>
        <Navbar />
        <Switch>
            <section className="main">
                <Mainbody />
            </section>
        </Switch>
        </>
    );
};

export default MainPage;