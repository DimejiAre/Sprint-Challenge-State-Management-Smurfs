import React, { Component } from "react";
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
// import "./App.css";
import '../scss/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS VILLAGE!</h1>
        <div className='forms'>
          <SmurfForm />
        </div>
        <Smurfs />
      </div>
    );
  }
}

export default App;
