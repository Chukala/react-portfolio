import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

import project_2 from '../images/dreamShop_1.png';
import project_3 from '../images/screencapture_11.png';
import project_4 from '../images/product_landing.png';
import project_5 from '../images/portfolio.png';
import project_6 from '../images/stadium_project.png';

/** React projects */
import project_7 from '../images/fragbite.png';
import project_8 from '../images/pl_project.png';
import project_9 from '../images/react-portfolio.png';
import project_10 from '../images/randomQuote.png';
/** wordpress projects */
import project_1 from '../images/grocery-store.png';
import project_11 from '../images/tourguide.png';
import project_12 from '../images/googleMerchandise.png';
import project_13 from '../images/prestashop.png';



class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: '0.5em auto'}}>
            <CardTitle style={{color: '#fff', height: '200px', background: `url(${project_7}) top / cover`}} ></CardTitle>
            <CardText>
              This project is a react project developed for fragbite.se during my Intership period. It's a fullstack platform developed by ReactJs | Styledcomponent | NodeJs | Express | Mysql | Sequlize.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: '0.5em auto'}}>
          <CardTitle style={{color: '#fff', height: '200px', background: `url(${project_8}) top / cover`}} ></CardTitle>
            <CardText>
             PL is an ecommerce site to sell pure leather products. It's developed by ReactJs | Materialized UI | NodeJs | ExpressJS | MongoDB | Stripe.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/Chukala/ethioLeather/tree/master"rel="noopener noreferrer" target="_blank" style={{cursor: 'pointer', textDecoration: 'none'}}>GitHub</a></Button> 
              <Button colored><a href="https://chukala.github.io/ethioLeather/"rel="noopener noreferrer" target="_blank" style={{cursor: 'pointer', textDecoration: 'none'}}>Live Demo</a></Button> 
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: '0.5em auto'}}>
          <CardTitle style={{color: '#fff', height: '200px', background: `url(${project_9}) top / cover`}} ></CardTitle>
            <CardText>
              Myportfolio project is developed by ReactJs | Materialized UI | SASS.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/Chukala/react-portfolio"rel="noopener noreferrer" target="_blank" style={{cursor: 'pointer', textDecoration: 'none'}}>GitHub</a></Button> 
              <Button colored><a href="https://chukala.github.io/react-portfolio"rel="noopener noreferrer" target="_blank" style={{cursor: 'pointer', textDecoration: 'none'}}>Live Demo</a></Button> 
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 4 */}
          <Card shadow={5} style={{minWidth: '450', margin: '0.5em auto'}}>
          <CardTitle style={{color: '#fff', height: '200px', background: `url(${project_10}) center / cover`}} ></CardTitle>
            <CardText>
               Random Quote Machine is a project of freecode camp Front End Libraries projects.It generate automatic quote and author and we can twitte on twitter.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://codepen.io/Sileshi/pen/dyYaOrW"rel="noopener noreferrer" target="_blank" style={{cursor: 'pointer', textDecoration: 'none'}}>CodePen</a></Button> 
              <Button colored><a href="https://codepen.io/Sileshi/full/dyYaOrW"rel="noopener noreferrer" target="_blank" style={{cursor: 'pointer', textDecoration: 'none'}}>Live Demo</a></Button> 
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: '0.5em auto'}}>
        <CardTitle style={{color: '#000', height: '190px', background: `url(${project_2}) top/cover`}}></CardTitle>
          <CardText>
            DreamShop project is a dynamic and responsive ecommerce site Developed by EJS/CSS3/NodeJs/MongoDB/Express/JS for the purpose of scool project.
          </CardText>
          <CardActions border>
          <Button colored><a href="https://github.com/Chukala/dreamshop"rel="noopener noreferrer" target="_blank" style={{cursor: 'pointer', textDecoration: 'none'}}>GitHub</a></Button> 
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: '0.5em auto'}}>
        <CardTitle style={{color: '#000', height: '190px', background: `url(${project_6}) top/cover`}}></CardTitle>
          <CardText>
            This project is a clone of Stadium.se website Developed on the purpose of scool project. It's a static reponsive website develobed by HTML5/CSS3/JS/jQuery.
          </CardText>
          <CardActions border>
          <Button colored><a href="https://github.com/Chukala/stadium_web_project"rel="noopener noreferrer" target="_blank" style={{cursor: 'pointer', textDecoration: 'none'}}>GitHub</a></Button> 
          <Button colored><a href="https://chukala.github.io/stadium_web_project/"rel="noopener noreferrer" target="_blank" style={{cursor: 'pointer', textDecoration: 'none'}}>Live Demo</a></Button> 
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: '0.5em auto'}}>
        <CardTitle style={{color: '#000', height: '190px', background: `url(${project_3}) top/cover`}}></CardTitle>
          <CardText>
            Computer maintainance and Network installation websites developed by HTML5/CSS3/JS
          </CardText>
          <CardActions border>
          <Button colored><a href="https://github.com/Chukala/computer_maintainance"rel="noopener noreferrer" target="_blank" style={{cursor: 'pointer', textDecoration: 'none'}}>GitHub</a></Button>
          <Button colored><a href="https://chukala.github.io/computer_maintainance/"rel="noopener noreferrer" target="_blank" style={{cursor: 'pointer', textDecoration: 'none'}}>Live Demo</a></Button>
            
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        {/* Project 4 */}
        <Card shadow={5} style={{minWidth: '450', margin: '0.5em auto'}}>
        <CardTitle style={{color: '#000', height: '190px', background: `url(${project_5}) top/cover`}}></CardTitle>
          <CardText>
            This is my other portfolio website sample developem by HTML5/CSS3/JS/jQuery.
          </CardText>
          <CardActions border>
            <Button colored><a href="https://github.com/Chukala/SileshiChukala"rel="noopener noreferrer" target="_blank" style={{cursor: 'pointer', textDecoration: 'none'}}>GitHub</a></Button>
            <Button colored><a href="https://chukala.github.io/SileshiChukala"rel="noopener noreferrer" target="_blank" style={{cursor: 'pointer', textDecoration: 'none'}}>Live Demo</a></Button>
            
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        {/* Project 5 */}
        <Card shadow={5} style={{minWidth: '450', margin: '0.5em auto'}}>
        <CardTitle style={{color: '#000', height: '190px', background: `url(${project_4}) top/cover`}}></CardTitle>
          <CardText>
            This is one of the sample project of freecode camp responsive web design certification.
          </CardText>
          <CardActions border>
            <Button colored><a href="https://codepen.io/Sileshi/pen/yQOydp"rel="noopener noreferrer" target="_blank" style={{cursor: 'pointer', textDecoration: 'none'}}>CodePen</a></Button>
            <Button colored><a href="https://codepen.io/Sileshi/pen/yQOydp"rel="noopener noreferrer" target="_blank" style={{cursor: 'pointer', textDecoration: 'none'}}>Live Demo</a></Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div> 
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '500', margin: '0.5em auto'}}>
        <CardTitle style={{color: '#000', height: '200px', background: `url(${project_1}) top/cover`}}></CardTitle>
          <CardText>
            Grocery store is a WooCommerce Multivendor Marketplace wordpress sites with different plugins.
          </CardText>
          <CardActions border>
            <Button colored>wordpress</Button>
            <Button colored>WooCommerce</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '500', margin: '0.5em auto'}}>
        <CardTitle style={{color: '#000', height: '200px', background: `url(${project_12}) top/cover`}}></CardTitle>
          <CardText>
          GoogleMerchandise is a clone of googleMerchandise sites developed with wordpress and different plugins for the purpose of education.
          </CardText>
          <CardActions border>
            <Button colored>wordpress</Button>
            <Button colored>WooCommerce</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '500', margin: '0.5em auto'}}>
        <CardTitle style={{color: '#000', height: '200px', background: `url(${project_11}) top/cover`}}></CardTitle>
          <CardText>
            Tourguide is a WooCommerce Multivendor Marketplace wordpress sites for booking accomodation,tour and services developed by wordpress and different plugins.
          </CardText>
          <CardActions border>
            <Button colored>wordpress</Button>
            <Button colored>WooCommerce</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        {/* Project 4 */}
        <Card shadow={5} style={{minWidth: '500', margin: '0.5em auto'}}>
        <CardTitle style={{color: '#000', height: '200px', background: `url(${project_13}) top/cover`}}></CardTitle>
          <CardText>
            Matvaror is a grocery store website which is developed by Prestashop and different plugins.
          </CardText>
          <CardActions border>
            <Button colored>Prestashop</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
      )
    } 
  }

  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Ecommerce</Tab>
          <Tab>CMS</Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}

export default Projects;
