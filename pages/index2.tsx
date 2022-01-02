import * as React from "react";
import { useState, useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Form } from "react-bootstrap";

import { ColorMap } from "../components/Types";
import { DragDropContext } from "react-beautiful-dnd";
import { reorderColors, reorderSlides } from "../components/reorder";
import { AuthorList2 } from "../components/AuthorList";
import Slide from "../components/Slide";
import axios from "axios";

const HomePage = () => {
  const [img, setImg] = useState("");

  const imgSelectedHandler = (e) => {
    setImg(e.target.files[0]);
  };

  const imgUploadHandler = (e) => {
    axios.post;
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]; //firts file would be [0]
    const formData = new FormData();
    formData.append("image", file);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);
      setImg(data);
    } catch (error) {
      console.error(error);
    }
  };

  // const [colorMap, setColors] = React.useState<ColorMap>({
  //   a: ["blue", "red", "yellow"],
  //   b: ["pink"],
  //   c: ["green", "tan"],
  // });

  // const [slides, setSlides] = useState([
  //   { id: "1", name: "slide1" },
  //   { id: "2", name: "slide2" },
  // ]);

  // console.log(slides);

  return (
    <FormContainer>
    // <DragDropContext
    //   onDragEnd={({ destination, source }) => {
    //     // // dropped outside the list
    //     if (!destination) {
    //       return;
    //     }

    //     //setColors(reorderColors(colorMap, source, destination));
    //     setSlides(reorderSlides(slides, source, destination));
    //   }}
    // >
    //   {/* <div>
    //     {Object.entries(colorMap).map(([k, v]) => (
    //       <AuthorList
    //         internalScroll
    //         key={k}
    //         listId={k}
    //         listType="CARD"
    //         colors={v}
    //       />
    //     ))}
    //   </div> */}

    //   {/* <div>
    //     {slides.map((s) => (
    //       <AuthorList2
    //         internalScroll
    //         key={s.id}
    //         listId={s.id}
    //         listType="CARD"
    //         slides={{ name }}
    //       />
    //     ))}
    //   </div> */}
    // </DragDropContext>
  );
};

export default HomePage;
