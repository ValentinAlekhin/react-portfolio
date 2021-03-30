import { createContext, useState, useEffect } from 'react'

import data from './data.json'

const NODE_ENV = process.env.NODE_ENV

const initProjects = data.map((el, i) => {
  let result = { ...el, id: i }

  if (el.images) {
    const images = el.images.map(img => ({
      ...img,
      placeholderAlt: `${img.alt} placeholder`,
    }))

    result.images = images
  }

  return result
})

export const ProjectsContext = createContext({
  projects: initProjects,
  fetchMarkdown: async () => {},
  getProjectById: () => {},
})
ProjectsContext.displayName = 'ProjectsContext'

const ProjectsState = ({ children }) => {
  const [projects, setProjects] = useState(initProjects)

  const fetchMarkdown = async () => {
    if (NODE_ENV === 'development') return

    const result = [...projects]

    for (const proj of projects) {
      const { id, markdown } = proj
      if (markdown) {
        const response = await fetch(markdown.url)
        const data = await response.text()
        result[id].markdown.body = data
      }
    }

    setProjects(result)
  }

  const getProjectById = id => projects.find(projItem => projItem.id === id)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => fetchMarkdown(), [])

  return (
    <ProjectsContext.Provider value={{ projects, getProjectById }}>
      {children}
    </ProjectsContext.Provider>
  )
}

export default ProjectsState
