import React, { Component } from 'react';
import '../assert/css/Calculator.css';
import CalculatorHead from '../Component/BodyHead';

class App extends Component {
  render() {
    return (
                <React.Fragment>
                    <div className="bodyDiv">
                    <CalculatorHead />
                    <div className="screen">
                        <div className="screenInside">
                        Hello
                        </div>
                    </div>
                    <div className="keyboard">
                        <h2 className="modelNumber">SL-300SV</h2>
                        </div>
                    </div>
                </React.Fragment>
          );
        }
      }
   

export default App;
