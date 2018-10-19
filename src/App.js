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
const project_query = `*[_type == "author"] {
  _id,
  name,
  slug,
  logo,
  website_image,
  bio,
}[0...5]
`


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects : []
    }
  }

  componentDidMount() {
    sanityClient
      .fetch(project_query)
      .then(res => {
        this.setState({
          projects: res
        })
      })
  }


  render() {
    return (
      <div>
        <Header projects={this.state.projects}></Header>
      </div>
    );
  }
}

export default App;
