import React, { Component} from 'react'
import { Link } from 'react-scroll'
import '../internships/internship.css'
import Solar_secure from '../../images_sections/solar_secure.png'
import Exposys from '../../images_sections/expoysys_datalabs.png'
import Back_img from '../../images_sections/back_icon.png'
import Next_img from '../../images_sections/front_icon.png'
export class internship extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          count1: 0,
          count2: 0,
        };
      }
      
  render() {
    return (
      <section id='my_internship'>
         <Link activeClass = 'active' to='my_internship' spy = {true} smooth = {true} offset = {-54} duration={500} className='menuitem'>
            <h2 id='internship_main_heading'> 
            My Internships 
            </h2>
        </Link>
        <div id='internships'>
            <div id='internship'>
                <a href='https://www.exposysdata.com/'>
                  <button>
                    <img src={Exposys} alt='exposys' id='internship_img'/>
                  </button>
                </a>
                <p id='internship_heading'>Web Developer <br/> at <br/> Exposys Data Labs </p>
                <Link onClick={()=>this.setState({count1:1})}>
                   <button id='readMore_btn'>
                      <p id='read-more'>
                        Read more
                      </p>
                      <i className='icon-arrow-right-circle'></i>
                   </button>
                </Link>
                <div className= {this.state.count1 === 1 ? "active_div" : "passive_div"}>
                    <div id='active_div_content'>
                    <Link id='close_link' onClick={()=>this.setState({count1:0})}>
                       <i className='icon-close'></i>
                    </Link>
                    <h4 id='active_heading'>Web Developer at exposysy data Labs</h4>
                    <h6 id='active_company'>About Company</h6>
                    <p id='about_company'>Exposys Data Labs aims to Solve real world business problems like Automation, Big Data and data Science.
                     our core team of experts in various technologies help businesses to identify issues,oppurtunities and prototype solutions using 
                     trending technologies like AI, ML, Deep Learning and Data Science. we follow a human-focussed and not technology driven approach 
                     to achieve success in our clients endeavours. 
                    </p>
                    <h6 id='proj_desc_heading'>Project Description</h6>
                    <p id='proj_desc'>
                    Mass mail dispatcher is a web based used to categorize valid and invalid emails. It is used to send bulk emails at a click.I
                    had the opportunity to work on a project where I developed an e-commerce web application using the MERN stack.
                    Additionally, I focused on creating a user-friendly interface to ensure a positive experience for all users
                    </p>
                    </div>
                </div>
            </div>
            <div id='internship'>
                <a href='https://solarsecure.in/'>
                  <button>
                    <img src={Solar_secure} alt='solar' id='internship_img'/>
                  </button>
                </a>
                <p id='internship_heading'>Full stack Web Developer <br/> at <br/> Solar Secure Solutions </p>
                <Link  onClick={()=>this.setState({count2:1})}>
                   <button id='readMore_btn'>
                      <p id='read-more'>Read more</p>
                      <i className='icon-arrow-right-circle'></i>
                   </button>
                </Link >
                <div className= {this.state.count2 === 1 ? "active_div" : "passive_div"}>
                <div id='active_div_content'>
                    <Link id='close_link' onClick={()=>this.setState({count2:0})}>
                       <i className='icon-close'></i>
                    </Link>
                    <h4 id='active_heading'>Full Stack Web Developer at Solar seure solutions</h4>
                    <h6 id='active_company'>About Company</h6>
                    <p id='about_company'>
                    Solar Secure solutions is an firm working on various environmental issues such as solar energy services, water conservation, 
                    renewable energy projects, IT solutions and Artificial Intelligence projects, eco-tourism Camps. We are conducting various 
                    workshops, Certified IndustrialSolar Internships for final year engineering students and training programs
                    </p>
                    <h6 id='proj_desc_heading'>Project Description</h6>
                    <p id='proj_desc'>
                    In this internship I had develop webpages regarding services, payment gateways, PayPal. It had started with HTML, CSS,
                    Java Script, Nodejs. The key learnings and takeaways that I have gained from this internship are Guidance, Technologies
                    and softwares, working on projects Industry oriented.
                    </p>
                </div>
                </div>
            </div>
        </div>
        <div id='down_content_internship'>
            <Link activeClass = 'active' to='area' spy = {true} smooth = {true} offset = {-70} duration={500} className='link_internship_back'>
              <button id='link_internship_back'>
               <img id = "down_back_icon_internship" src= {Back_img}/>
               <h2 id ="back_link_internship1">Back</h2>
              </button>
            </Link>
          <Link activeClass = 'active' to='awards' spy = {true} smooth = {true} offset = {-75} duration={500} className='link_internship_next'>
             <button id='link_internship_next'>
               <h2 id ="next_link_internship1">Next</h2>
               <img id = "down_next_icon_internship" src= {Next_img}/>
              </button>
            </Link>
        </div>
      </section>
    )
  }
}

export default internship