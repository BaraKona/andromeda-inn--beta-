import React from 'react'
import Navbar from '../layout/newNavbar'
import witch from '../../images/icons/witch2.svg'
import globe from '../../images/icons/globe.svg'
import cauldron from '../../images/icons/cauldron.svg'
import './css/newAbout.scss'

export default function NewAbout() {
    return (
        <section className ="newAbout">
            <Navbar/>
            <div class="aboutTitle">
                <h1> What is Andromeda Inn? </h1>
            </div>
            <div className="aboutContainer">
                <div className="aboutSection">
                <p>
                    "So here is why I write what I do: We all have futures. We all have
                    pasts. We all have stories. And we all, every single one of us, no
                    matter who we are and no matter what’s
                    been taken from us or what poison we’ve internalized or how hard we’ve had to work to expel
                    it –– we all get to dream.<br/> <span>~ N. K. Jemisin"</span>
                    </p>
                    <div className="aboutSectionImage"/>
                </div>
                <div className="aboutSection">
                <p>
                    Eiusmod ex ipsum dolore labore dolor anim mollit eu sit
                    nostrud. Laboris quis amet consequat sit. In aliquip aliquip
                    excepteur officia. Aliqua excepteur ipsum Lorem nostrud
                    cillum commodo ad magna occaecat esse voluptate. Laborum
                    ea reprehenderit minim in ad aliquip sit irure fugiat
                    consequat irure excepteur consequat. Consequat aliquip eu
                    ipsum commodo. <br/><br/>
                    Eiusmod ex ipsum dolore labore dolor anim mollit eu sit
                    nostrud. Laboris quis amet consequat sit. In aliquip aliquip
                    excepteur officia. Aliqua excepteur ipsum Lorem nostrud
                    cillum commodo ad magna occaecat esse voluptate. Laborum
                    ea reprehenderit minim in ad aliquip sit irure fugiat
                    consequat irure excepteur consequat. Consequat aliquip eu
                    ipsum commodo.<br/><br/>
                    Eiusmod ex ipsum dolore labore dolor anim mollit eu sit
                    nostrud. Laboris quis amet consequat sit. In aliquip aliquip
                    excepteur officia. Aliqua excepteur ipsum Lorem nostrud
                    cillum commodo ad magna occaecat esse voluptate. Laborum
                    ea reprehenderit minim in ad aliquip sit irure fugiat
                    consequat irure excepteur consequat. Consequat aliquip eu
                    ipsum commodo.
                </p>
                </div>
                <div className="aboutSection">
                    <div className="aboutSectionImage1"></div>
                </div>
            </div>

            <div className = "aboutFlex">
                <div className="aboutCards">
                    <div className="aboutCardText">
                        <h2> Collaborate </h2>
                        <p> The greatest stories are yet to be written, and with the
                            combined talents of a team, the ink of the greatest stories
                            will soon litter the books. Assemble other creatives and weave epic stories
                            with scope larger than any one person could on their own.
                        </p>
                        {/* <img className="cardImg" src={cauldron} alt="cauldron"/> */}
                    </div>
                </div>
                <div className="aboutCards">
                    <div className="aboutCardText">
                        <h2> Version Control </h2>
                        <p> With Andromeda Version Control you will be able to monitor
                            the changes to stories you craft. A seamless interface that
                            will facilitate collaborative writing. <br/><br/>Sounds technical right?
                            Do not despair, we will walk you through it.
                        </p>
                        {/* <img className="cardImg" src={witch} alt="witch"/> */}
                    </div>
                </div >
                <div className="aboutCards">
                    <div className="aboutCardText">
                        <h2> Explore </h2>
                        <p> Journey through the inn and explore the stories being crafted by
                            other creatives. Use these to inspire you to craft your own story, or even better! Join them
                            in their journey and perhaps the story will expand to new heights.
                        </p>
                        {/* <Link to="/"><img className="cardImg" alt="globe"/></Link> */}
                    </div>
                </div>
            </div>
        </section>
    )
}