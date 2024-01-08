import React, { Component } from 'react'
import '../area_of_interest/area_of_interest.css'
import Github_logo from '../../images_sections/github_logo.png'
import Leetcode_logo from '../../images_sections/leetcode_logo.png'
import Gfg_logo from '../../images_sections/gfg_logo.png'
import Codeforces_logo from '../../images_sections/codeforces_logo.png'
import InterviewBit_logo from '../../images_sections/interviewbit_logo.webp'
import Notes_img from '../../images_sections/notes_img.png'
import Back_img from '../../images_sections/back_icon.png'
import Next_img from '../../images_sections/front_icon.png'
import { Link } from 'react-scroll'
export class area_of_interest extends Component {
  render() {
    return (
      <div id='area'>
        <Link activeClass = 'active' to='area' spy = {true} smooth = {true} offset = {-100} duration={500} className='menuitem'>
           <h2 id='heading'>My Area of Interest</h2>
        </Link>
        <div id='sections'>
          <div id='section' className='frontend'>
            <h3 id='section_heading'>Frontend <br/> Development</h3>
             <div id='section_content' className='frontend_content'>
              <h3 id='section_content_heading' className='frontend_content_heading'>Where code meets creativity</h3>
              <p id='section_content_para' className='frontend_content_para'> Check out my github link </p>
              <a href='https://github.com/Rohini1918'>
                <img id='section_content_img' className='frontend_content_img-1' src={Github_logo} alt='github_logo'/>
              </a>
             </div>
          </div>
          <div id='section' className='comp_p'>
          <h3 id='section_heading'>Competetive <br/>Programming</h3>
             <div id='section_content' className='comp_p_content'>
              <h3 id='section_content_heading' className='comp_p_content_heading'>Make it work, make it right, make it fast</h3>
              <p id='section_content_para' className='comp_p_content_para'> Check out my leetcode, geeksforgeeks,codeforces and interviewBit profiles </p>
              <a href='https://leetcode.com/ro_1918'>
                <img id='section_content_img' className='comp_p_content_img-1' src={Leetcode_logo} alt='leetcode_logo'/>
              </a>
              <a href='https://auth.geeksforgeeks.org/user/malipatelr'>
                <img id='section_content_img' className='comp_p_content_img-2'src = {Gfg_logo} alt='gfg_logo'/>
              </a>
              <a href='https://codeforces.com/profile/ro_1918'>
                <img id='section_content_img' className='comp_p_content_img-3' src={Codeforces_logo} alt='codeforces_logo'/>
              </a>
              <a href='https://www.interviewbit.com/profile/rohinimalipatel_a3cd86c62e28'>
                <img id='section_content_img' className='comp_p_content_img-4' src={InterviewBit_logo} alt='interviewbit_logo'/>
              </a>
              </div>
          </div>
          <div id='section' className='dsa'>
          <h3 id='section_heading'>Data Structures 
             <br/>and 
             <br/>Algorithms
             </h3>
             <div id='section_content' className='dsa_content'>
              <h3 id='section_content_heading' className='dsa_content_heading'>More data beats clever algorithms, but better data beats more data.</h3>
              <p id='section_content_para' className='dsa_content_para'> Check out some of my favourite algorithms</p>
              <a href='https://github.com/Rohini1918'>
                <img id='section_content_img' src={Notes_img} alt='notes_img'
                />
              </a>
              </div>
          </div>
        </div>
        <div id='down_content_area'>
            <Link activeClass = 'active' to='about_me' spy = {true} smooth = {true} offset = {-70} duration={500} className='link_area_back'>
              <button id='link_area_back'>
               <img id = "down_back_icon_area" src= {Back_img}/>
               <h2 id ="back_link_area1">Back</h2>
              </button>
            </Link>
          <Link activeClass = 'active' to='education' spy = {true} smooth = {true} offset = {-100} duration={500} className='link_area_next'>
             <button id='link_area_next'>
               <h2 id ="next_link_area1">Next</h2>
               <img id = "down_next_icon_area" src= {Next_img}/>
              </button>
            </Link>
        </div>
      </div>
    )
  }
}

export default area_of_interest