import React from 'react'
import Navbar from '../components/layout/navbar'
import AboutMe from '../components/about/aboutMe'
import AboutAndro from '../components/about/aboutAndro'
import Footer from "../components/layout/footer.js"

export default function aboutPage() {
    return (
        <div className="aboutPage">
            <Navbar />
            <AboutAndro />
            <AboutMe />
            <Footer />
        </div>
    )
}