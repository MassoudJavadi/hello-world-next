import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const AddBanner = () => {
  return (
    <Card style={{ width: "9rem", height: "9rem" }}>
      <Card.Body>
        <AddCircleOutlineIcon style={{ fontSize: "32px" }} />
        <Card.Text>Add Banner</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AddBanner;
