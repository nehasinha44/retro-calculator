import React, { Component } from 'react';
import KeyLayoutval from '../utiles/keyLayout';
import { keyTypes } from "../utiles/keyTypeCon";
import keys from '../utiles/key';

class KeyLayout extends Component {
    renderKey = (key, cellIndex) => (
        <div className={`cell ${key.extraClass}`} key={cellIndex}>
          {key.label && (
            <button  onClick={() => key.onChange(key)}  children={key.label} />
          )}
        </div>
      );
    keyrenderCell(key,keyindex){
        let keyval = {
            extraClass: "",
            onChange: this.props.onChange
          };
        if (typeof key === "number" || key === "") {
            keyval.type = keyTypes.NUMBER;
            keyval.label = key.toString();
            keyval.value = key.toString();
          } else {
            const [type, value] = key.split(".");
            const foundKey = keys.find(
                keyval => keyval.type === type && keyval.value === value
            );
            keyval.type = type;
            keyval.value = foundKey.value;
            keyval.label = foundKey.label;
            if (foundKey.extraClass) keyval.extraClass = foundKey.extraClass;
          }
          return this.renderKey(keyval, keyindex);
    }
    render() {
      return (
          <div className="KeyboradBase">
            {KeyLayoutval.map((key, index) => (
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
