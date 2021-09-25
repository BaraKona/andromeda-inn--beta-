import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Mainbody from '../Components/mainbody.js'
const MainPage = () => {

    return(
        <Switch>
            <section className="main">
                <Mainbody />
            </section>
        </Switch>
    );
};

export default MainPage;