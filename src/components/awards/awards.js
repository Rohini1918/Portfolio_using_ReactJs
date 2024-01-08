import React, { Component } from 'react'
import '../awards/awards.css'
import Horiba_img from '../../images_sections/horiba_img.png'
import IIT_logo from '../../images_sections/iitr_logo.png'
import FFE_logo from '../../images_sections/ffe_logo.png'
import TS_eamcet_img from '../../images_sections/TS_emacet_img.jpg'
import Jee_mains_img from '../../images_sections/Jee_mains_img.png'
import Back_img from '../../images_sections/back_icon.png'
import Next_img from '../../images_sections/front_icon.png'
import { Link } from 'react-scroll'
export class awards extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       x1 : 0,
       x2 : 0,
       x3 : 0,
       x4 : 0,
       x5 : 0,
    };
  }
  render() {
    return (
      <section id='awards'>
        <Link activeClass = 'active' to='awards' spy = {true} smooth = {true} offset = {-100} duration={500} className='menuitem'>
            <h3 id='awards_heading'>Awards and Scholarships</h3>
        </Link> 
        <div id='award_section' onClick={()=>{if(this.state.x1 === 1)
                                                {
                                                    this.setState({x1:0})
                                                }
                                            if(this.state.x2 === 1)
                                            {
                                                this.setState({x2 : 0})
                                            }
                                            if(this.state.x3 === 1)
                                            {
                                                this.setState({x3 : 0})
                                            }
                                            if(this.state.x4 === 1)
                                            {
                                                this.setState({x4 : 0})
                                            }
                                            if(this.state.x5 === 1)
                                            {
                                                this.setState({x5 : 0})
                                            }
                                        }}>
           <div id='award'>
               <span className="fa fa-star checked" id='star-1' onClick={()=>this.setState({x1:1})}>
                  <h4 id='star_content'>1</h4>
                  <img id='star_content_img' src = {Horiba_img}/>
               </span>
               <span id={this.state.x1 === 0 ? "star-2-hidden" : "star-2-show"}>
                  <p id='shown_star_content'>HORIBA Talent Hunt Scholarship(Academic Year 2022-2023)<br/>instituted by HORIBA India Pvt. Ltd.
                     <br/>
                     <a href='https://www.horiba.com/int/'>
                      <button  id='readMore_btn'>
                        <p id='read-more-award'>Read More 
                           <i className='icon-arrow-right-circle'></i>
                        </p>
                      </button>
                      </a>
                  </p>
               </span>
           </div>
           <div id='award'>
               <span className="fa fa-star checked" id='star-1' onClick={()=>this.setState({x1:1})}>
                  <h4 id='star_content'>2</h4>
                  <img id='star_content_img' src = {IIT_logo}/>
               </span>
               <span className="fa fa-star checked" id={this.state.x2 === 0 ? "star-2-hidden" : "star-2-show"}>
               <p id='shown_star_content'>Merit-cum-scholarship by IITR</p>
               </span>
           </div>
           <div id='award'>
               <span className="fa fa-star checked" id='star-1' onClick={()=>this.setState({x1:1})}>
                  <h4 id='star_content'>3</h4>
                  <img id='star_content_img' src = {FFE_logo}/>
               </span>
               <span className="fa fa-star checked" id={this.state.x3 === 0 ? "star-2-hidden" : "star-2-show"}>
               <p id='shown_star_content'>Sholarship By Future for Excellence</p>
               </span>
           </div>
           <div id='award'>
               <span className="fa fa-star checked" id='star-1' onClick={()=>this.setState({x1:1})}>
                  <h4 id='star_content'>4</h4>
                  <img id='star_content_img' src = {TS_eamcet_img}/>
               </span>
               <span className="fa fa-star checked" id={this.state.x4 === 0 ? "star-2-hidden" : "star-2-show"}>
                <p id='shown_star_content'>Ranked 1257 in State level Entrance test(TS EAMCET)</p>
               </span>
           </div>
           <div id='award'>
               <span className="fa fa-star checked" id='star-1' onClick={()=>this.setState({x1:1})}>
                  <h4 id='star_content'>5</h4>
                  <img id='star_content_img' src = {Jee_mains_img}/>
               </span>
               <span className="fa fa-star checked" id={this.state.x5 === 0 ? "star-2-hidden" : "star-2-show"}>
               <p id='shown_star_content'>Secured 13384 in JEE-MAIN(2020)</p>
               </span>
           </div>
        </div>
        <div id='down_content_awards'>
            <Link activeClass = 'active' to='my_internship' spy = {true} smooth = {true} offset = {-70} duration={500} className='link_awards_back'>
              <button id='link_awards_back'>
               <img id = "down_back_icon_awards" src= {Back_img}/>
               <h2 id ="back_link_awards1">Back</h2>
              </button>
            </Link>
          <Link activeClass = 'active' to='references' spy = {true} smooth = {true} offset = {-75} duration={500} className='link_awards_next'>
             <button id='link_awards_next'>
               <h2 id ="next_link_awards1">Next</h2>
               <img id = "down_next_icon_awards" src= {Next_img}/>
              </button>
            </Link>
        </div>
      </section>
    )
  }
}

export default awards