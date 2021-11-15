import React from 'react'
import './css/newHome.scss'
import NavBar from '../../components/layout/newNavbar'

function NewHome() {
    return (
        <section className="homePage">
            <div className="homeContainer">
                <div className="homeItemLeft">
                    <div className ="home-text">
                    <h1> Welcome to <span>Andromeda Inn</span> Writing Hub</h1>
                    <p> A collaboration place for creatives. <br></br> Join writers from all corners of the literary world and collaborate together
                    inside the inn.
                    </p>
                    </div>
                </div>
                <div className="imageContainer"></div>
                <div className="homeItemRight">
                    <div className="homeSubItem"></div>
                    <div className="homeSubItem"></div>
                </div>
            </div>
        </section>
    )
}

export default NewHome
