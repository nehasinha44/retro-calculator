import React, { Component } from 'react';
import KeyLayoutConst from '../utiles/keyLayout';

class KeyLayout extends Component {
    render() {
        console.log(KeyLayoutConst);
      return (
          <div className="KeyboradBase">
            {KeyLayoutConst.map((key, index) => (
                <div className="KeyPad" key={key}>
                </div> 
            ))
            }
          </div>
    )
}
}


export default KeyLayout;
