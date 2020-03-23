
import React from "react";

import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import {DropdownButton} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Row} from "react-bootstrap";
const Style  = { 


    minHeight: "40px"
}

const InputFrom= (props) =>
{
    return(
        <div style = {Style}>
    
    <Container fluid>
    <Row className = "justify-content-md-center">
   
    <InputGroup className="mb-3" size="lg"  
    defaultValue = {props.inputVal}
    onChange = {props.change} > 
    <InputGroup.Prepend>
    <InputGroup.Text id="inputGroup-sizing-sm">{props.children}</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Enter values here"
    />
  </InputGroup>
  </Row>
</Container>

        </div>
    )

   
}


export default InputFrom; 