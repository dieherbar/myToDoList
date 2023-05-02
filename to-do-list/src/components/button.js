import Button from 'react-bootstrap/Button';


export default function CustomButton(props) {
  return (
    <Button variant={props.variant} onClick={props.onClick}>
      {props.children}
    </Button>
  );
}

