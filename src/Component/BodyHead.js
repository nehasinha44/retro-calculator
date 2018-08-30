import React, { PureComponent } from 'react';
import Logo from '../assert/image/casio_logo.svg';

class CalculatorHead extends PureComponent {
  render() {
    return (
      <header className="CalculatorHead">
        <img src={Logo} alt="Casio Logo" />
        <div className="Solar">
          <div className="SolarRow">
            <div className="section"></div>
            <div className="section"></div>
            <div className="section"></div>
            <div className="section"></div>
          </div>
          <div className="solotext">TWO WAY POWER</div>
        </div>
      </header>
    );
  }
}

export default CalculatorHead;
