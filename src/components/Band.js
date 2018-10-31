import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <span>{props.text}</span>
      </div>
    );
  }
};

export default Band;
