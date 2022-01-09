import React, {useState, useRef, useEffect} from 'react'
import Navbar from '../layout/newNavbar'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth } from '../../contexts/AuthContext'
import {createProject, updateProject, deleteProject} from '../../actions/projects'
import DashboardBody from './dashboard'
import ProjectCard from './projects/projectCard'
import ProjectListItem from './projects/projectListItem'
import ProjectBody from './projects/projectBody'
import './css/dashboardFrame.scss'

function Dashboard() {
  const dispatch = useDispatch();
  const {currentUser, currentPostId, setCurrentPostId} = useAuth()
  const projects = useSelector((state) => currentUser ? state.projects.filter((project) => project.projectCreator === currentUser.uid || project.projectCollaborators.includes(currentUser.uid)): null);
  const [projectData, setProjectData] = useState({ projectName: '', projectCreator: '', projectSummary: '', projectGenre: [], projectType: [], createdAt: { user: '', date: ''}})
  const [modal, showModal] = useState('')
  const [currentProject, setCurrentProject] = useState({})
  const [newProject, setNewProject] = useState(false)
  const [genres, setGenres] = useState([])
  const [types, setTypes] = useState([])
  const [typeCounter, setTypeCounter] = useState(0)
  const [error, setError] = useState('')
  const fantasyRef = useRef()
  const sciFiRef = useRef()
  const horrorRef = useRef()
  const romanceRef = useRef()
  const grimRef = useRef()
  const mythologyRef = useRef()
  const rPRef = useRef()
  const adventureRef = useRef()
  const warRef = useRef()
  const lGBTQRef = useRef()
  const mysteryRef = useRef()
  const actionRef = useRef()
  const comedyRef = useRef()
  const historyRef = useRef()
  const shortRef = useRef()
  const poetryRef = useRef()
  const crimeRef = useRef()
  const psychoRef = useRef()
  const lFMRef = useRef()
  const sStoryRef = useRef()
  const mComicRef = useRef()
  const webNovelRef = useRef()
  const cYOAdventureRef = useRef()
  const fFictionRef = useRef()

  function openModal(){
      showModal(modal === '' ? 'show' : '')
  }
  function closeModal(){
      showModal('')
  }
  function addProject(){
    openModal()
    // setNewProject(true)
  }
  function isTag (e, tag){
    e.preventDefault()
    if (tag.current.classList == 'selected') {
        tag.current.classList.remove('selected')
        setGenres(genres.filter(item => item !== tag.current.outerText))
    }
    else if (tag.current.classList == ''){
        tag.current.classList.add('selected')
        setGenres(genres => [...genres, tag.current.outerText])
    }
  }
  function isType (e, tag){
      e.preventDefault()
      if (tag.current.classList == 'selected' && typeCounter == 1){
          tag.current.classList.remove('selected')
          setTypes(types.filter(item => item !== tag.current.outerText))
          setTypeCounter(0)
      }
      else if (tag.current.classList == '' && typeCounter == 0){
          tag.current.classList.add('selected')
          setTypes(types => [...types, tag.current.outerText])
          setTypeCounter(1)
      }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
      try {
        dispatch(createProject(projectData))
        setError('We have created a project for you :))')
        closeModal()
      } catch (error) {
          console.log(error)
          setError(' Sorry, something went wrong... Try again later?')
      }clear()
  }
  function yourProjects () {
    if (projects) {
      return (
          <ProjectListItem
          projects={projects}
          setCurrentProject={setCurrentProject}
          currentProject={currentProject}/>
      )
    }
  }
  function dashboardView () {
    if (Object.keys(currentProject)?.length > 0){
      return <ProjectBody currentProject={currentProject}/>
    } else {
      return <DashboardBody/>
    }
  }
  useEffect(() => {
    console.log(currentProject)
  }, [currentProject])
  const clear = () => {
    // setCurrentPostId(null);
    // setPostData({ postCreator: '', postTitle: '', postContent: '', postReContent: '', postGenre: '', selectedFile: '', postType: ''})
    // setError("")
  }
  return (
  <>
  <section className="mainDashboard Home">
    <div className = "container">
      <Navbar/>
      <div className={`dashboardProjectModal ${modal}`}>
          <div className="dashboardProjectModal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <div className="flex wrap">
                <form onSubmit={handleSubmit} className="formContainer flex wrap">
                  <div className="leftProjectForm">
                    <h2> Create A Project </h2>
                    <label> Project Name: </label>
                      <input type="text" className="input" required onChange={(e) => setProjectData({ ...projectData, projectName: e.target.value })}/>
                    <label> Project Summary </label>
                      <textarea className="textarea" type="text" required onChange={(e) => setProjectData({ ...projectData, projectSummary: e.target.value })}/>
                    {/* <label> Project Summary </label>
                      <textarea className="textarea" type="text" required/> */}

                    {/* <label> Title: </label>
                      <input type="text" className="input" required/> */}
                      <div id="postGenre">
                            <label>Genre&#40;s&#41;</label>
                            <div className = "profileTags">
                                <button onClick={(e) => isTag(e, fantasyRef)} ref={fantasyRef}> Fantasy </button>
                                <button onClick={(e) => isTag(e, sciFiRef)} ref={sciFiRef}> Sci-fi </button>
                                <button onClick={(e) => isTag(e, horrorRef)} ref={horrorRef}> Horror </button>
                                <button onClick={(e) => isTag(e, romanceRef)} ref={romanceRef}> Romance </button>
                                <button onClick={(e) => isTag(e, grimRef)} ref={grimRef}> Grim-Dark </button>
                                <button onClick={(e) => isTag(e, mythologyRef)} ref={mythologyRef}> Mythology </button>
                                <button onClick={(e) => isTag(e, rPRef)} ref={rPRef}> RP-er </button>
                                <button onClick={(e) => isTag(e, adventureRef)} ref={adventureRef}> Adventure </button>
                                <button onClick={(e) => isTag(e, warRef)} ref={warRef}> War </button>
                                <button onClick={(e) => isTag(e, lGBTQRef)} ref={lGBTQRef}> LGBTQ+ </button>
                                <button onClick={(e) => isTag(e, mysteryRef)} ref={mysteryRef}> Mystery </button>
                                <button onClick={(e) => isTag(e, actionRef)} ref={actionRef}> Action </button>
                                <button onClick={(e) => isTag(e, comedyRef)} ref={comedyRef}> Comedy </button>
                                <button onClick={(e) => isTag(e, historyRef)} ref={historyRef}> Historical </button>
                                <button onClick={(e) => isTag(e, shortRef)} ref={shortRef}> Short Story </button>
                                <button onClick={(e) => isTag(e, poetryRef)} ref={poetryRef}> Poetry </button>
                                <button onClick={(e) => isTag(e, crimeRef)} ref={crimeRef}> Crime </button>
                                <button onClick={(e) => isTag(e, psychoRef)} ref={psychoRef}> Psychological </button>
                            </div>
                            <p onChange={(e) => setProjectData({ ...projectData, projectGenre: e.target.value })}>{genres.join(' ')}</p>
                            <hr/>
                            {/* <input type="text" value={projectData.postGenre} onChange={(e) => setProjectData({ ...projectData, postGenre: e.target.value })} required /> */}
                        </div>
                        <div id="postType">
                            <label> Post Type &#40;select one&#41;</label>
                            <div className = "profileTags">
                                <button onClick={(e) => isType(e, lFMRef)} ref={lFMRef}> Long-form Novel </button>
                                <button onClick={(e) => isType(e, sStoryRef)} ref={sStoryRef}> Short Story </button>
                                <button onClick={(e) => isType(e, mComicRef)} ref={mComicRef}> Manga / Comic </button>
                                <button onClick={(e) => isType(e, webNovelRef)} ref={webNovelRef}> Web Novel </button>
                                <button onClick={(e) => isType(e, cYOAdventureRef)} ref={cYOAdventureRef}> Choose Your Own Adventure </button>
                                <button onClick={(e) => isType(e, fFictionRef)} ref={fFictionRef}> Fan Fiction </button>
                            </div>
                            <p onChange={(e) => setProjectData({ ...projectData, projectGenre: e.target.value })}>{types.join(' ')}</p>
                            <hr/>
                        </div>

                  <button className="postSubmit" type="submit" onClick={(e) => setProjectData({ ...projectData, projectCreator: currentUser.uid, projectGenre: genres, projectType: types, createdAt :{user: currentUser.uid, date: Date.now()}})}>Submit</button>
                  </div>
                </form>
              </div>
                <p className="right">{error}</p>
          </div>
      </div>
      <div className="dashboardFlex">
          <div className="dashboardNarrow">
              <div className="dashboardProjects">
                  <div className="dashboardProjectsContainer">
                      <p>Your Projects</p>
                  </div>
                  <div className="hubProjects">
                    {yourProjects()}
                    {/* {showProject()} */}
                    <div className="hubAddProjects">
                      <p>Create New Project</p>
                      <button onClick={addProject} className="plusButton">&#x2B;</button>
                    </div>
                  </div>
              </div>
          </div>
          <div className="dashboardWide">
            {dashboardView()}
          </div>
      </div></div>
    </section>
  </>
    )
}

export default Dashboard
