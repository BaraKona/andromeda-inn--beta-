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
    const [activeComponentBody, setActiveComponentBody] = useState(currentProjectComponent?.componentBody)
    const [isReadMode, setIsReadMode] = useState(false)
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();


    var relativeTime = require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime)

    function findUser (thisUser) {
        try {
            const username = users?.find((user) => user.userID === thisUser)
            return (username.userName)
        } catch (error) {
            const username = "none"
            return (username)
        }
        // return (username.userName)
    }
    const saveChanges = (e) => {
    e.preventDefault()
      try {
        console.log("saved??")
        dispatch(updateProjectComponentDetails(currentProject._id, currentProjectComponent._id, update)).then((data) => {
        console.log(data);
      })
        console.log('success')
      } catch (error) {
        console.log(error)
      }
    }
    // function textThing () {
    //     var txt = activeComponentBody;
    //     var txttostore = '<p>' + txt.replace(/\n/g, "</p>\n<p>") + '</p>';
    //     return <div>{txttostore}</div>
    // }
    console.log(users);
    console.log(currentProjectComponent)
    return (
        <div className="componentEditorComponentBody">
            <div className="componentEditorHeader">
                <p>{findUser(currentProjectComponent.componentCreator)}</p>
                {/* <p>Last Updated: {dayjs(currentProjectComponent.lastUpdated).format('DD/MM/YYYY')}</p> */}
                <p>Last Updated: {dayjs(currentProjectComponent.lastUpdated).fromNow()}</p>
                <p>Last Updated By: {findUser(currentProjectComponent.lastUpdatedUser)}</p>
            </div>
            <form onSubmit={saveChanges} className="componentEditorBody">
                <div className="flex-no-gap componentEditorButtonContainer">
                    <button className="button buttonDefault" onClick={(e) => setIsReadMode(!isReadMode)}> Edit </button>
                    <button className="button buttonDefault" type="submit" onClick={(e) => setUpdate({...update, componentBody: activeComponentBody, lastUpdated: Date.now(), lastUpdatedUser: currentUser.uid, componentName: activeComponentName})}> Save </button>
                </div>
                <div className="componentEditorBodyText">
                    {/*<input type="text" value={activeComponentName != null ? activeComponentName : 'No Title'} className="componentTitle" onChange={(e)=> setActiveComponentName(e.target.value)}/> */}
                    {/* <textarea value={activeComponentBody != null ? activeComponentBody : 'Add Text'} className="textarea" dir="auto" placeholder="Tap here to begin writing..." rows="1" onChange={(e)=> setActiveComponentBody(e.target.value) }/> */}
                    {isReadMode == true ? <h2 className="textEffect">{activeComponentName != null ? activeComponentName : 'No Title'}</h2> : <input type="text" value={activeComponentName != null ? activeComponentName : 'No Title'} className="componentTitle" onChange={(e)=> setActiveComponentName(e.target.value)}/>}
                    {isReadMode == true ? <textarea className="textarea" value={activeComponentBody != null ? activeComponentBody : 'Add Text'} readOnly/>: <textarea value={activeComponentBody != null ? activeComponentBody : 'Add Text'} className="textarea" dir="auto" placeholder="Tap here to begin writing..." rows="1" onChange={(e)=> setActiveComponentBody(e.target.value) }/>}
                </div>
            </form>
        </div>
    )
}

export default ComponentEditor
