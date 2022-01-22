import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import Navbar from '../components/layout/newNavbar'
import { useProject } from '../contexts/ProjectContext'
import ProjectBody from '../components/dashboard/projects/projectBody'
import ProjectList from '../components/dashboard/projects/projectList'
import '../components/dashboard/css/dashboardFrame.scss'

function ProjectView() {
  const location = useLocation();
  const {currentProject, setCurrentProject, currentProjectComponent} = useProject()

  useEffect(() => {
    if (Object.keys(currentProject)?.length === 0) {
      setCurrentProject(location.state)
    }
    console.log(currentProject)
  }, [currentProject, currentProjectComponent])

  return (
  <>
  <section className="mainDashboard Home">
    <div className = "container">
      <Navbar/>
      <div className="dashboardFlex">
        <ProjectList/>
          <div className="dashboardWide">
            <ProjectBody currentProject={currentProject}/>
          </div>
      </div>
      </div>
    </section>
  </>
    )
}

export default ProjectView
