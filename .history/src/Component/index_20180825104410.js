import React, { Component } from 'react';
//import logo from '../assert/image/logo.svg';
import '../assert/css/App.css';
import { Modal,Button,PageHeader } from "react-bootstrap"; 
import Calculator from './Calcutator';

class App extends Component {
  render() {
    return (
      <React.Fragment>
              <h1>Retro Calculator</h1>
              <Calculator />
            </React.Fragment>
          );
        }
      }
   

export default App;
