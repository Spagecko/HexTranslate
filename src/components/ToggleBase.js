import React from "react";

import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";
import { MenuItem } from "react-bootstrap";
const style1 = { 
    minWidth :"190px",
    minHeight: "40px"
}
const toggleBase = props => {
  console.log(props.currentSetting);
  return (
    <div style = {style1}>

            <DropdownButton
              id="dropdown-item-button"
              onSelect={props.change}
              title={props.currentSetting}
            >
              <Dropdown.Item as="button" eventKey="Decimal">
                Decimal
              </Dropdown.Item>
              <Dropdown.Item as="button" eventKey="Binary">
                Binary
              </Dropdown.Item>
              <Dropdown.Item as="button" eventKey="Hexadecimal">
                Hexadecimal
              </Dropdown.Item>
            </DropdownButton>

    </div>
  );
};
export default toggleBase;
