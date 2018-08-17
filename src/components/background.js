import React, { Component } from 'react';

class Background extends Component {
  render() {
    let backgroundStyle;
    if (this.props.weatherId) {
      backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/public/img/${
          this.props.weatherId.toString()[0]
        }.jpg)`
      };
    }
    return (
      <div style={backgroundStyle} className="background-container">
        {this.props.children}
      </div>
    );
  }
}

export default Background;
