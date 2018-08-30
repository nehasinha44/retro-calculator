import React, { Component } from 'react';
import KeyLayoutConst from '../utiles/keyLayout';
import keys from './key';

class KeyLayout extends Component {
    renderKey = (key, cellIndex) => (
        <div className={`cell ${key.extraClass}`} key={cellIndex}>
          {key.label && (
            <button  children={key.label} />
          )}
        </div>
      );
    keyrenderCell(key,keyindex){
        console.log("====",key.length,"==========");
        if (typeof key === "number" || key.length=== 0) {
            key.type = KeyLayoutConst.NUMBER;
            console.log(key.type);
            key.label = key.toString();
            key.value = key.toString();
          } else {
            const [type, value] = key.split(".");
            const foundKey = keys.find(
              key => key.type === type && key.value === value
            );
            key.type = type;
            key.value = foundKey.value;
            key.label = foundKey.label;
            if (foundKey.extraClass) key.extraClass = foundKey.extraClass;
          }
      
          return this.renderKey(key, keyindex);
    }
    render() {
      return (
          <div className="KeyboradBase">
            {KeyLayoutConst.map((key, index) => (
                <div className="KeyPad" key={key}>
                {
                    key.map((key,keyindex)=>this.keyrenderCell(key, keyindex)
                
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
