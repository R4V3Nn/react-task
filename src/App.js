import React, { Component } from 'react';
import './App.css';

import Name from './Name';

class App extends Component {

  constructor() {
    super();

    this.state = {
      name: '',
      show: true
    };

    this.onEnterName = (e) => {
      const name = e.target.value;
      this.setState({ name });
    };

    this.showGreeting = () => {
      this.setState(
        {show: !this.state.show}
      )
    }

  }



  render() {
    return (
      <div className="App">
        <div className="form-group">
          <label htmlFor="name">
          What's her name?
          </label>
          <input  type="text"
                  className="form-control"
                  id="name" 
                  placeholder="Enter Name"
                  onChange={this.onEnterName}
          />
        
        </div>
         <div className="form-group form-check">
          <input type="checkbox" 
                 className="form-check-input" 
                 id="checkGreeting"
                 checked
                 onChange={this.showGreeting}
                 />
          <label className="form-check-label" htmlFor="checkGreeting">
          Show Greeting
          </label>
        </div>
        <Name name={this.state.name}
              show={this.state.show}
        />
      </div>
    );
  }
}

export default App;
