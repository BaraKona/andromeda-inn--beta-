import React from 'react'
import {Switch} from 'react-router-dom'
import Navbar from '../components/layout/navbar'
import AboutAndro from '../components/about/aboutAndro'
import ConnectLanding from '../components/connect/connectLanding'

export default function connectPage() {
    return (
        <>
        <Navbar />
        <Switch>
            <section className="connectPage">
                <ConnectLanding />
                <AboutAndro />
            </section>
        </Switch>
        </>
    )
}
