import React from 'react'
import './css/projectListItem.scss'
import {settings} from '../../../images/Icon'
import {useProject} from '../../../contexts/ProjectContext'

function ProjectListItem(props) {
    const {currentProjectComponent, setCurrentProjectComponent, setCurrentProject} =useProject()

    function openProject (project) {
        props.setCurrentProject(project)
        setCurrentProject(project)
        setCurrentProjectComponent(null)
    }
    return (
    <div className="projectListItemSection">
        <div className="">
            {props.projects.slice(0).reverse().map((project, index) => (
                <div className="rel" key={index}>
                    <div onClick={(e) => openProject(project)} className="projectListItemCard" >
                        <p>{project.projectName ? project.projectName: 'New Project ' + index} </p>
                    </div>
                        <img className="component-setting-icon component-list-item-settings" src={settings} href="settings"/>
                </div>
            ))}
        </div>
    </div>
    )
}

export default ProjectListItem
