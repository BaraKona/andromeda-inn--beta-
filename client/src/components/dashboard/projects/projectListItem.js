import React from 'react'
import './css/projectListItem.scss'
import {settings} from '../../../images/Icon'
function ProjectListItem(props) {

    function openProject (project) {
        props.setCurrentProject(project)
    }
    return (
    <div className="projectListItemSection">
        <div className="">
            {props.projects.slice(0).reverse().map((project, index) => (
                <div onClick={(e) => openProject(project)} className="projectListItemCard" key={index}>
                    <p>{project.projectName ? project.projectName: 'New Project ' + index} <img className="component-setting-icon" src={settings} href="settings"/></p>
                </div>
            ))}
        </div>
    </div>
    )
}

export default ProjectListItem
