import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import Box from "./Box";

const Coordinates = (props) => {
  // useEffect(() => boxDrawer(), [props.digitLocation]);
  const boxDrawer = () => {
    return (
      <Container id="allDigits">
        <Row id="lat">
          <Box isActive={props.digitLocation == 1} number={props.digitLocation} />
          <Box isActive={props.digitLocation == 2} number={props.digitLocation} />
          <Box isActive={props.digitLocation == 3} number={props.digitLocation} />
          <Box isActive={props.digitLocation == 4} number={props.digitLocation} />
          <Box isActive={props.digitLocation == 5} number={props.digitLocation} />
          <Box isActive={props.digitLocation == 6} number={props.digitLocation} />
        </Row>
        <Row id="lon">
          <Box isActive={props.digitLocation == 7} number={props.digitLocation} />
          <Box isActive={props.digitLocation == 8} number={props.digitLocation} />
          <Box isActive={props.digitLocation == 9} number={props.digitLocation} />
          <Box isActive={props.digitLocation == 10} number={props.digitLocation} />
          <Box isActive={props.digitLocation == 11} number={props.digitLocation} />
          <Box isActive={props.digitLocation == 12} number={props.digitLocation} />
        </Row>
      </Container>
    );
  };
  return (boxDrawer());
};

export default Coordinates;
