import React, { Component } from 'react';
import '../assert/css/Calculator.css';
import CalculatorHead from '../Component/BodyHead';
import KeyLayout from '../Component/KeyLayout';
import process from '../utiles/processors/index';
import keys from  '../utiles/key';

export const initialState = {
    open: false,
    currentEntry: 0,
    nextEntry: null,
    operation: null,
    float: false,
    memory: null,
    automaticTurnOff: "",
    lastAction: null,
    lastCalculation: {},
  };
  const automaticTurnOffTime = 600000;
class App extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
      }
      handleClick = (key) => {
        if (this.state.automaticTurnOff) {
          clearTimeout(this.state.automaticTurnOff);
        }
        this.setState({
          lastAction: null,
          lastCalculation: {},
          ...process(this.state, key),
          automaticTurnOff: setTimeout(() => {
            const turnOffKey = keys.find(k => k.value === "off");
            this.setState(process(this.state, turnOffKey));
          }, automaticTurnOffTime)
        });
      }
  render() {
    return (
                <React.Fragment>
                    <div className="bodyDiv">
                    <CalculatorHead />
                    <div className="screen">
                        <div className="screenInside">
                        {this.state.open ? this.state.nextEntry || this.state.currentEntry : ''}
                        </div>
                        {!!this.state.memory &&
                            <span className="memorySign">
                            M
                            <div>&#x029EB;</div>
                            E
                            </span>
                        }
                    </div>
                    <div className="keyboard">
                        <h2 className="modelNumber">SL-300SV</h2>
                        <KeyLayout  onChange={this.handleClick}/>
                        </div>
                    </div>
                </React.Fragment>
          );
        }
      }
   

export default App;
