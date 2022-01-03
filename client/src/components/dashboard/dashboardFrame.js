import React, {useState} from 'react'
import Navbar from '../layout/newNavbar'
import DashboardBody from './dashboard'
import ProjectCard from '../componentSnippets/projectCard'
import './css/dashboardFrame.scss'

function Dashboard() {
  const [modal, showModal] = useState('')
  const [newProject, setNewProject] = useState(false)

  function openModal(){
      showModal(modal === '' ? 'show' : '')
  }
  function closeModal(){
      showModal('')
  }
  function addProject(){
    setNewProject(true)
  }
  function showProject(){
    if (newProject === true){
      return <ProjectCard
              newProject={newProject}
              setNewProject={setNewProject}
              openModal={openModal}
              />
    } else if (newProject === false){
      return <></>
    }
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

              </div>
          </div>
      </div>
      <div className="dashboardFlex">
          <div className="dashboardNarrow">
              <div className="dashboardProjects">
                  <div className="dashboardProjectsContainer">
                      <p>Your Projects</p>
                  </div>
                  <div className="hubProjects">
                    {showProject()}
                    <div className="hubAddProjects">
                      <p>Create New Project</p>
                      <button onClick={addProject} className="plusButton">&#x2B;</button>
                    </div>
                  </div>
              </div>
          </div>
          <div className="dashboardWide">
            <DashboardBody/>
          </div>
      </div></div>
    </section>
  </>
    )
}

export default Dashboard
