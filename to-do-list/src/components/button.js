import Button from 'react-bootstrap/Button';
import { Component } from "react";

export default class Pepe extends Component {

  render(){
  return (
    <>
      <Button variant="primary">
        vamo lo pibe componente
      </Button>
      <Button as="a" variant="success">
        Button as link
      </Button>
    </>
  );
  } 

  /* render() {
    return (
        <>
        <Button variant="flat" size="xxl">
            Hello from bootstrat
        </Button>
        </>
    )
} */
}

/* import React from "react";
import ReactDOM from "react-dom";
import { Button } from "react-bootstrap";

function MyButton() {
  return (
  <Button variant="primary">Haz clic aquí</Button>
  );
}

ReactDOM.render(<MyButton />, document.getElementById("root")); */
