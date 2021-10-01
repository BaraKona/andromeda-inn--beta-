import React from 'react'
import Navbar from '../components/layout/navbar'
import AboutMe from '../components/about/aboutMe'
import AboutAndro from '../components/about/aboutAndro'

export default function aboutPage() {
    return (
        <div className="aboutPage">
            <Navbar />
            <AboutAndro />
            <AboutMe />
        </div>
    )
}
