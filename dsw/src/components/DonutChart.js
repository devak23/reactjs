import React from "react";
import { Segment } from "semantic-ui-react";
import { VictoryPie } from "victory";

const sampleData = [
  {
    x: "Algorithms",
    y: 400,
    opacity: 0.5,
    fill: "blue"
  },
  { x: "Datasets", y: 850, opacity: 0.5, fill: "red" },
  { x: "Models", y: 580, opacity: 0.5, fill: "green" }
];

const DonutChart = () => (
  <Segment>
    <VictoryPie
      innerRadius={60}
      data={sampleData}
      height={265}
      animate={{ duration: 4000 }}
      labels={d => `${d.x}(${d.y})`}
    />
  </Segment>
);

export default DonutChart;
