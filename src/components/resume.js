import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import profilePic from '../images/image_small.png'


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={profilePic}
                alt="avatar"
                style={{height: '100px', borderRadius: 50}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Sileshi Chukala</h2>
            <h4 style={{color: 'grey'}}>Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p> Hi,my name is Sileshi Chukala.
I'm a highly motivated web developer living in Stockholm, Sweden. I'm currently working as an Intern in a company which is located in Stockholm. I will finish my Intership and graduate in July 3, 2020 and currently looking for an entry level/Junior web developer position.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Stockholm, 141 50 HUDDINGE</p>
            <h5>Phone</h5>
            <p>(+46) 732116107</p>
            <h5>Email</h5>
            <p>sileshic@gmail.com</p>
            <h5>Web</h5>
            <a href="https://chukala.github.io/SileshiChukala/" rel="noopener noreferrer" target="_blank" style={{cursor: 'pointer', textDecoration: 'none'}}>
              <p style={{cursor: 'pointer'}}>https://chukala.github.io/SileshiChukala/</p>
            </a>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2018}
              endYear={2020}
              schoolName="Changemaker Education"
              schoolDescription="Webbutvecklare E-handel in Stockholm,Sweden"
               />

               <Education
                 startYear={2012}
                 endYear={2016}
                 schoolName="Midsweden University"
                 schoolDescription="Computer engineering in Sundsvall,Sweden"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2020}
              endYear={2020}
              jobName="Web Developer"
              jobDescription="Trainee as a webdeveloper in fragbite.se"
              />

              <Experience
                startYear={2008}
                endYear={2010}
                jobName="Network Administrator"
                jobDescription="Network admin in AAICTDA in Addis Abeba,Ethiopia"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Javascript"
                progress={60}
                />
                <Skills
                  skill="HTML5/CSS3/SASS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={40}
                      />
                    <Skills
                      skill="Wordpress"
                      progress={50}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
