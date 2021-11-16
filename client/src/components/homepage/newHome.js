import React from 'react'
import Navbar from '../layout/newNavbar'
import Hold from '../../images/Icon/circle_1.svg'
import './css/newHome.scss'

function NewHome() {
    return (
        <section className="homePage">
            <Navbar />
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
                    <div className="homeSubItem">
                        <p>Anim anim irure non incididunt quis. Incididunt irure in id sunt cillum irure mollit.  Incididunt irure in id sunt cillum irure mollit. Amet Amet quis eiusmod esse elit esse. Fugiat sint non consequat in eu deserunt fugiat veniam pariatur irure non velit.Amet Amet quis eiusmod esse elit esse. Fugiat sint non consequat in eu deserunt fugiat veniam pariatur irure non velit.</p>
                        <img class="hold" src={Hold}/>
                    </div>
                    <div className="homeSubItem"><p>Qui fugiat est reprehenderit Lorem duis non enim. Eiusmod minim deserunt fugiat do consequat dolore id excepteur aliqua nisi commodo. Incididunt consectetur dolore aliqua id commodo nulla duis reprehenderit. Aute occaecat eu occaecat minim amet. Amet laborum dolor amet voluptate magna. Quis anim aliquip exercitation esse nulla.</p></div>
                </div>
            </div>
        </section>
    )
}

export default NewHome
