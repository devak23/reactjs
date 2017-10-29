import React from "react";
import { Container } from "semantic-ui-react";

import MyCarousel from "./components/MyCarousel";
import data from "./data";

const App = () => (
  <Container centered>
    <div className="ui center aligned segment">
      <MyCarousel images={data.images} />
    </div>
  </Container>
);

export default App;
