import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

import profilePic from '../images/image_small.png';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Sileshi Chukala</h2>
            <img
              src={profilePic}
              alt="avatar"
              style={{height: '150px', borderRadius: 50}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Hi,my name is Sileshi Chukala.
I'm a highly motivated web developer living in Stockholm, Sweden. I'm currently working as an Intern in a company which is located in Stockholm. I will finish my Intership and graduate in July 3, 2020 and currently looking for an entry level/Junior web developer position.</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (+46) 073-2116107
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    sileshic@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    chukala1
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
