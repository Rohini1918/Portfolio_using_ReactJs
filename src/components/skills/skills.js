import React, { Component } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../skills/skills.css'
import Skill_img from '../../images_sections/skill_img (2).png'
import { Link } from 'react-scroll'
import Back_img from '../../images_sections/back_icon.png'
import Next_img from '../../images_sections/front_icon.png'
export class skills extends Component {
  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    return (
      <section id='skills'>
          <Link activeClass = 'active' to='skills' spy = {true} smooth = {true} offset = {-54} duration={500} className='menuitem'>
            <h4 id='skills_heading'>Skills</h4>
          </Link>
          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider" id='slider'>
            <div id='skill'>
              <img src={Skill_img} alt='skill_img'/>
              <p id='percentage'>95%</p>
              <p id='skill_name'>C++</p>
            </div>
            <div id='skill'>
              <img src={Skill_img} alt='skill_img'/>
              <p id='percentage'>90%</p>
              <p id='skill_name'>javaScript</p>
            </div>
            <div id='skill'>
              <img src={Skill_img} alt='skill_img'/>
              <p id='percentage'>80%</p>
              <p id='skill_name'>React</p>
            </div>
            <div id='skill'>
              <img src={Skill_img} alt='skill_img'/>
              <p id='percentage'>60%</p>
              <p id='skill_name'>Python</p>
            </div>
          </Carousel>
          <div id='down_content_skills'>
            <Link activeClass = 'active' to='area' spy = {true} smooth = {true} offset = {-70} duration={500} className='link_skills_back'>
              <button id='link_skills_back'>
               <img id = "down_back_icon_skills" src= {Back_img}/>
               <h2 id ="back_link_skills1">Back</h2>
              </button>
            </Link>
          <Link activeClass = 'active' to='awards' spy = {true} smooth = {true} offset = {-75} duration={500} className='link_skills_next'>
             <button id='link_skills_next'>
               <h2 id ="next_link_skills1">Next</h2>
               <img id = "down_next_icon_skills" src= {Next_img}/>
              </button>
            </Link>
        </div>
      </section>
    )
  }
}

export default skills