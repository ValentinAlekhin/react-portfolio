import { Component, createContext } from 'react'

const projects = [
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
    markdown:
      'https://raw.githubusercontent.com/ValentinAlekhin/sort-files-by-type/master/README.md',
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
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
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
].map((el, i) => ({ ...el, id: i }))

const ProjectsContext = createContext(projects)
ProjectsContext.displayName = 'ProjectsContext'
const { Provider, Consumer } = ProjectsContext

class ProjectsContextProvider extends Component {
  render() {
    return <Provider value={projects}>{this.props.children}</Provider>
  }
}

export {
  ProjectsContextProvider,
  Consumer as ProjectsContextConsumer,
  ProjectsContext,
}
