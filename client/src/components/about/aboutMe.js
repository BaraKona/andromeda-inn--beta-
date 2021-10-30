import React, {useEffect} from 'react'
import './css/aboutAndro.css'
import axios from 'axios'

export default function AboutMe() {
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts',{params:{_limit:4}})
        .then((res) => {
            console.log(res)
        })
    },[])

    return (
        <div className = "aboutMe">
            <div className = "aboutMeContainer">
                {/* <h1> Hi</h1> */}
            </div>
        </div>
    )
}
