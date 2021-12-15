import React from 'react'
import Navbar from '../layout/newNavbar'
import DashboardBody from './dashboard'
import './css/dashboardFrame.scss'

function Dashboard() {

    return (
    <>
    <section className="mainDashboard Home">
      <div className = "container">
      <Navbar/>
        <div className="dashboardFlex">
            <div className="dashboardNarrow">
                <div className="dashboardProjects">
                    <div className="dashboardProjectsContainer">
                        <p>Your Projects</p>
                    </div>
                    <div className="hubProjects">

                      <div className="hubAddProjects">
                        <p>Create New Project</p>
                        <button className="plusButton">&#x2B;</button>

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
