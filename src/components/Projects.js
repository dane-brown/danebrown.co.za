import React, { Component } from "react";
import imageUrlFor from "../imageUrlFor";
import ProjectSlider from "./ProjectSlider";
import { animateScroll as scroller } from "react-scroll";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMain: true,
      animate: false
    };
    this.toggleView = this.toggleView.bind(this);
  }

  toggleView() {
    setTimeout(() => {
      this.state.isMain
        ? this.setState({
            isMain: false
          })
        : this.setState({
            isMain: true
          });
    }, 1500);
    this.setState({
      animate: true
    });
    scroller.scrollTo("projects", {
      duration: 650,
      delay: 0,
      offset: -100,
      smooth: "easeInOut"
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="main-headings">SOME WORK</div>
        </div>

        {/* Top 6 View */}
        <div
          className={
            "container projects " +
            (this.state.isMain ? "show" : "hide") +
            (this.state.animate ? " animate" : "")
          }
        >
          {this.props.projects.map(project => {
            let styles = {
              order: project.order,
              backgroundImage:
                "url(" + imageUrlFor(project.first_image).url() + ")"
            };
            let second_image = {
              backgroundImage:
                "url(" + imageUrlFor(project.second_image).url() + ")"
            };
            return (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={"project-item project-" + project.order}
                key={project._id}
                style={styles}
              >
                <div className="second-image" style={second_image} />
              </a>
            );
          })}
          <div className="project-item view-all">
            <div onClick={this.toggleView} className="button">
              VIEW ALL
            </div>
          </div>
        </div>

        {/* All View */}
        <div
          className={"projects-all " + (!this.state.isMain ? "show" : "hide")}
        >
          <ProjectSlider projects={this.props.projectsAll} />
        </div>
      </div>
    );
  }
}

export default Projects;
