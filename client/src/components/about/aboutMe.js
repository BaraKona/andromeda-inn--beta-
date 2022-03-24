import React, {useEffect} from 'react'
import axios from 'axios'
import { send } from '../../images/Icon'


export default function AboutMe() {
    useEffect(() => {
    },[])

    return (
        <div className = "aboutMe">
            <div className = "aboutMeContainer">
                <button onClick={send}> send </button>
            </div>
        </div>
    )
}
