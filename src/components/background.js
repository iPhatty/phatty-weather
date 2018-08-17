import React, { Component } from 'react';

class Background extends Component {
  backgroundStyle = {
    backgroundImage: `url(${this.props.weatherId})`
  };
  render() {
    return <div className="background-container">{this.props.children}</div>;
  }
}

export default Background;
