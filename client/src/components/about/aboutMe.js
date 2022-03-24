import React, {useEffect} from 'react'
import axios from 'axios'
import { io } from 'socket.io-client'
import { send } from '../../images/Icon'


export default function AboutMe() {
    const socket = io();
    socket.on('comment', function(msg) {
      console.log('msg')
    });

    function send () {
        console.log('hi')
        const socket = io();
        const object = {
            text: 'powerful'
        }
        socket.emit('comment', object);
    }

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
