import React, { Component } from 'react';
//import logo from '../assert/image/logo.svg';
import '../assert/css/App.css';
import { Grid,Row,Col,Jumbotron,Modal,Button } from "react-bootstrap"; 

class App extends Component {
  render() {
    return (
          <Jumbotron>
            <h1>Retro Calculator</h1>
            <Grid>
              <Row className="show-grid">
              <Col md={4} mdPush={3}>
                <code>Retro Calculator</code>
              </Col>
              <Col md={4} mdPull={3}>
              <Modal.Dialog>
              <Modal.Header>
                <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>

              <Modal.Body>One fine body...</Modal.Body>

              <Modal.Footer>
                <Button>Close</Button>
                <Button bsStyle="primary">Save changes</Button>
              </Modal.Footer>
            </Modal.Dialog>
               
              </Col>
              <Col md={4} mdPull={3}>
                <code>{'<Col md={6} mdPull={6} />'}</code>
              </Col>
            </Row>
            </Grid>
            </Jumbotron>
          );
        }
      }
   

export default App;
