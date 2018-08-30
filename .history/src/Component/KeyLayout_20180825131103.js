import React, { Component } from 'react';
import KeyLayoutConst from '../utiles/keyLayout';

class KeyLayout extends Component {
    render() {
      return (
          <div className="KeyboradBase">
            {KeyLayoutConst.map((key, index) => (
                <div className="KeyPad" key={key}>
                {console.log(key)}
                {/* {key.map((cell, cellIndex) => this.renderCell(cell, cellIndex))} */}
                </div> 
            ))
            }
          </div>
    )
}
}


export default KeyLayout;
