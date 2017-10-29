import React from "react";
import { Container } from "semantic-ui-react";
import MyCarousel from "./components/MyCarousel";
import data from "./data";

const App = () => (
  <Container text style={{ width: "500px" }}>
    <MyCarousel images={data.images} />
  </Container>
);

export default App;
