import { useState, useEffect } from "react";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
import Slide from "./Slide";
import AddSlide from "./AddSlide";
import Banner from "./Banner";

const SlideList = () => {
  const [slides, setSlides] = useState([]);

  const addSlide = (Slide) => {
    if (slides.length < 3) {
      const newSlides = [Slide, ...slides];
      setSlides(newSlides);
    } else {
      console.log("MORE THAN 5 IS IMPOSSIBLE!");
    }
  };
  return (
    <Container>
      <ListGroup horizontal>
        <Banner />
        {slides.map((slide) => (
          <ListGroup.Item>
            <Slide />
          </ListGroup.Item>
        ))}

        <ListGroup.Item onClick={() => addSlide()}>
          <AddSlide />
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default SlideList;
