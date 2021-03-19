import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import GlobalStyle from './style/globalStyle'

import ThemeState, { ThemeContext } from './context/ThemeState'
import NavState from './context/NavState'

import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Project from './pages/Project/Project'

import Background from './components/Background/Background'
import Header from './components/Header/Header'
import SideNav from './components/SideNav/SideNav'
import Socials from './components/Socials/Socials'

const App = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <ThemeState>
      <NavState>
        <GlobalStyle theme={theme} />
        <Background />
        <Header />

        <SideNav />

        <Socials />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/project/:id" component={Project} />
          <Redirect to={'/'} />
        </Switch>
      </NavState>
    </ThemeState>
  )
}

export default App
