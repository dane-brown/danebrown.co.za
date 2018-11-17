import React, { Component } from 'react';
import Slider from 'react-slick';
import imageUrlFor from '../imageUrlFor';

class ProjectSlider extends Component {
  
  componentDidMount() {
    this.slider.slickGoTo(0)
  }
  render() {
    const settings = {
      dots: true,
      arrows: false,
      speed: 500,
      autoplay: false,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    }
    return (
      <Slider ref={slider => (this.slider = slider)} {...settings}>
        {this.props.projects.map((project) => {
          let first_image = {
            backgroundImage: "url(" + imageUrlFor(project.first_image).url() + ")"
          }
          let second_image = {
            backgroundImage: "url(" + imageUrlFor(project.second_image).url() + ")"
          }
          return (
            <a href={project.url} target="_blank" className="slider-item" key={project._id}>
              <div className="first-image" style={first_image}></div>
              <div className="second-image" style={second_image}></div>
            </a>
          )
        })}
      </Slider>
    );
  }
}

export default ProjectSlider;
