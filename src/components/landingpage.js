import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profilePic from '../images/image_small.png'

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={profilePic}
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Web Developer</h1>

            <hr/>

          <p>HTML/CSS | SASS | JavaScript | React | NodeJS | Express | MongoDB | WORDPRESS</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/sileshi-chukala-06b930a5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BoKZ2NKRsT9itq7JQklW%2Fnw%3D%3D" rel="noopener noreferrer" target="_blank" style={{cursor: 'pointer'}}>
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>
          
          {/* Github */}
          <a href="https://github.com/Chukala?tab=repositories" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="https://codepen.io/Sileshi/details/dyYaOrW" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>

          {/* Twitter */}
          <a href="https://twitter.com/sileshichukala" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-twitter-square" aria-hidden="true" />
          </a>
         

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
