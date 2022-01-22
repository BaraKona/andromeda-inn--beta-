import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import ProjectComponents from './projectComponents'
import {useDispatch, useSelector} from 'react-redux'
import {createProject, updateProjectComponent, deleteProject} from '../../../actions/projects'
import { useAuth } from '../../../contexts/AuthContext'
import { useProject } from '../../../contexts/ProjectContext'
import dayjs from 'dayjs'
import './css/projectBody.scss'

function ProjectBody(props) {
  const {currentUser, currentPostId, setCurrentPostId} = useAuth()
  const location = useLocation()
  const {currentProject} = useProject()
  // console.log(props)
  // console.log(currentProject)
    const [allComponents, setAllComponents] = useState(currentProject)
    const [component, setComponent] = useState([{componentCreator: currentUser?.uid, componentPosition: currentProject?.projectComponents?.length, componentBody: '', createdAt: Date.now(), lastUpdated: Date.now()}])
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    var relativeTime = require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime)

    function hasComponent () {
      if (allComponents?.projectComponents?.length > 0) {
        return <ProjectComponents setAllComponents={setAllComponents} components={allComponents.projectComponents}/>
      } else
        return <h1> Add a component to get started </h1>
    }
    function findUser (creator) {
      try {
        const username = users?.find((user) => user.userID === creator)
        return (username.userName)
      } catch (error) {
          const username = "none"
          return (username)
      }
    }
    function createComponent (e) {
      e.preventDefault()
      setComponent([{componentCreator: currentUser?.uid, componentPosition: allComponents.projectComponents?.length + 1, componentBody: '', createdAt: Date.now(), lastUpdated: Date.now(), projectName: 'Unnamed Component'}])
      try {
        dispatch(updateProjectComponent(currentProject._id, component)).then((data) => {
          console.log(data);
          setAllComponents(data)
        })
          console.log('success')
      } catch (error) {
          console.log(error)
      }
    }
    useEffect(() => {
        if (currentProject) setAllComponents(currentProject)
        setComponent([{componentCreator: currentUser?.uid, componentPosition: currentProject?.projectComponents?.length, componentBody: '', createdAt: Date.now(), lastUpdated: Date.now(), projectName: 'Unnamed Component'}])
    }, [dispatch, currentProject])
    return (
        <div>
            {console.log(currentProject)}
            <div className="projectDetails">
                <p className="projectSummary">{currentProject?.projectSummary}</p>
                <p className="projectCreateDate"><span>Project Created:</span> {dayjs(currentProject?.createdAt?.date).fromNow()}</p>
                <p className="projectCreateDate"><span>Project Created By:</span> {findUser(currentProject?.createdAt?.user)}</p>
                {hasComponent()}
            </div>
            <form className="addComponent" onSubmit={createComponent}>
                <button className="addButton" type="submit"> Add Component</button>
            </form>
        </div>
    )
}

export default ProjectBody
