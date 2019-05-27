import React, { Component } from "react";
import Github from "./icons/Github";
import Twitter from "./icons/Twitter";
import Linkedin from "./icons/Linkedin";
import Instagram from "./icons/Instagram";
import Facebook from "./icons/Facebook";
import {
  // eslint-disable-next-line
  Link,
  // eslint-disable-next-line
  DirectLink,
  // eslint-disable-next-line
  Element,
  // eslint-disable-next-line
  Events,
  // eslint-disable-next-line
  animateScroll as scroll,
  // eslint-disable-next-line
  scrollSpy,
  scroller
} from "react-scroll";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.gotoExperience = this.gotoExperience.bind(this);
    this.gotoSkills = this.gotoSkills.bind(this);
    this.gotoContact = this.gotoContact.bind(this);
    this.gotoProjects = this.gotoProjects.bind(this);
  }

  gotoProjects() {
    scroller.scrollTo("projects", {
      delay: 0,
      duration: 800,
      smooth: "easeInOutQuart"
    });
  }
  gotoExperience() {
    scroller.scrollTo("journey", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }
  gotoSkills() {
    scroller.scrollTo("speak-code", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }
  gotoContact() {
    scroller.scrollTo("lets-talk", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }

  render() {
    return (
      <section id="footer">
        <div className="container footer">
          <div className="socials">
            <Github />
            <Twitter />
            <Linkedin />
            <Instagram />
            <Facebook />
          </div>
          <div className="footer-links">
            <a href="#1" onClick={this.gotoSkills}>
              Skills
            </a>
            <a href="#1" onClick={this.gotoExperience}>
              Experience
            </a>
            <a href="#1" onClick={this.gotoProjects}>
              Projects
            </a>
            <a href="#1" onClick={this.gotoContact}>
              Contact
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
