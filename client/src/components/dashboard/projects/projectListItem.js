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
                <div className="rel">
                    <div onClick={(e) => openProject(project)} className="projectListItemCard" key={index}>
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
