import React, { useContext } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import loadable from '@loadable/component'
import { AnimatePresence } from 'framer-motion'

import GlobalStyle from './style/globalStyle'

import ProjectsState from './context/ProjectsState'
import ThemeState, { ThemeContext } from './context/ThemeState'
import NavState from './context/NavState'

import Home from './pages/Home/Home'

import Preloader from './components/Preloader/Preloader'
import Background from './components/Background/Background'
import Header from './components/Header/Header'
import Socials from './components/Socials/Socials'

const Projects = loadable(() =>
  import(/* webpackPrefetch: true */ './pages/Projects/Projects')
)
const Project = loadable(() =>
  import(/* webpackPrefetch: true */ './pages/Project/Project')
)

const App = () => {
  const location = useLocation()
  const { theme } = useContext(ThemeContext)

  return (
    <ProjectsState>
      <ThemeState>
        <NavState>
          <GlobalStyle theme={theme} />

          <Preloader />

          <Background />

          <Header />

          <Socials onApp boxSize="12rem" iconSize="1.8rem" />

          <AnimatePresence initial={false} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Home} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/project/:id" component={Project} />
              <Route component={Home} />
            </Switch>
          </AnimatePresence>
        </NavState>
      </ThemeState>
    </ProjectsState>
  )
}

export default App
