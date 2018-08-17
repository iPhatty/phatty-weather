import React, { Component } from 'react';

class Background extends Component {
  render() {
    return <div className="background">{this.props.children}</div>;
  }
}

export default Background;
