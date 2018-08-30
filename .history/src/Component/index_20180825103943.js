import React, { Component } from 'react';
//import logo from '../assert/image/logo.svg';
import '../assert/css/App.css';
import { Grid,Row,Col,Jumbotron,Modal,Button } from "react-bootstrap"; 

class App extends Component {
  render() {
    return (
              <Modal.Dialog>
              <Modal.Header>
                <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                  <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                  dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                  ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur
                  et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                  auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                  cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                  dui. Donec ullamcorper nulla non metus auctor fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                  dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                  ac consectetur ac, vestibulum at eros.
                </p>
              
              </Modal.Body>

              <Modal.Footer>
                <Button>Close</Button>
                <Button bsStyle="primary">Save changes</Button>
              </Modal.Footer>
            </Modal.Dialog>
          );
        }
      }
   

export default App;
