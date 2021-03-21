import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import loadable from '@loadable/component'

import GlobalStyle from './style/globalStyle'

import ThemeState, { ThemeContext } from './context/ThemeState'
import NavState from './context/NavState'

import Home from './pages/Home/Home'

import Background from './components/Background/Background'
import Header from './components/Header/Header'
import Socials from './components/Socials/Socials'

const Projects = loadable(() =>
  import(/* webpackPrefetch: true */ './pages/Projects/Projects')
)
const Project = loadable(() =>
  import(/* webpackPrefetch: true */ './pages/Project/Project')
)
const SideNav = loadable(() => import('./components/SideNav/SideNav'))

const App = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <ThemeState>
      <NavState>
        <GlobalStyle theme={theme} />
        <Background />
        <Header />

        <SideNav />

        <Socials onApp boxSize="12rem" iconSize="1.8rem" />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/project/:id" component={Project} />
          <Route component={Home} />
        </Switch>
      </NavState>
    </ThemeState>
  )
}

export default App
