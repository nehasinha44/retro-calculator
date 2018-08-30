import React, { Component } from 'react';
import KeyLayoutConst from '../utiles/keyLayout';

class KeyLayout extends Component {
    render() {
      return (
          <div className="KeyboradBase">
            {KeyLayoutConst.map((key, index) => (
                <div className="KeyPad" key={key}>
                {
                    key.map((key1,index1)=>(
                        console.log(key1)
                )
                )
                }
                </div> 
            ))
            }
          </div>
    )
}
}


export default KeyLayout;
