import React from 'react'
import Navbar from '../layout/newNavbar'
import Hold from '../../images/Icon/circle_1.svg'
import { Link } from 'react-router-dom'
import './css/newHome.scss'
// import './css/homeButton.scss'

function NewHome() {
    return (
        <section className="homePage">
            <Navbar />
            <div className="homeContainer container">
                <div className="homeItemLeft">
                        <div className ="home-text">
                        <h1> Welcome to <span>Andromeda Inn</span> Writing Hub</h1>
                        <p> A collaboration place for creatives. <br></br> Join writers from all corners of the literary world and collaborate together
                        inside the inn.
                        </p>
                        <Link to="/inn/discover">
                            <li className="content__item">
                                <button className="button button--surtur">
                                    <svg className="textcircle" viewBox="0 0 500 500">
                                        <title>Explore Andromeda Inn</title>
                                        <defs><path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"></path></defs>
                                        <text><textPath xlinkHref="#textcircle" aria-label="Explore Andromeda Inn " textLength="900">  Explore &nbsp; Andromeda &nbsp;  Inn  &nbsp;  </textPath></text>
                                    </svg>
                                    <svg aria-hidden="true" className="eye" width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
                                        <path className="eye__outer" d="M10.5 35.308c5.227-7.98 14.248-13.252 24.5-13.252s19.273 5.271 24.5 13.252c-5.227 7.98-14.248 13.253-24.5 13.253s-19.273-5.272-24.5-13.253z"></path>
                                        <path className="eye__lashes-up" d="M35 8.802v8.836M49.537 11.383l-3.31 8.192M20.522 11.684l3.31 8.192"></path>
                                        <path className="eye__lashes-down" d="M35 61.818v-8.836 8.836zM49.537 59.237l-3.31-8.193 3.31 8.193zM20.522 58.936l3.31-8.193-3.31 8.193z"></path>
                                        <circle className="eye__iris" cx="35" cy="35.31" r="5.221"></circle>
                                        <circle className="eye__inner" cx="35" cy="35.31" r="10.041"></circle>
                                    </svg>
                                </button>
                            </li>
                        </Link>
                    </div>
                </div>
                <div className="imageContainer"></div>
                <div className="homeItemRight">
                    <div className="homeSubItem">
                        <p className="firstLetter"> Have a look at the "About" section for some insight in what we are trying to do here. Alternatively, if you're already aware, you can journey into the Hub. Although, bear in mind, you will need to have an account and log in to have access.</p>
                        <img className="hold" src={Hold}/>
                        <p className="firstLetter">We suggest you go to profile first and make it presentable. You will be more likely to find a partner with a detailed profile section. Best of luck!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewHome
