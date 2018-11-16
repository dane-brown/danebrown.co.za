import React, { Component } from 'react';

class Skills extends Component {
  
  render() {
    return (
      <div className="container skills">
      {this.props.skills.map((skill) => {
        let style = {
          width: skill.percentage + '%',
        };
        return (
          <div className="skill-item" key={skill._id}>
            <div className="skill-heading">
              {skill.name}
            </div>
            <div className="skill-details">
              <div className="skill-bar">
                <div className="skill-fill" style={style}></div>
              </div>
              <div className="skill-percentage">{skill.percentage}%</div>
            </div>
          </div>
        );
      })}
    </div>
    );
  }
}

export default Skills;
