import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const AddSlide = () => {
  return (
    <Card style={{ width: "9rem", height: "9rem" }}>
      <Card.Body>
        <AddCircleOutlineIcon style={{ fontSize: "32px" }} />
        <Card.Text>Add Slide</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AddSlide;
