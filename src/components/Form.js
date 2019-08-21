import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameToggled: false,
      emailToggled: false,
      contactToggled: false,
      messageToggled: false,
    };
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleContact = this.handleContact.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  };

  handleName() {
    this.setState ({
      nameToggled: true,
    });
  }
  handleEmail() {
    this.setState ({
      emailToggled: true,
    });
  };
  handleContact() {
    this.setState ({
      contactToggled: true,
    });
  }
  handleMessage() {
    this.setState ({
      messageToggled: true,
    });
  }
  render() {
    return (
      <form ref="form" action="https://formspree.io/danebrwn47@gmail.com" method="POST">
        <div className="main-headings">LET'S TALK</div>

        <div className="input-holder" onClick={this.handleName} onChange={this.handleName}>
          <div className={"placeholder " + (this.state.nameToggled ? "animate" : "") }>Name</div>
          <input type="text" name="name" id="form-name" required/>
        </div>
        <div className="input-holder" onClick={this.handleEmail} onChange={this.handleEmail}>
          <div className={"placeholder " + (this.state.emailToggled ? "animate" : "") }>Email Address</div>
          <input type="email" name="email" id="form-email" required/>
        </div>
        <div className="input-holder" onClick={this.handleContact} onChange={this.handleContact}>
          <div className={"placeholder " + (this.state.contactToggled ? "animate" : "") }>Contact Number</div>
          <input type="tel" name="contact" id="form-contact" required/>
        </div>
        <div className="input-holder" onClick={this.handleMessage} onChange={this.handleMessage}>
          <div className={"placeholder " + (this.state.messageToggled ? "animate" : "") }>Message</div>
          <textarea className="special" name="message" id="form-message" cols="30" rows="10"></textarea>
        </div>
        <input className="form-submit" type="submit" value="SPAM MEE"/>
      </form>
    );
  }
}

export default Form;
