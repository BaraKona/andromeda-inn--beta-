import React, {useState} from 'react'
import './css/projectBody.scss'

function ProjectBody() {
    const [modal, showModal] = useState('')

    function openPost(){
        showModal(modal === '' ? 'show' : '')
    }
    function closeModal(){
        showModal('')
    }
    return (
        <div className="dashboardProjectSetup">
            <div className={`dashboardProjectModal ${modal}`}>
                <div className="dashboardProjectModal-content">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <div className="flex wrap">

                    </div>
                </div>
            </div>
            <div className="dashboardProjectSetupContainer">

            </div>
        </div>
    )
}

export default ProjectBody
