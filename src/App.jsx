import React, { useContext, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import lazy from 'react-lazy-with-preload'

import GlobalStyle from './style/globalStyle'

import ThemeState, { ThemeContext } from './context/ThemeState'
import NavState from './context/NavState'

import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Project from './pages/Project/Project'

import Background from './components/Background/Background'
import Header from './components/Header/Header'
import Socials from './components/Socials/Socials'

const SideNav = lazy(() => import('./components/SideNav/SideNav'))

const App = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <ThemeState>
      <NavState>
        <GlobalStyle theme={theme} />
        <Background />
        <Header />

        <Suspense fallback={<div />}>
          <SideNav />
        </Suspense>

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
