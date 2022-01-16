import React, {useState, useEffect} from 'react'
import {settings} from '../../../images/Icon'
import {useProject} from '../../../contexts/ProjectContext'
import { useDispatch } from 'react-redux'
import {deleteProject} from '../../../actions/projects'
import './css/projectListItem.scss'

function ProjectListItem(props) {
    const {currentProjectComponent, setCurrentProjectComponent, setCurrentProject} =useProject()
    const [projectSelectedId, setProjectSelectedId] = useState()
    const [modal, showModal] = useState('')
    const [show, setShow] = useState(false)
    const dispatch = useDispatch();
    function openProject (project) {
        props.setCurrentProject(project)
        setCurrentProject(project)
        // setCurrentProjectComponent(null)
        props.dashboardView()
    }
    async function showSettings(id, verify){
        await setShow(!show)
        if (!verify) {
            setProjectSelectedId(id)
        }
        else {
            setProjectSelectedId(null)
        }
    }
    function openModal(){
        showModal(modal === '' ? 'show' : '')
    }
    function closeModal () {
        showModal('')
    }
    function deleteThisProject (e) {
        e.preventDefault()
        try {
            dispatch(deleteProject(projectSelectedId))
            console.log('deleted')
        } catch (error) {

        }
        closeModal()
    }
    useEffect(() => {
        setProjectSelectedId('')
    }, [dispatch])
    return (
    <div className="projectListItemSection">
      <div className={`delete-modal ${modal}`}>
        <div className="delete-modal-content rel">
          <span className="close" onClick={closeModal}>&times;</span>
          <p className="center"> Are you sure you wish to delete this project ? This action is permanent and <span>cannot be undone</span>. </p>
          <div className="delete-button-container">
            <button className="cancel-button"> Cancel </button>
            <button className="delete-button" onClick={(e) => deleteThisProject(e)}> Delete </button>
          </div>
        </div>
      </div>

        <div className="">
            {props.projects.slice(0).reverse().map((project, index) => (
                <div className="rel" key={index}>
                    <div onClick={(e) => openProject(project)} className="projectListItemCard" >
                        <p>{project.projectName ? project.projectName: 'New Project ' + index} </p>
                    </div>
                      <img className="component-setting-icon component-list-item-settings" src={settings} onClick={() => showSettings(project._id, show)} alt="settings"/>
                      {project?._id === projectSelectedId &&
                        <div className="settings-info show">
                            <p> Add User</p>
                            <p> Rename </p>
                            <p onClick={openModal}> Delete </p>
                        </div>
                    }
                </div>
            ))}
        </div>
    </div>
    )
}

export default ProjectListItem
