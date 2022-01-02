import * as React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";

import { ColorMap } from "../components/Types";
import { DragDropContext } from "react-beautiful-dnd";
import { reorderColors } from "../components/reorder";
import { AuthorList } from "../components/AuthorList";
import SlideList from "../components/SlideList";
import BannerList from "../components/BannerList";

const HomePage = () => {
  const [img, setImg] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImg(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async (event) => {
    const body = new FormData();
    body.append("file", img);
    const response = await fetch("/api/file", {
      method: "POST",
      body,
    });
  };

  const [colorMap, setColors] = React.useState<ColorMap>({
    a: ["blue", "red", "yellow"],
    b: ["pink"],
    c: ["green", "tan"],
  });

  return (
    <>
      <DragDropContext
        onDragEnd={({ destination, source }) => {
          // // dropped outside the list
          if (!destination) {
            return;
          }

          setColors(reorderColors(colorMap, source, destination));
          //setSlides(reorderSlides(slides, source, destination));
        }}
      >
        <div>
          {Object.entries(colorMap).map(([k, v]) => (
            <AuthorList
              internalScroll
              key={k}
              listId={k}
              listType="CARD"
              colors={v}
            />
          ))}
        </div>
      </DragDropContext>
      <Container>
        <BannerList />
        <SlideList />
      </Container>

      <Container>
        <img src={createObjectURL} />
        <h4>Select Image</h4>
        <input type="file" name="myImage" onChange={uploadToClient} />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={uploadToServer}
        >
          Send to server
        </button>
      </Container>
    </>
  );
};

export default HomePage;
