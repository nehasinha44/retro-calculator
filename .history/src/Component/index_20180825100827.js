import React, { Component } from 'react';
import logo from '../assert/image/logo.svg';
import '../assert/App.css';

class App extends Component {
  render() {
    return (
            <div className="App">
              <header className="App-header">
                <h1 className="App-title">Retro Calculator</h1>
              </header>
              <div className="App-intro">
                {/* <Calculator /> */}
              </div>
              <div className="Footer-text">
              Developed by <strong>Neha Sinha</strong>.
              </div>
            </div>
          );
        }
      }
   

export default App;
