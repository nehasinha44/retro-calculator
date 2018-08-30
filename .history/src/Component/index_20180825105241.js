import React, { Component } from 'react';
import '../assert/css/App.css';
import Calculator from './Calcutator';

class App extends Component {
  render() {
    return (
            <React.Fragment>
              <div className="FullApp">
                <div className="header">
                  <h1>Retro Calculator</h1>
                </div>
                <Calculator />
                <div className="footer">
                  <p>Neha Sinha</p>
                </div>
              </div>
            </React.Fragment>
          );
        }
      }
   

export default App;
