import React, { Component } from 'react';
import Typist from 'react-typist';

const words = '<hello>';
const closewords = '/>';

class Header extends Component {

  render() {
    return (
      <section className="header">
        <div className="headerLogo">Dane Brown</div>
        <Typist className="headerHello" avgTypingDelay={300} delay={150} cursor={{show:false,}}>
          {words}
          <Typist.Backspace count={1} delay={600} />
          <Typist.Delay ms={300} />
          {closewords}
        </Typist>
      </section>
    );
  }
}

export default Header;
