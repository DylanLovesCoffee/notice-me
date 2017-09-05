import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      notes: []
    };
  }

  renderLander() {
    return (
        <div className="lander">
          <h1>Notice Me</h1>
          <p>Take notes about how much senpai is ignoring you.</p>
        </div>
    );
  }

  renderNotes() {
    <div className="notes">
      <h1>Test</h1>
    </div>
  }


  render() {
    return (
      <div className="Home">
        {this.props.isAuthenticated ? this.renderNotes() : this.renderLander()}
      </div>
    );
  }
}

export default Home;
