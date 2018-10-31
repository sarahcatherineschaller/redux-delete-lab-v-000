import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <span>{props.bandName}</span>
      </div>
    );
  }
};

export default Band;
