import React, {Component} from 'react';
import InputFrom from '../components/InputForm';
import OutputFrom from '../components/OutputForm';
import ToggleButton from '../components/ToggleBase';


import { Form } from 'react-bootstrap';
import {Row } from 'react-bootstrap';
class HexiCalc extends Component{

    constructor(props)
    {
        super(props)
        this.state = {
            currentInput:"0", 
            HexiOutput:"0", 
            BiOutput:"0", 
            DeciOutput: "0", 
            currentInputSetting:"Decimal"
           

            }
        }
    onChangeHandler= (event) =>
    {
        
        let TempNumber =event.target.value;

        if(TempNumber.length === 0)
        {
            this.setState ({DeciOutput :  ""});
            this.setState ({BiOutput :  ""});
            this.setState ({HexiOutput :  ""});
        }
        //decimal
        if( this.state.currentInputSetting === "Decimal" && TempNumber.length !== 0)
        {
            let isDecimal =  /^\d+$/.test(TempNumber);
            if( isDecimal !== true)
            {
                let errorMSg = "#ERROR";
                this.setState ({DeciOutput :  errorMSg});
                this.setState ({BiOutput :  errorMSg});
                this.setState ({HexiOutput :  errorMSg});
            }
            else
            { 
                this.setState ({DeciOutput :  event.target.value});
                //parsing section
                let parsedNumber =  parseInt(TempNumber);
                let binaryString = parsedNumber.toString(2);
                let hexString = parsedNumber.toString(16); 
                this.setState ({BiOutput :  binaryString});
                this.setState ({HexiOutput :  hexString});

            }
        }
        //Binary 
        if( this.state.currentInputSetting === "Binary" && TempNumber.length !== 0)
        {
            const biTest = /^[0-1]{1,}$/; 

            let isBinary =  biTest.test(TempNumber)
            if( isBinary  !== true)
            {
                console.log("Not Binary")
                let errorMSg = "#ERROR";
                this.setState ({DeciOutput :  errorMSg});
                this.setState ({BiOutput :  errorMSg});
                this.setState ({HexiOutput :  errorMSg});
            }
            else
            { 
                console.log("Is Binary")
                this.setState ({DeciOutput :  event.target.value});
                //parsing section
                let decimalString =  parseInt(TempNumber, 2);
                let hexString = decimalString.toString(16); 
                this.setState ({DeciOutput:  decimalString});
                this.setState ({HexiOutput :  hexString});

            }
        }
        //Hexadecimal 
        if( this.state.currentInputSetting === "Hexadecimal" && TempNumber.length !== 0)
        {
            let isHexTest1 = /^[0-9a-f]{1,}$/
            let isHexTest2 = /^[0-9A-F]{1,}$/
            let isHex1 = isHexTest1.test(TempNumber); 
            let isHex2 =  isHexTest2.test(TempNumber) ; 
            if( isHex1!== true  && isHex2 != true )
            {
                let errorMSg = "#ERROR";
                this.setState ({DeciOutput :  errorMSg});
                this.setState ({BiOutput :  errorMSg});
                this.setState ({HexiOutput :  errorMSg});
            }
            else
            { 
                this.setState ({DeciOutput :  event.target.value});
                //parsing section
                let parsedNumber =  parseInt(TempNumber ,16);
                let binaryString = parsedNumber.toString(2);
            
                this.setState ({BiOutput :  binaryString});
                this.setState ({DeciOutput:  parsedNumber});

            }
        }
        // implement a binary calc block 
        // implement a Hex calc block 
        // make output dynamatic 
    }
    dropDownChange = (event) =>
    {
        this.setState({currentInputSetting: event})
        this.setState ({DeciOutput : "0"});
        this.setState ({BiOutput :  "0"});
        this.setState ({HexiOutput : "0"});
    }


    render()
            {
                return (
                <div>
                <h2>Input Here!</h2>
              
                <InputFrom inputVal = {this.state.currentInput}  change = {this.onChangeHandler}>
                 <ToggleButton change = {this.dropDownChange}  currentSetting = {this.state.currentInputSetting}/> </InputFrom>
                  <h2>Output here!</h2>
                  <OutputFrom outDec = {this.state.DeciOutput}
                  outBi = {this.state.BiOutput}
                  outHex = {this.state.HexiOutput}
                  currentSetting = {this.state.currentInputSetting}/>
                  
                    {/*console.log(this.state.currentInputSetting) */}
                    { /*console.log(this.state.currentInput) */ }
                  
                </div>

             
                ); 
         }
      
        
            
        
}



export default HexiCalc;