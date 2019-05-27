import React, { Component } from "react";

// Sanity Database
import sanityClient from "./sanity";

// Styles
import "./css/App.css";

// Components
import Waypoint from "react-waypoint";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Scrollbar from "react-smooth-scrollbar";
import Form from "./components/Form";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

// Queries
const skill_query = `*[_type == "skill" && featured == true] {
  _id,
  name,
  percentage,
  slug,
}`;

const project_all = `*[_type == "project"] | order(order) {
  _id,
  name,
  order,
  slug,
  url,
  first_image,
  second_image,
  bio
}`;

const project_main = `*[_type == "project"] | order(order) {
  _id,
  name,
  order,
  slug,
  url,
  first_image,
  second_image,
  bio
}[0...6]`;

const experience_query = `*[_type == "experience"] | order(_createdAt) {
  _id,
  name,
  slug,
  description,
  timeline,
  position
}`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      projectsAll: [],
      skills: [],
      experience: []
    };
    this.handleAnimation = this.handleAnimation.bind(this);
    this.handleExp = this.handleExp.bind(this);
  }

  handleExp() {
    this.setState({
      animateExp: true
    });
  }

  handleAnimation() {
    this.setState({
      animateSkills: true
    });
  }

  componentDidMount() {
    sanityClient.fetch(project_main).then(res => {
      this.setState({
        projects: res
      });
    });
    sanityClient.fetch(project_all).then(res => {
      this.setState({
        projectsAll: res
      });
    });
    sanityClient.fetch(skill_query).then(res => {
      this.setState({
        skills: res
      });
    });
    sanityClient.fetch(experience_query).then(res => {
      this.setState({
        experience: res
      });
    });
  }

  render() {
    return (
      <div>
        <Scrollbar
          damping={0.25}
          thumbMinSize={20}
          renderByPixels={true}
          continuousScrolling={true}
        >
          {/* Header */}
          <Header />

          {/* Skills */}
          <section id="speak-code">
            <div className="speak-line" />
            <div className="container">
              <div className="main-headings p-right-250">I SPEAK CODE</div>
            </div>
            <div className="container">
              <div className="main-headings p-right-150">FOR COFFEE</div>
            </div>
            <div className="container speak-bio">
              <p className={this.state.animateSkills ? "animate" : ""}>
                Over the years I have learnt a few things here and there, take a
                look!
              </p>
            </div>
            <Waypoint onEnter={this.handleAnimation} />
            <Skills
              skills={this.state.skills}
              animate={this.state.animateSkills}
            />
          </section>

          {/* Experience */}
          <section id="journey">
            <div
              className={
                "journey-line " + (this.state.animateExp ? "animate" : "")
              }
            />
            <div className="container">
              <div className="main-headings">
                THE JOURNEY
                <br />
                <span>OF A PIXEL</span>
              </div>
            </div>
            <Waypoint onEnter={this.handleExp} />
            <Experience
              animate={this.state.animateExp}
              experience={this.state.experience}
            />
          </section>

          {/* Projects */}
          <section id="projects">
            <Projects
              projects={this.state.projects}
              projectsAll={this.state.projectsAll}
            />
          </section>

          {/* Lets Talk */}
          <section id="lets-talk">
            <div className="container talk">
              <div className="resume">
                <p>
                  I'm a hard working person who is enthusiastic about new
                  technologies and ways to do things. I love working with
                  Javascript and Python mainly. My main focus is to always be
                  learning something new and bettering my skills as a
                  programmer.
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={process.env.PUBLIC_URL + "/cv.pdf"}
                  className="button"
                >
                  RESUME
                </a>
              </div>
              <Form />
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </Scrollbar>
      </div>
    );
  }
}

export default Home;
