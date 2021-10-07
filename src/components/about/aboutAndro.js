import React from 'react'
import '../css/aboutAndro.css'
import cauldron from '../../images/icons/cauldron.svg'
import witch from '../../images/icons/witch2.svg'
import globe from '../../images/icons/globe.svg'
import apple from '../../images/icons/apple.svg'
import andrew from '../../images/andrew-seaman.jpg'

export default function aboutAndro() {
    return (
        <section className = "aboutAndro">
            <div className = "aboutFrame">
                <div className = "androContainer">
                    <div className = "title1">
                        <h1> What is <span>Andromeda Inn </span> ?</h1>
                        <p className="wHub"> A writing hub </p>
                    </div>
                </div>
            </div>
            <div className = "problemStatement">
                <div className = "problemContainer">
                    <img className="appleIcon floating" src={apple} alt="cauldron"/>
                    <h1> The Problem </h1>
                </div>
            </div>
            <div className = "flex_items">
                <div className = "col">
                    <div className="cardText">
                        <h2> Collaborate </h2>
                        <p> The greatest stories are yet to be written, and with the
                            combined talents of a team, the ink of the greatest stories
                            will soon litter the books. Assemble other creatives and weave epic stories
                            with scope larger than any one person could on their own.
                        </p>
                        <img className="cardImg" src={cauldron} alt="cauldron"/>
                    </div>
                </div>
                <div className = "col">
                    <div className="cardText">
                        <h2> Version Control </h2>
                        <p> With Andromeda Version Control you will be able to monitor
                            the changes to stories you craft. A seamless interface that
                            will facilitate collaborative writing. <br/><br/>Sounds technical right?
                            Do not despair, we will walk you through it.
                        </p>
                        <img className="cardImg" src={witch} alt="witch"/>
                    </div>
                </div>
                <div className = "col">
                    <div className="cardText">
                        <h2> Explore </h2>
                        <p> Journey through the inn and explore the stories being crafted by
                            other creatives. Use these to inspire you to craft your own story, or even better! Join them
                            in their journey and perhaps the story will expand to new heights.
                        </p>
                        <img className="cardImg" src={globe} alt="globe"   />
                    </div>
                </div>
                {/* <div className = "col">
                    <div className="cardText">
                        Laboris dolor tempor cillum veniam nisi et
                        commodo non voluptate mollit pariatur ea amet.
                        Eiusmod aute ad officia ad ullamco excepteur id dolore.
                        Fugiat cupidatat elit minim duis id.
                    </div>
                </div>
                <div className = "col">
                    <div className="cardText">
                        Laboris dolor tempor cillum veniam nisi et
                        commodo non voluptate mollit pariatur ea amet.
                        Eiusmod aute ad officia ad ullamco excepteur id dolore.
                        Fugiat cupidatat elit minim duis id.
                    </div>
                </div> */}
            </div>
                {/* <div className ="whiteLine"></div> */}

        </section>
    )
}

