import React, { Component } from 'react';

// Sanity Database
import sanity from './sanity';
import sanityClient from './sanity';
import imageUrlBuilder from '@sanity/image-url';

// Styles
import './css/App.css';

// Components
import Header from './components/Header';

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
}[0..100]
`
const project_query = `*[_type == "project" && featured == true] {
  _id,
  name,
  slug,
  logo,
  website_image,
  bio,
}[0..100]
`


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects : [],
      skills: [],
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
    }) 
  }


  render() {
    return (
      <div>
        <Header projects={this.state.projects} />
        {this.state.projects.map((project) => {
          return <div key={project._id}>{project.name}</div>
        })}
        {this.state.skills.map((skill) => {
          return <div key={skill._id}>{skill.name} - {skill.percentage}%</div>
        })}
      </div>
    );
  }
}

export default App;
