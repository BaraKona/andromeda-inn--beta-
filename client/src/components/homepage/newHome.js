import React from 'react'
import './css/newHome.scss'
import NavBar from '../../components/layout/newNavbar'

function NewHome() {
    return (
        <section className="homePage">
        <NavBar/>
            <div className="homeContainer">
                <div className="homeItem"></div>
                <div className="imageContainer"></div>
                <div className="homeItem"></div>
            </div>
        </section>
    )
}

export default NewHome
