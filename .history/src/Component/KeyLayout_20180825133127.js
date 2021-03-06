import React, { Component } from 'react';
import KeyLayout from '../utiles/keyLayout';
import { KeyLayoutConst } from "../utiles/keyTypeCon";
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
        console.log("====",key,"==========");
        if (typeof key === "number" || key === "") {
            key.type = KeyLayoutConst.NUMBER;
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
            {KeyLayout.map((key, index) => (
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
