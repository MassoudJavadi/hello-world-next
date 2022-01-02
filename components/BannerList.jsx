import { useState, useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Row, Col } from "react-bootstrap";
import Banner from "./Banner";
import AddBanner from "./AddBanner";

const BannerList = () => {
  const [banners, setBanners] = useState([]);

  const addBanner = (Banner) => {
    console.log("addbanner");

    const newBanners = [Banner, ...banners];
    setBanners(newBanners);

    // <Container>
    //   <Row>
    //     <Col>MASOUD</Col>
    //   </Row>
    // </Container>;
  };

  return (
    <Container>
      <ListGroup>
        <ListGroup.Item onClick={() => addBanner()}>
          <AddBanner />
        </ListGroup.Item>

        {banners.map((banner) => (
          <ListGroup.Item>
            <Banner />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default BannerList;
