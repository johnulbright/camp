import React,{useState} from 'react'
import {Form,FormGroup,Label,Input,Button} from 'reactstrap'

const Code=(props)=>{
    const [code,setCode]=useState('');
    const [showWarning,setShowWarning]=useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        props.setDigitLocation(null);
        setShowWarning(true);
        for (let item of props.codes){
            if(item.code==code){
                setShowWarning(false);
                props.setDigitValue(item.value);
                props.setDigitLocation(item.location);
            }

        }
        setCode('');
    }
    return(
        <>
        <Form onSubmit={(e) => handleSubmit(e)}>
        <FormGroup>
          <Label>
            Enter the code
          </Label>
          <Input
            id="textBox"
            onChange={(e) => setCode(e.target.value)}
            name="cpde"
            value={code}
          />
        </FormGroup>
        <Button id="suBtn" type="submit">
          Submit
        </Button>
      </Form>
      {showWarning&&<h2>You blew it!</h2>}
      </>
    )
} 

export default Code 