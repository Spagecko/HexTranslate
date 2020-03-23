
import React from "react";
import { Navbar } from "react-bootstrap";
import {Aux} from './hoc/Aux';

const layout = (props) => 
{ 
    <Aux>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">/>{' '}
      Number Translate! 
    </Navbar.Brand>
  </Navbar>
  {props.children}
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">/>{' '}
      By Spagecko! 
    </Navbar.Brand>
  </Navbar>
  </Aux>
}

export default layout;