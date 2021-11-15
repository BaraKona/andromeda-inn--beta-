import React from 'react'
import Navbar from '../components/layout/navbar'
import AboutMe from '../components/about/aboutMe'
import About from '../components/about/newAbout'
import Footer from "../components/layout/footer"

export default function aboutPage() {
    return (
        <div className="aboutPage">
            <Navbar />
            <About />
            <AboutMe />
            <Footer />
        </div>
    )
}
