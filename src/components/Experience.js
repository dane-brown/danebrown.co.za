import React, { Component } from 'react';

class Experience extends Component {
  
  render() {
    return (
      <div className="container experience">
      {this.props.experience.map((exp, index) => {
        let style = {
          transitionDelay: index * 0.35 + "s",
        };
        return (
          <div key={exp._id} style={style} className={"experience-item " + (exp.position === 'right' ? 'right' : '') + (this.props.animate ? " animate" : "")}>
            <div className="experience-timeline">{exp.timeline}</div>
            <p>{exp.description}</p>
            <div className="experience-dot"></div>
          </div>
        )
      })}
      </div>
    );
  }
}

export default Experience;
