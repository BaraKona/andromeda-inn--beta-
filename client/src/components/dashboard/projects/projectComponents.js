import React, {useEffect, useState, useRef, createRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {book2, settings} from '../../../images/Icon'
import {useProject} from '../../../contexts/ProjectContext'
import dayjs from 'dayjs'
import './css/projectComponent.scss'

function ProjectComponents(props) {
    const users = useSelector((state) => state.users);
    const { currentProjectComponent, setCurrentProjectComponent} = useProject()
    const [showSettings, setShowSettings] = useState('')
    const settingsRef = useRef([])
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
    function openSettings (index, target) {
        console.log(index)
        console.log(target)

       target === true ? setShowSettings( showSettings === '' ? 'show' : ''): setShowSettings( showSettings === '' ? 'show' : '')
    }
    console.log(showSettings)
    return (
        <div className="projectComponentContainer">
            {props.components?.slice(0).reverse().map((component, index) => (
                <div className="rel projectComponentMain" key={index}>
                    <div className="projectComponent"  ref={settingsRef} onClick={(e) => setCurrentProjectComponent(component)}>
                        <p className="textEffect projectComponentPosition"> {component.componentPosition}</p>
                        <p className="projectComponentName">{component.componentName || 'Unnamed Component'}</p>
                        <img src={book2} className="project-Component-icon" href="Icon-by-Eszter"/>
                        <p className="projectComponentContainer-user textEffect">{findUser(component.componentCreator)}</p>
                        <p className="projectComponentContainer-update">{dayjs(component.lastUpdated).fromNow()}</p>
                    </div>
                    <div className={`settings-info ${showSettings}`}>
                        <p> Rename </p>
                        <p> Delete </p>
                    </div>
                    <img onClick={(e) => openSettings(index, e.target.matches("component-setting-icon"))} className="component-setting-icon csi" src={settings} href="settings"/>
                </div>
            ))}
        </div>
    )
}

export default ProjectComponents
