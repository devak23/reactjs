import React from "react";
import { Segment } from "semantic-ui-react";

const refData = [
  {
    text: "Predictive Maintenance",
    color: "#0063ad",
    fontSize: "20px"
  },
  {
    text: "Operational",
    color: "#444",
    fontSize: "14px"
  },
  {
    text: "Deep Learning",
    color: "#0063ad",
    fontSize: "26px"
  },
  {
    text: "Diagnostics Health & Safety",
    color: "#0073c9",
    fontSize: "24px"
  },
  {
    text: "Environment Maintence & Reliability",
    color: "#444",
    fontSize: "18px"
  },
  {
    text: "Sustainability",
    color: "#214272",
    fontSize: "22px"
  },
  {
    text: "Projects Clustering",
    color: "#0063ad",
    fontSize: "12px"
  },
  {
    text: "Regression Classification",
    color: "#5b90ce",
    fontSize: "24px"
  },
  {
    text: "Predictive",
    color: "#111",
    fontSize: "20px"
  },
  {
    text: "Time series",
    color: "#5b90ce",
    fontSize: "18px"
  },
  {
    text: "Exploratory Hypothesis Analysis",
    color: "#214272",
    fontSize: "20px"
  },
  {
    text: "Prescriptive",
    color: "#666",
    fontSize: "18px"
  },
  {
    text: "Bayesian Network",
    color: "#0063ad",
    fontSize: "14px"
  },
  {
    text: "Artificial Intelligence",
    color: "#0073c9",
    fontSize: "24px"
  },
  {
    text: "Supply Chain",
    color: "#777",
    fontSize: "16px"
  }
];

const TagCloud = () => (
  <Segment>
    {refData.map(item => (
      <span
        style={{
          margin: "2px 4px",
          color: item.color,
          fontSize: item.fontSize
        }}
      >
        {item.text}
      </span>
    ))}
  </Segment>
);

export default TagCloud;
