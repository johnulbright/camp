import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  ModalHeader,
  ModalBody,
  Modal,
} from "reactstrap";

const Security = (props) => {
  const [questionText, setQuestionText] = useState(
    "What is Andy's middle name?"
  );
  const [qNumber, setQNumber] = useState(1);
  const [answer, setAnswer] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (qNumber) {
      case 1:
        if (answer === "Vernon") {
          setAnswer('');
          setShowWarning(false);
          setQuestionText("What was Craig's first cabin?");
          setQNumber(2);
        } else {
          setShowWarning(true);
        }
        break;
      case 2:
        if (answer == 23) {
          setAnswer('');
          setShowWarning(false);
          setQuestionText("Seth or Johnny?");
          setQNumber(3);
        } else {
            setShowWarning(true);
        }
        break;
      case 3:
        if (answer === "Neither"||answer==="neither") {
          setAnswer('');
          setShowWarning(false);
          props.setSecure(true);
        } else {
          setShowWarning(true);
        }
        break;
    }
  };

  return (
      <>
    <Form onSubmit={(e) => handleSubmit(e)}>
      <FormGroup>
        <Label>
          Question {qNumber}: {questionText}
        </Label>
        <Input
          id="textBox"
          onChange={(e) => setAnswer(e.target.value)}
          name="answer"
          value={answer}
        />
      </FormGroup>
      <Button id="suBtn" type="submit">
        Submit
      </Button>
    </Form>
    {showWarning&&<h2>INCORRECT!</h2>}
    </>
  );
};

export default Security;
