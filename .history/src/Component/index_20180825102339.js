import React, { Component } from 'react';
import logo from '../assert/image/logo.svg';
import '../assert/css/App.css';
import {Grid,Row,Col} from "react-bootstrap"; 

class App extends Component {
  render() {
    return (
            <Grid>
              <Row className="show-grid">
              <Col md={6} mdPush={6}>
                <code>Retro Calculator</code>
              </Col>
              <Col md={6} mdPull={6}>
                <code>{'<Col md={6} mdPull={6} />'}</code>
              </Col>
            </Row>
              
              </Grid>
          );
        }
      }
   

export default App;
