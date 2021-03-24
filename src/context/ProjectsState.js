import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

import original from '../data/original.png'
import placeholder from '../data/placeholder.jpg'
import orig2 from '../data/original2.jpg'
import placeholder2 from '../data/placehilser2.jpg'

const NODE_ENV = process.env.NODE_ENV

const initProjects = [
  {
    title: 'Ника Дмитриева new',
    shortDescription: 'sdfasdfasdf',
    description:
      'Описание как описание что ни есть описание того чо нет в общем это есть  описание длинное такое специально для тестов верстки короче Описание как описание что ни есть описание того чо нет в общем это есть  описание длинное такое специально для тестов верстки короче Описание как описание что ни есть описание того чо нет в общем это есть  описание длинное такое специально для тестов верстки короче Описание как описание что ни есть описание того чо нет в общем это есть  описание длинное такое специально для тестов верстки короче',
    skills: [
      'JavaScript',
      'ReactJS',
      'NodeJS',
      'Express',
      'MongoDB',
      'JavaScript',
      'ReactJS',
      'NodeJS',
      'Express',
      'MongoDB',
    ],
    status: 'in progress',
    links: [
      { title: 'GitHub', href: 'github.com' },
      { title: 'GitHub', href: 'github.com' },
      { title: 'GitHub', href: 'github.com' },
      { title: 'GitHub', href: 'github.com' },
    ],
    markdown: {
      url:
        'https://raw.githubusercontent.com/ValentinAlekhin/sort-files-by-type/master/README.md',
      body: null,
    },
  },
  {
    title: 'Ника Дмитриева new',
    shortDescription: 'sdfasdfasdf',
    description:
      'Описание как описание что ни есть описание того чо нет в общем это есть  описание длинное такое специально для тестов верстки короче Описание как описание что ни есть описание того чо нет в общем это есть  описание длинное такое специально для тестов верстки короче Описание как описание что ни есть описание того чо нет в общем это есть  описание длинное такое специально для тестов верстки короче Описание как описание что ни есть описание того чо нет в общем это есть  описание длинное такое специально для тестов верстки короче',
    skills: ['JavaScript', 'ReactJS', 'NodeJS', 'Express', 'MongoDB'],
    status: 'in progress',
    links: [
      { title: 'GitHub', href: 'github.com' },
      { title: 'GitHub', href: 'github.com' },
      { title: 'GitHub', href: 'github.com' },
      { title: 'GitHub', href: 'github.com' },
    ],
    images: [
      {
        original,
        placeholder,
      },
      {
        original: orig2,
        placeholder: placeholder2,
      },
      {
        original,
        placeholder,
      },
      {
        original: orig2,
        placeholder: placeholder2,
      },
      {
        original,
        placeholder,
      },
      {
        original: orig2,
        placeholder: placeholder2,
      },
    ],
  },
  {
    title: 'Ника Дмитриева new',
    shortDescription: 'sdfasdfasdf',
    description:
      'Описание как описание что ни есть описание того чо нет в общем это есть  описание длинное такое специально для тестов верстки короче Описание как описание что ни есть описание того чо нет в общем это есть  описание длинное такое специально для тестов верстки короче Описание как описание что ни есть описание того чо нет в общем это есть  описание длинное такое специально для тестов верстки короче Описание как описание что ни есть описание того чо нет в общем это есть  описание длинное такое специально для тестов верстки короче',
    skills: ['JavaScript', 'ReactJS', 'NodeJS', 'Express', 'MongoDB'],
    status: 'in progress',
    links: [{ title: 'GitHub', href: 'github.com' }],
  },
  {
    title: 'Ника Дмитриева new',
    shortDescription: 'sdfasdfasdf',
    description:
      'Описание как описание что ни есть описание того чо нет в общем это есть  описание длинное такое специально для тестов верстки короче Описание как описание что ни есть описание того чо нет в общем это есть  описание длинное такое специально для тестов верстки короче Описание как описание что ни есть описание того чо нет в общем это есть  описание длинное такое специально для тестов верстки короче Описание как описание что ни есть описание того чо нет в общем это есть  описание длинное такое специально для тестов верстки короче',
    skills: ['JavaScript', 'ReactJS', 'NodeJS', 'Express', 'MongoDB'],
    status: 'in progress',
    links: [{ title: 'GitHub', href: 'github.com' }],
  },
  {
    title: 'Ника Дмитриева new',
    shortDescription: 'sdfasdfasdf',
    description:
      'Описание как описание что ни есть описание того чо нет в общем это есть  описание длинное такое специально для тестов верстки короче Описание как описание что ни есть описание того чо нет в общем это есть  описание длинное такое специально для тестов верстки короче Описание как описание что ни есть описание того чо нет в общем это есть  описание длинное такое специально для тестов верстки короче Описание как описание что ни есть описание того чо нет в общем это есть  описание длинное такое специально для тестов верстки короче',
    skills: ['JavaScript', 'ReactJS', 'NodeJS', 'Express', 'MongoDB'],
    status: 'in progress',
    links: [{ title: 'GitHub', href: 'github.com' }],
  },
  {
    title: 'Ника Дмитриева new',
    shortDescription: 'sdfasdfasdf',
    description:
      'Описание как описание что ни есть описание того чо нет в общем это есть  описание длинное такое специально для тестов верстки короче Описание как описание что ни есть описание того чо нет в общем это есть  описание длинное такое специально для тестов верстки короче Описание как описание что ни есть описание того чо нет в общем это есть  описание длинное такое специально для тестов верстки короче Описание как описание что ни есть описание того чо нет в общем это есть  описание длинное такое специально для тестов верстки короче',
    skills: ['JavaScript', 'ReactJS', 'NodeJS', 'Express', 'MongoDB'],
    status: 'in progress',
    links: [{ title: 'GitHub', href: 'github.com' }],
  },
  {
    title: 'Ника Дмитриева new',
    shortDescription: 'sdfasdfasdf',
    description:
      'Описание как описание что ни есть описание того чо нет в общем это есть  описание длинное такое специально для тестов верстки короче Описание как описание что ни есть описание того чо нет в общем это есть  описание длинное такое специально для тестов верстки короче Описание как описание что ни есть описание того чо нет в общем это есть  описание длинное такое специально для тестов верстки короче Описание как описание что ни есть описание того чо нет в общем это есть  описание длинное такое специально для тестов верстки короче',
    skills: ['JavaScript', 'ReactJS', 'NodeJS', 'Express', 'MongoDB'],
    status: 'in progress',
    links: [{ title: 'GitHub', href: 'github.com' }],
  },
].map((el, i) => {
  const result = { ...el, id: i }

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
        const { data } = await axios.get(markdown.url)
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
