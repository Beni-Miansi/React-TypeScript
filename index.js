//  Code 01

import React from 'react';

const Greeting = ({ name }) => {
  return <div>Bonjour, {name} !</div>;
};

export default Greeting;

// ---------------------------------------------------------------------------------------

// Code 02

import React, { Component } from 'react';

class Compteur extends Component {
  state = {
    compte: 0,
  };

  increment = () => {
    this.setState({ compte: this.state.compte + 1 });
  };

  render() {
    return (
      <div>
        <p>Compte : {this.state.compte}</p>
        <button onClick={this.increment}>Incrément</button>
      </div>
    );
  }
}

export default Compteur;
