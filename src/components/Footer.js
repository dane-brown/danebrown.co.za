import React, { Component } from 'react';
import Github from './icons/Github';
import Twitter from './icons/Twitter';
import Linkedin from './icons/Linkedin';
import Instagram from './icons/Instagram';
import Facebook from './icons/Facebook';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class Footer extends Component {
  constructor(props) {
    super(props);
    this.gotoProfile = this.gotoProfile.bind(this);
    this.gotoExperience = this.gotoExperience.bind(this);
    this.gotoSkills = this.gotoSkills.bind(this);
    this.gotoContact = this.gotoContact.bind(this);
  }

  gotoProfile() {
    scroller.scrollTo('speak-code', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }
  gotoExperience() {
    scroller.scrollTo('journey', {
      duration: 800,
      delay: 0,
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

  render() {
    return (
      <section id="footer">
        <div className="container footer">
          <div className="socials">
            <Github/>
            <Twitter/>
            <Linkedin/>
            <Instagram/>
            <Facebook/>
          </div>
          <div className="footer-links">
            <a href="#1" onClick={this.gotoProfile}>
              Profile
            </a>
            <a href="#" onClick={this.gotoSkills}>
            Skills
            </a>
            <a href="#" onClick={this.gotoExperience}>
              Experience
            </a>
            <a href="#">
              Projects
            </a>
            <a href="#" onClick={this.gotoContact}>
              Contact
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
