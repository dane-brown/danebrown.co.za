import React, { Component } from 'react';
import Typist from 'react-typist';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const words = '<hello>';
const closewords = '/>';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate : false,
    };
    this.gotoExperience = this.gotoExperience.bind(this);
    this.gotoSkills = this.gotoSkills.bind(this);
    this.gotoContact = this.gotoContact.bind(this);
    this.gotoProjects = this.gotoProjects.bind(this);
  }
  gotoProjects() {
    scroller.scrollTo('projects', {
      delay: 0,
      duration: 800,
      smooth: 'easeInOutQuart'
    });
  }
  gotoExperience() {
    scroller.scrollTo('journey', {
      delay: 0,
      duration: 800,
      smooth: 'easeInOutQuart'
    });
  }
  gotoSkills() {
    scroller.scrollTo('speak-code', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }
  gotoContact() {
    scroller.scrollTo('lets-talk', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        animate: true,
      })
    }, 3500)
  }

  render() {
    return (
      <section className="header">
        <div className="headerContent">
          <a href="/" className="headerLogo">Dane Brown</a>
          <ul className="headerNavigation">
            <a href="#" onClick={this.gotoSkills}>
              <li>Skills</li>
            </a>
            <a href="#" onClick={this.gotoExperience}>
              <li>Experience</li>
            </a>
            <a href="#" onClick={this.gotoProjects}>
              <li>Projects</li>
            </a>
            <a href="#" onClick={this.gotoContact}>
              <li>Contact</li>
            </a>
          </ul>
        </div>
        <div className="container header-container">
          <div className={"header-line " + (this.state.animate ? "animate" : "")}></div>
          <Typist className="headerHello" avgTypingDelay={300} delay={150} cursor={{show:false,}}>
            {words}
            <Typist.Backspace count={1} delay={600} />
            <Typist.Delay ms={300} />
            {closewords}
          </Typist>
        </div>
      </section>
    );
  }
}

export default Header;
