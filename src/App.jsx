import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import './App.scss'

import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Project from './pages/Project/Project'

import Header from './components/Header/Header'
import Socials from './components/Socials/Socials'

const App = () => (
  <div>
    <Header />

    <Socials />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/project/:id" component={Project} />
      <Redirect to={'/'} />
    </Switch>
  </div>
)

export default App
