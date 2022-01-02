import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

import InstagramIcon from "@material-ui/icons/Instagram";

const Banner = () => {
  return (
    <Card style={{ width: "9rem", height: "9rem" }}>
      <Card.Body>
        <InstagramIcon style={{ fontSize: "32px" }} />
        <Card.Text>Banner</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Banner;
