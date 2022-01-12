import {useState} from 'react'
import {useProject} from '../../../contexts/ProjectContext'
import {useAuth} from '../../../contexts/AuthContext'
import { useDispatch, useSelector } from 'react-redux'
import {createProject, updateProjectComponentDetails, deleteProject} from '../../../actions/projects'
import dayjs from 'dayjs'

import './css/componentEditor.scss'
function ComponentEditor() {
    const {currentProjectComponent, setCurrentProjectComponent, currentProject} = useProject()
    const {currentUser} = useAuth()
    const [update, setUpdate] = useState({componentBody: '', lastUpdated: '', lastUpdatedUser: '', componentName: ''})
    const [activeComponentName, setActiveComponentName] = useState(currentProjectComponent?.componentName)
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();


    var relativeTime = require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime)

    function findUser () {
        try {
            const username = users?.find((user) => user.userID === currentProjectComponent.componentCreator)
            return (username.userName)
        } catch (error) {
            const username = "none"
            return (username)
        }
        // return (username.userName)
    }
    function saveChanges (e) {
        e.preventDefault()
        try {
            console.log(currentProject)
            dispatch(updateProjectComponentDetails(currentProject._id, currentProjectComponent._id, update)).then((data) => {
              console.log(data);
            })
              console.log('success')
          } catch (error) {
              console.log(error)
          }
    }

    console.log(users);
    console.log(currentProjectComponent)
    return (
        <div className="componentEditorComponentBody">
            <div className="componentEditorHeader">
                <p>{findUser()}</p>
                <p>Last Updated: {dayjs(currentProjectComponent.lastUpdated).format('DD/MM/YYYY')}</p>
            </div>
            <form onSubmit={saveChanges} className="componentEditorBody">
                <div className="flex-no-gap componentEditorButtonContainer">
                    <button className="button buttonDefault"> Edit </button>
                    <button className="button buttonDefault" type="submit"> Save </button>
                </div>
                <div className="componentEditorBodyText">
                    <input type="text" value={activeComponentName != null ? activeComponentName : 'No Title'} className="componentTitle" onChange={(e)=> setActiveComponentName(e.target.value)}/>
                    <textarea className="textarea" dir="auto" placeholder="Tap here to begin writing..." rows="1" onChange={(e) => setUpdate({...update, componentBody: e.target.value })}/>
                </div>
            </form>
        </div>
    )
}

export default ComponentEditor
