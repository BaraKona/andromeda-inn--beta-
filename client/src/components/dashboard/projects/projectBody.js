import React, {useState, useEffect} from 'react'
import ProjectComponents from './projectComponents'
import {useDispatch, useSelector} from 'react-redux'
import {createProject, updateProjectComponent, deleteProject} from '../../../actions/projects'
import { useAuth } from '../../../contexts/AuthContext'
import dayjs from 'dayjs'
import './css/projectBody.scss'

function ProjectBody(props) {
    const {currentUser, currentPostId, setCurrentPostId} = useAuth()
    const [allComponents, setAllComponents] = useState()
    const [component, setComponent] = useState([{componentCreator: currentUser?.uid || '' , componentPosition: props.currentProject?.projectComponents?.length + 1, componentBody: '', createdAt: Date.now(), lastUpdated: Date.now()}])
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    var relativeTime = require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime)

    function hasComponent () {
        if (allComponents?.projectComponents?.length > 0) {
            return <ProjectComponents components={allComponents.projectComponents}/>
            // {props.currentProject.projectComponents.map((project) => (

            //     console.log(project)
            //     // return <ProjectComponent components={project}/>
            // ))}

        }
        else return <h1> no projects </h1>
    }
    function findUser (creator) {
        const username = users.find((user) => user.userID === creator)
        return (username.userName)
    }
    function createComponent (e) {
        e.preventDefault()
        try {
            dispatch(updateProjectComponent(props.currentProject._id, component)).then((data) => {
                console.log(data);
                setAllComponents(data)
            })
            console.log('success')
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (props) setAllComponents(props.currentProject)
    }, [dispatch])
    return (
        <div>
            {console.log(props.currentProject)}
            <div className="projectDetails">
                <p className="projectSummary">{props?.currentProject?.projectSummary}</p>
                <p className="projectCreateDate"><span>Project Created:</span> {dayjs(props?.currentProject?.createdAt?.date).fromNow()}</p>
                <p className="projectCreateDate"><span>Project Created By:</span> {findUser(props?.currentProject?.createdAt?.user)}</p>
                {hasComponent()}
            </div>
            <form className="addComponent" onSubmit={createComponent}>
                <button className="addButton" type="submit"> Add Component</button>
            </form>
        </div>
    )
}

export default ProjectBody
