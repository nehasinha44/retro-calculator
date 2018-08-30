import React, { Component } from 'react';
import KeyLayoutConst from '../utiles/keyLayout';

class KeyLayout extends Component {
    renderKey = (key, cellIndex) => (
        <div className={`cell ${key.extraClass}`} key={cellIndex}>
          {key.label && (
            <button onClick={() => key.onChange(key)} children={key.label} />
          )}
        </div>
      );
    renderCell = (cell, cellIndex) => {
        let key = {
          extraClass: "",
          onChange: this.props.onChange
        };
    
        if (typeof cell === "number" || cell === "") {
          key.type = KeyLayoutConst.NUMBER;
          key.label = cell.toString();
          key.value = cell.toString();
        } else {
          const [type, value] = cell.split(".");
          const foundKey = keys.find(
            key => key.type === type && key.value === value
          );
          key.type = type;
          key.value = foundKey.value;
          key.label = foundKey.label;
          if (foundKey.extraClass) key.extraClass = foundKey.extraClass;
        }
    
        return this.renderKey(key, cellIndex);
      };
    render() {
      return (
          <div className="KeyboradBase">
            {KeyLayoutConst.map((key, index) => (
                <div className="KeyPad" key={key}>
                {key.map((cell, cellIndex) => this.renderCell(cell, cellIndex))}
                </div> 
            ))
            }
          </div>
    )
}
}


export default KeyLayout;
