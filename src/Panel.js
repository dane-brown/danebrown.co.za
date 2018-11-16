import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';


class Panel extends Component {
  
  render() {
    return (
      <div> 
        <AppBar color='primary'>Home View
        <Link to='/panel/todo'>Todo</Link>
        </AppBar>
      </div>
    );
  }
}

export default Panel;
