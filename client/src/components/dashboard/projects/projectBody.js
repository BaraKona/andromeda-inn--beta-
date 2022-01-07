import React, {useState} from 'react'
import './css/projectBody.scss'

function ProjectBody(props) {
    const [modal, showModal] = useState('')

    return (
        <div>
            <p> {props.currentProject.projectCreator}</p>
        </div>
    )
}

export default ProjectBody
