import React, { Component } from 'react'
import './App.css'
import Header from './components/header/header'
import Content from './components/content/content'
import Area from './components/area_of_interest/area_of_interest'
import About from './components/about/about'
import Awards from './components/awards/awards'
import Education from './components/education/education'
import Internship from './components/internships/internship'
import References from './components/refrences/refrences'
import Skills from './components/skills/skills'
export class App extends Component {
  render() {
    return (
      <div id ='app'>
         <Header/>         
         <Content/>
         <About/>
         <Area/>
         <Education/>
         <Internship/>
         <Awards/>
         <Skills/>
         <References/>
      </div>
    )
  }
}

export default App