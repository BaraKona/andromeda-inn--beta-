import React from 'react'
import {Link} from 'react-router-dom'
import img from '../../images/icons/magicbook2.svg'
import '../css/footer.css'


function mainFooter() {
    return (
        <section className= "footer">
            <div className = "footerContainer">
                <Link to="/about"> About </Link>
                <Link to="/"> Support us </Link>
                <img className="iconImg" src ={img} alt="centerImg" />
                <Link to="/contact"> Contact us</Link>
                <Link to="/terms"> Terms </Link>
            </div>
            <hr />
            <p> Default Copyright stuff </p>
        </section>
    )
}

export default mainFooter
