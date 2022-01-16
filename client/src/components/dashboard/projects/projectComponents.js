import React, {useEffect, useState, useRef, createRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory, useLocation } from 'react-router-dom'
import {book2, settings} from '../../../images/Icon'
import {useProject} from '../../../contexts/ProjectContext'
import dayjs from 'dayjs'
import './css/projectComponent.scss'

function ProjectComponents(props) {
    const users = useSelector((state) => state.users);
    const history = useHistory()
    const location = useLocation()
    const {currentProjectComponent, setCurrentProjectComponent, currentProject} = useProject()
    const [showSettings, setShowSettings] = useState()
    const [componentSelectedId, setComponentSelectedId] = useState()

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
    async function openComponent (e, component) {
      e.preventDefault()
    //   console.log(currentProjectComponent)
       setCurrentProjectComponent(component)
    //   console.log(component)
    //   console.log(currentProject)
    //   console.log(currentProjectComponent)

      history.push({
        pathname: '/inn/project-view/' + currentProject._id + '/component/' + currentProjectComponent._id + '/' + currentProjectComponent?.componentPosition,
        state: currentProjectComponent
      })
    }

    function openSettings (id, show) {
        setShowSettings(!show)
        if (!show) {
            setComponentSelectedId(id)
        }
        else {
            setComponentSelectedId(null)
        }
    }
    return (
        <div className="projectComponentContainer">
            {props.components?.slice(0).reverse().map((component, index) => (
                <div className="rel projectComponentMain" key={index}>
                    <div className="projectComponent"  ref={settingsRef} onClick={(e) => {openComponent(e, component)}}>
                        <p className="textEffect projectComponentPosition"> {component.componentPosition}</p>
                        <p className="projectComponentName">{component.componentName || 'Unnamed Component'}</p>
                        <img src={book2} className="project-Component-icon" href="Icon-by-Eszter"/>
                        <p className="projectComponentContainer-user textEffect">{findUser(component.componentCreator)}</p>
                        <p className="projectComponentContainer-update">{dayjs(component.lastUpdated).fromNow()}</p>
                    </div>
                    {component?._id === componentSelectedId &&
                        <div className="settings-info show">
                            <p> Rename </p>
                            <p> Delete </p>
                        </div>
                    }
                    <img onClick={(e) => openSettings(component._id, showSettings)} className="component-setting-icon csi" src={settings} alt="settings"/>
                </div>
            ))}
        </div>
    )
}

export default ProjectComponents
