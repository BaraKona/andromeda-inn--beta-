import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import Navbar from '../components/layout/newNavbar'
import { useProject } from '../contexts/ProjectContext'
import ComponentEditor from '../components/dashboard/projects/componentEditor'
import ProjectList from '../components/dashboard/projects/projectList'
import '../components/dashboard/css/dashboardFrame.scss'

function ProjectView() {
  const location = useLocation();
  const {currentProject, setCurrentProject} = useProject()

  useEffect(() => {
    if (Object.keys(currentProject)?.length === 0) {
        setCurrentProject(location.state)
    }
    console.log(currentProject)
  }, [currentProject])

  return (
  <>
  <section className="mainDashboard Home">
    <div className = "container">
      <Navbar/>
      <div className="dashboardFlex">
        <ProjectList/>
          <div className="dashboardWide">
            <ComponentEditor />
          </div>
      </div>
      </div>
    </section>
  </>
    )
}

export default ProjectView
