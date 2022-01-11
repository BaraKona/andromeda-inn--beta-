import React, {useEffect, useState, useRef, createRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {book2, settings} from '../../../images/Icon'
import dayjs from 'dayjs'
import './css/projectComponent.scss'

function ProjectComponents(props) {
    const users = useSelector((state) => state.users);
    const [showSettings, setShowSettings] = useState('')
    const settingsRef = useRef([])
    const myRef = React.createRef()
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
    function openSettings (index) {
        console.log(settingsRef)
        setShowSettings( showSettings === '' ? 'show' : '')
    }
    console.log(showSettings)
    return (
        <div className="projectComponentContainer">
            {props.components?.slice(0).reverse().map((component, index) => (
                <div className="projectComponent" key={index} ref={settingsRef}>
                    <p className="textEffect projectComponentPosition"> {component.componentPosition} <img onClick={() => openSettings(index)} className="component-setting-icon" src={settings} href="settings"/></p>
                    <p className="projectComponentName">{component.componentName || 'Unnamed Component'}</p>
                    <img src={book2} className="project-Component-icon" href="Icon-by-Eszter"/>
                    <p className="projectComponentContainer-user textEffect">{findUser(component.componentCreator)}</p>
                    <p className="projectComponentContainer-update">{dayjs(component.lastUpdated).fromNow()}</p>
                    <div className={`settings-info ${showSettings}`}>
                        <p> Rename </p>
                        <p> Delete </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectComponents
