import React, { Component } from 'react'
import '../header/header.css'
import { Link } from 'react-scroll'
export class header extends Component {
  render() {
    return (
      <div id='header'>
        <img id = 'icon_image' src='logo_icon_MR.jpeg' alt='icon_pic'/>
        <div id='menu'>
          <Link activeClass = 'active' to='home' spy = {true} smooth = {true} offset = {-900} duration={500} className='menuitem' id= 'home'>HOME</Link>
            {/* <select className='sections' onClick={handleclick}>
             <option value="about">about</option>
             <option>Area Of Interest</option>
             <option value='Education'>EDUCATION</option>
             <option value='INTERNSHIPS'>INTERNSHIPS</option>
             <option value='PROJECTS'>PROJECTS</option>
             <option value='AWARDS/SCHOLARSHIPS'>AWARDS/SCHOLARSHIPS</option>
             <option value='SKILLS'>SKILLS</option>
             <option value='PORS'>POR's</option>
             <option value='Refrences'>REFRENCES</option>
          </select> */}
          <Link activeClass = 'active' to='about_me' spy = {true} smooth = {true} offset = {-60} duration={500} className='menuitem' id= 'about'>ABOUT</Link>
          <Link className='menuitem' id='contact'>CONTACT</Link>
        </div>
      </div>
    )
  }
}

export default header