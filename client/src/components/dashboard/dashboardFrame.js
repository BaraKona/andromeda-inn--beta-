import React from 'react'
import Navbar from '../layout/newNavbar'
import DashboardBody from './dashboard'
import ProjectList from './projects/projectList'
import './css/dashboardFrame.scss'

function Dashboard() {

  return (
  <>
  <section className="mainDashboard Home">
    <div className = "container">
      <Navbar/>
      <div className="dashboardFlex">
      <ProjectList/>
          <div className="dashboardWide">
            <DashboardBody/>
          </div>
      </div>
      </div>
    </section>
  </>
    )
}

export default Dashboard
