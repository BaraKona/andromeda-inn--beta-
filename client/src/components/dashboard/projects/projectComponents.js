import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import dayjs from 'dayjs'
import './css/projectComponent.scss'

function ProjectComponents(props) {
    const users = useSelector((state) => state.users);
    var relativeTime = require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime)

    function findUser (creator) {
        const username = users.find((user) => user.userID === creator)
        return (username.userName)
    }
    return (
        <div className="projectComponentContainer">
            {props.components?.slice(0).reverse().map((component, index) => (
                <div className="projectComponent" key={index}>
                    <p>{component.componentPosition}</p>
                    <p className="projectComponentContainer-user textEffect">{findUser(component.componentCreator)}</p>
                    <p className="projectComponentContainer-update">{dayjs(component.lastUpdated).fromNow()}</p>
                </div>
            ))}
        </div>
    )
}

export default ProjectComponents
