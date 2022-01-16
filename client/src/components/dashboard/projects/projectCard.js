import React from 'react'
import './css/projectCard.scss'
import { book2 } from '../../../images/Icon'

function ProjectCard(props) {

    function closeProject () {
        props.setNewProject(false)
    }
    return (
        <div className="projectCardSection">
            <div className="projectCard" onClick={props.openModal}>
                <img src={book2} alt="default" className="icon"/>
                <h4>
                    Add New Project fff
                </h4>
            </div>
            <p className="closeButton" onClick={closeProject}> &times;</p>
        </div>
    )
}

export default ProjectCard

