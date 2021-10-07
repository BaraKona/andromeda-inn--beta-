import "../css/landingFrame.css"
import icon from '../../images/icons/key.svg'
const landingFrame = () => {
    return(
        <div className = "landing">
            <div className = "landing-frame">
            {/* <div class = "background"> <img src={bkimg} alt="image by Johannes-Plenio"></img></div> */}
            <div className ="landing-text">
                <h1> Welcome to <span>Andromeda Inn</span> Writing Hub</h1>
                <p> A collaboration place for creatives. <br></br> Join writers from all corners of the literary world and collaborate together
                inside the inn.
                </p>
                <div className= "buttonContainer">
                    <a href="/#" className = "button button--dione">
                        <span><span>Explore</span></span>
                    </a>
                    <a href="/#" className = "button button--dione">
                        <span><span>Connect</span></span>
                    </a>
                </div>
                <p className ="floating">Journey in! </p>
                <p className = "floating arrow"><img className="iconImg" src={icon} alt="centerIcon"></img></p>

            </div>
            </div>
        </div>
    )
}

export default landingFrame