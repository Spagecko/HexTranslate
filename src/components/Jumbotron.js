import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Container } from 'react-bootstrap';


const jumbotron = () => 
{ 
    return (<div>
      <Jumbotron fluid>
  <Container>
    <h1>Need a Number Translated?!</h1>
    <p>
      Enter your values now!
    </p>
  </Container>
</Jumbotron>
      
    </div>)
}


export default jumbotron; 