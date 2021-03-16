import { Component, createContext } from 'react'

const projects = [
  {
    title: 'Nika',
    shortDescription: 'sdfasdfasdf',
    description: '',
    skills: ['JavaScript', 'ReactJS', 'NodeJS', 'Express', 'MongoDB'],
    status: 'in progress',
  },
  {
    title: 'Nika',
    shortDescription: 'sdfasdfasdf',
    description: '',
    skills: ['JavaScript', 'ReactJS', 'NodeJS', 'Express', 'MongoDB'],
    status: 'in progress',
  },
  {
    title: 'Nika',
    shortDescription: 'sdfasdfasdf',
    description: '',
    skills: ['JavaScript', 'ReactJS', 'NodeJS', 'Express', 'MongoDB'],
    status: 'in progress',
  },
  {
    title: 'Nika',
    shortDescription: 'sdfasdfasdf',
    description: '',
    skills: ['JavaScript', 'ReactJS', 'NodeJS', 'Express', 'MongoDB'],
    status: 'in progress',
  },
  {
    title: 'Nika',
    shortDescription: 'sdfasdfasdf',
    description: '',
    skills: ['JavaScript', 'ReactJS', 'NodeJS', 'Express', 'MongoDB'],
    status: 'in progress',
  },
  {
    title: 'Nika',
    shortDescription: 'sdfasdfasdf',
    description: '',
    skills: ['JavaScript', 'ReactJS', 'NodeJS', 'Express', 'MongoDB'],
    status: 'in progress',
  },
  {
    title: 'Nika',
    shortDescription: 'sdfasdfasdf',
    description: '',
    skills: ['JavaScript', 'ReactJS', 'NodeJS', 'Express', 'MongoDB'],
    status: 'in progress',
  },
].map((el, i) => ({ ...el, id: i }))

const ProjectsContext = createContext(projects)
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
