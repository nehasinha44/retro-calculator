import React, { Component } from 'react';
import '../assert/css/App.css';
import Calculator from './Calcutator';

class App extends Component {
  render() {
    return (
            <React.Fragment>
              <div className="FullApp">
                <h1>Retro Calculator</h1>
                <Calculator />
              </div>
            </React.Fragment>
          );
        }
      }
   

export default App;
