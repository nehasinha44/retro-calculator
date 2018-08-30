import React, { Component } from 'react';
import '../assert/css/Calculator.css';
import CalculatorHead from '../Component/BodyHead';

class App extends Component {
  render() {
    return (
                <React.Fragment>
                    <div className="bodyDiv">
                    <CalculatorHead />
                    </div>
                </React.Fragment>
          );
        }
      }
   

export default App;
