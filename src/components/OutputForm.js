import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

const padStyle  = { 
    paddingBottom : "20px"
}
const style1 = { 
    minWidth :"190px",
    minHeight: "40px"
}
const outputForm = props => {
  let display = null;
  switch (props.currentSetting) {
    case "Decimal":
      display = (
        <div>
          <Container>
            <Row>
                <div style = {padStyle}>
              <ListGroup horizontal>
                <ListGroup.Item>
                    <div style = {style1}>
                  
                    <h7> <strong >Binary: </strong></h7> <Badge variant="light"> {props.outBi.length}</Badge>
                   
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>
                    <p> {props.outBi}</p>
                  </strong>
                </ListGroup.Item>
              </ListGroup>
              </div>
            </Row>
            <Row>
                <div style = {padStyle}>
              <ListGroup horizontal>
                <ListGroup.Item>
                <div style = {style1}>
                  
                    <strong><h7> Hexadecimal: </h7> </strong> <Badge variant="light"> {props.outHex.length}</Badge>
                
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>
                    <p> {props.outHex}</p>
                  </strong>
                </ListGroup.Item>
              </ListGroup>
              </div>
            </Row>
          </Container>
        </div>
      );
      break;

    case "Binary":
      display = (
        <div>
          <Container>
            <Row>
            <div style = {padStyle}>
              <ListGroup horizontal>
                <ListGroup.Item>
                <div style = {style1}> 
                <strong><h7> Decimal: </h7> </strong> <Badge variant="light"> {props.outDec.length}</Badge>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>
                    <p> {props.outDec}</p>
                  </strong>
                </ListGroup.Item>
              </ListGroup>
              </div>
            </Row>
            <Row>
            <div style = {padStyle}>
              <ListGroup horizontal>
                <ListGroup.Item>
                 
                  <div style = {style1}>
                  
                  <strong><h7> Hexadecimal: </h7> </strong> <Badge variant="light"> {props.outHex.length}</Badge>
              
                </div>
                
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>
                    <p> {props.outHex}</p>
                  </strong>
                </ListGroup.Item>
              </ListGroup>
              </div>
            </Row>
          </Container>
        </div>
      );
      break;

    case "Hexadecimal":
      display = (
        <div>
            <Container>
            <Row>
            <div style = {padStyle}>
              <ListGroup horizontal>
                <ListGroup.Item>
                <div style = {style1}>
                  
                <strong><h7> Decimal: </h7> </strong> <Badge variant="light"> {props.outDec.length}</Badge>
                 
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>
                    <p> {props.outDec}</p>
                  </strong>
                </ListGroup.Item>
              </ListGroup>
              </div>
            </Row>
            <Row>
            <div style = {padStyle}>
              <ListGroup horizontal>
             
                <ListGroup.Item>
                <div style = {style1}>
                  
                  <h7> <strong >Binary: </strong></h7> <Badge variant="light"> {props.outBi.length}</Badge>
                 
                </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>
                    <p> {props.outBi}</p>
                  </strong>
                </ListGroup.Item>
              </ListGroup>
              </div>
            </Row>
          </Container>
        </div>
      );
      break;

    default:
      display = null;
  }

  return (
    <div>
      <Container fluid>{display}</Container>
    </div>
  );
};

export default outputForm;
