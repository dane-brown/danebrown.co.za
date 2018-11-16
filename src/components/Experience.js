import React, { Component } from 'react';

class Experience extends Component {
  
  render() {
    return (
      <div className="container experience">
      {this.props.experience.map((exp) => {
        return (
          <div key={exp._id} className={"experience-item " + (exp.position === 'right' ? 'right' : '')}>
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
