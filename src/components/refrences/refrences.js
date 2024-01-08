import React, { Component } from 'react'
import '../refrences/refrences.css'
import { Link } from 'react-scroll'
import Prof_Anupam from '../../images_sections/prof_anupam.jpg'
import Prof_Sudipta from '../../images_sections/prof_sudipta.jpg'
import Back_img from '../../images_sections/back_icon.png'
import Next_img from '../../images_sections/front_icon.png'
export class refrences extends Component {
  render() {
    return (
      <section id='references'>
        <Link activeClass = 'active' to='references' spy = {true} smooth = {true} offset = {-54} duration={500} className='menuitem'>
            <h2 id='Refrences_main_heading'> 
            References 
            </h2>
        </Link>
        <div id='reference_section'>
        <div id='reference'>
            <img id= 'prof_img' src={Prof_Anupam} alt='prof_img'/>
            <h4 id='prof_name'>Anupam Chakrabati</h4>
            <p id='prof_desc'>Professor at IIT Roorkee</p>
            <p id='prof_mailId'>anupam.Chakrabati@ce.iitr.ac.in</p>
            <a href='https://civil.iitr.ac.in/CE?Uid=achakfce'>
                <button id='knowMore_btn'>
                    <p id='know-more'>
                        To know more
                    </p>
                    <i className='icon-info'></i>
                </button>
            </a>
        </div>
        <div id='reference'>
            <img id= 'prof_img' src={Prof_Sudipta} alt='prof_img'/>
            <h4 id='prof_name'>Sudipta Sarkar</h4>
            <p id='prof_desc'>Professor at IIT Roorkee</p>
            <p id='prof_mailId'>sudipta.sarkar@ce.iitr.ac.in</p>
            <a href='https://civil.iitr.ac.in/CE?Uid=sarkarfce'>
                <button id='knowMore_btn'>
                    <p id='know-more'>
                        To know more
                    </p>
                    <i className='icon-info'></i>
                </button>
            </a>
        </div>
        </div>
        <div id='down_content_references'>
            <Link activeClass = 'active' to='area' spy = {true} smooth = {true} offset = {-70} duration={500} className='link_references_back'>
              <button id='link_references_back'>
               <img id = "down_back_icon_references" src= {Back_img}/>
               <h2 id ="back_link_references1">Back</h2>
              </button>
            </Link>
          <Link activeClass = 'active' to='awards' spy = {true} smooth = {true} offset = {-75} duration={500} className='link_references_next'>
             <button id='link_references_next'>
               <h2 id ="next_link_references1">Next</h2>
               <img id = "down_next_icon_references" src= {Next_img}/>
              </button>
            </Link>
        </div>
      </section>
    )
  }
}

export default refrences