import React, { Component } from 'react'
import { Link } from 'react-scroll'
import '../education/education.css'
import Back_img from '../../images_sections/back_icon.png'
import Next_img from '../../images_sections/front_icon.png'
export class id  extends Component {
  render() {
    return (
      <section id='education'>
        <Link activeClass = 'active' to='education' spy = {true} smooth = {true} offset = {-100} duration={500} className='menuitem'><h1 id = 'education_main_heading'>Education</h1></Link>
        <div id='boxes'>
          <div id='box'>
            <i className='icon-graduation'></i>
            <text id='education_year'>Year : 2023</text>
            <p id='education_heading'>B.Tech. 3rd Year</p>
            <p id='education_institute'>Indian Institute of Technology, Roorkee</p>
            <p id='education_grade'>CGPA : 7.133</p>
          </div>
          <div id='box'>
            <i className='icon-graduation'></i>
            <text id='education_year'>Year : 2020</text>
            <p id='education_heading'>Intermediate (Class XII)</p>
            <p id='education_institute'>Narayana Junior College</p>
            <p id='education_grade'>Percentage : 97.8%</p>
          </div>
          <div id='box'>
            <i className='icon-graduation'></i>
            <text id='education_year'>Year : 2018</text>
            <p id='education_heading'>Matriculate (Class X)</p>
            <p id='education_institute'>Narayana Concept School</p>
            <p id='education_grade'>Grade : 9.8</p>
          </div>
        </div>
        <div id='down_content_education'>
            <Link activeClass = 'active' to='area' spy = {true} smooth = {true} offset = {-70} duration={500} className='link_education_back'>
              <button id='link_education_back'>
               <img id = "down_back_icon_education" src= {Back_img}/>
               <h2 id ="back_link_education1">Back</h2>
              </button>
            </Link>
          <Link activeClass = 'active' to='my_internship' spy = {true} smooth = {true} offset = {-75} duration={500} className='link_education_next'>
             <button id='link_education_next'>
               <h2 id ="next_link_education1">Next</h2>
               <img id = "down_next_icon_education" src= {Next_img}/>
              </button>
            </Link>
        </div>
      </section>
    )
  }
}

export default id 