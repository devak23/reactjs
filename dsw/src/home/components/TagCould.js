import React from "react";
import { Segment } from "semantic-ui-react";

const refData = [
  {
    id: 1,
    text: "Predictive Maintenance",
    color: "#0063ad",
    fontSize: "20px"
  },
  {
    id: 2,
    text: "Operational",
    color: "#444",
    fontSize: "14px"
  },
  {
    id: 3,
    text: "Deep Learning",
    color: "#0063ad",
    fontSize: "26px"
  },
  {
    id: 4,
    text: "Diagnostics Health & Safety",
    color: "#0073c9",
    fontSize: "24px"
  },
  {
    id: 5,
    text: "Environment Maintence & Reliability",
    color: "#444",
    fontSize: "18px"
  },
  {
    id: 6,
    text: "Sustainability",
    color: "#214272",
    fontSize: "22px"
  },
  {
    id: 7,
    text: "Projects Clustering",
    color: "#0063ad",
    fontSize: "12px"
  },
  {
    id: 8,
    text: "Regression Classification",
    color: "#5b90ce",
    fontSize: "24px"
  },
  {
    id: 9,
    text: "Predictive",
    color: "#111",
    fontSize: "20px"
  },
  {
    id: 10,
    text: "Time series",
    color: "#5b90ce",
    fontSize: "18px"
  },
  {
    id: 11,
    text: "Exploratory Hypothesis Analysis",
    color: "#214272",
    fontSize: "20px"
  },
  {
    id: 12,
    text: "Prescriptive",
    color: "#666",
    fontSize: "18px"
  },
  {
    id: 13,
    text: "Bayesian Network",
    color: "#0063ad",
    fontSize: "14px"
  },
  {
    id: 14,
    text: "Artificial Intelligence",
    color: "#0073c9",
    fontSize: "24px"
  },
  {
    id: 15,
    text: "Supply Chain",
    color: "#777",
    fontSize: "16px"
  }
];

const TagCloud = () => (
  <Segment>
    {refData.map(item => (
      <span
        key={item.id}
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
