import React, { Component } from 'react';

// Sanity Database
import sanity from './sanity';
import sanityClient from './sanity';
import imageUrlBuilder from '@sanity/image-url';

// Styles
import './css/App.css';

// Components
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Scrollbar from 'react-smooth-scrollbar';
import Form from './components/Form';
import Footer from './components/Footer';


// Image Url
const imageBuilder = imageUrlBuilder(sanityClient);
function imageUrlFor(source) {
    return imageBuilder.image(source)
};

// Queries
const skill_query = `*[_type == "skill" && featured == true] {
  _id,
  name,
  percentage,
  slug,
}`
const project_query = `*[_type == "project" && featured == true] {
  _id,
  name,
  slug,
  logo,
  website_image,
  bio,
}`

const experience_query = `*[_type == "experience"] | order(_createdAt) {
  _id,
  name,
  slug,
  description,
  timeline,
  position
}`


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects : [],
      skills: [],
      experience: [],
    }
  }

  componentDidMount() {
    sanityClient
      .fetch(project_query)
      .then(res => {
        this.setState({
          projects: res
        })
      });
    sanityClient
    .fetch(skill_query)
    .then(res => {
      this.setState({
        skills: res
      })
    });
    sanityClient
    .fetch(experience_query)
    .then(res => {
      this.setState({
        experience: res
      })
    });
  }


  render() {
    return (
      <div>
        <Scrollbar damping={0.25} thumbMinSize={20} renderByPixels={true} continuousScrolling={true}>
          {/* Header */}
          <Header />

          {/* Skills */}
          <section id="speak-code" ref="speak_code">
            <div className="speak-line"></div>
            <div className="container">
              <div className="main-headings p-right-250">I SPEAK CODE</div>
            </div>
            <div className="container">
              <div className="main-headings p-right-150">FOR COFFEE</div>
            </div>
            <div className="container speak-bio">
              <p>Duis consectetur, nibh et porttitor blandit, odio purus venenatis augue, ac tempor elit purus eu arcu.</p>  
            </div>
            <Skills skills={this.state.skills}/>
          </section>

          {/* Experience */}
          <section id="journey">
            <div className="journey-line"></div>
            <div className="container">
              <div className="main-headings">
                THE JOURNEY<br/><span>OF A PIXEL</span>
              </div>
            </div>
            <Experience experience={this.state.experience}/>
          </section>

          {/* Lets Talk */}
          <section id="lets-talk">
            <div className="container talk">
              <div className="resume">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non felis et eros commodo viverra. Sed eget rutrum libero. Vestibulum mollis nulla tincidunt sem fringilla, et semper urna efficitur. 
                </p>
                <button className="button">RESUME</button>
              </div>
              <Form/>
            </div>
          </section>

          {/* Footer */}
          <Footer/>

        </Scrollbar>
      </div>
    );
  }
}

export default Home;
