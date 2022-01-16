import React, { useContext, useState, useEffect } from 'react'

// This file allows use to have access our props/states anywhere in our app
const ProjectContext = React.createContext()

export function useProject() {
  return useContext(ProjectContext)
}

export function ProjectProvider({ children }) {
  const [currentProjectComponent, setCurrentProjectComponent] = useState({})
  const [currentProject, setCurrentProject] = useState({})

  const projectContextData = {
    currentProjectComponent,
    setCurrentProjectComponent,
    currentProject,
    setCurrentProject
  }

  return (
    <ProjectContext.Provider value={projectContextData}>
      {children}
    </ProjectContext.Provider>
  )
}
