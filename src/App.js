import React from 'react';
import Jumbotron from './components/Jumbotron';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bulma-components';
import HexiCalc from './containers/HexiCalc';
import Footer from './components/Footer';
import {Navbar} from 'react-bootstrap';
import {Container} from 'react-bootstrap';

const padStyle  = { 
  paddingBottom : "150px"
}
const containerStyle =  { 
  width: "100%", 
  maxWidth : "1000px",
}
function App() {
  return (


    <div className = "App">
      <div></div>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">{' '}
      Number Translate! 
    </Navbar.Brand>
  </Navbar>
    
      <Jumbotron/>
      <Container style =  {containerStyle}>
      <HexiCalc/>
      </Container>
      <div style = {padStyle}></div>
      <Footer/>
    
    
    </div>
  );
}

export default App;
