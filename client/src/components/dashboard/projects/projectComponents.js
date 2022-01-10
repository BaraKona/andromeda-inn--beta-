import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {book2, settings} from '../../../images/Icon'
import dayjs from 'dayjs'
import './css/projectComponent.scss'

function ProjectComponents(props) {
    const users = useSelector((state) => state.users);
    var relativeTime = require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime)

    function findUser (creator) {
        try {
            const username = users?.find((user) => user.userID === creator)
            return (username.userName)
        } catch (error) {
            const username = "none"
            return (username)
        }
        // return (username.userName)
    }

    return (
        <div className="projectComponentContainer">
            {props.components?.slice(0).reverse().map((component, index) => (
                <div className="projectComponent" key={index}>
                    <p className="textEffect projectComponentPosition"> {component.componentPosition} <img className="component-setting-icon" src={settings} href="settings"/></p>
                    <p className="projectComponentName">{component.componentName || 'Unnamed Component'}</p>
                    <img src={book2} className="project-Component-icon" href="Icon-by-Eszter"/>
                    <p className="projectComponentContainer-user textEffect">{findUser(component.componentCreator)}</p>
                    <p className="projectComponentContainer-update">{dayjs(component.lastUpdated).fromNow()}</p>
                </div>
            ))}
        </div>
    )
}

export default ProjectComponents
