import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useState } from "react";

import SlideshowIcon from "@material-ui/icons/Slideshow";

const Slide = () => {
  return (
    <Card style={{ width: "9rem", height: "9rem" }}>
      <Card.Body>
        <SlideshowIcon style={{ fontSize: "32px" }} />
        <Card.Text>Slide</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Slide;
