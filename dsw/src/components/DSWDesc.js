import React from "react";
import { Item, Icon } from "semantic-ui-react";

const refData = [
  {
    id: 1,
    title: "Algorithms",
    icon: "code",
    desc:
      "Annotated, Proven and Rolta developed algorithms for creating models",
    color: "#2323ff"
  },
  {
    id: 2,
    title: "Data Preparation",
    icon: "database",
    desc:
      "Use virtual lab environment to explore, cleanse and transform your data",
    color: "#3f3eff"
  },
  {
    id: 3,
    title: "Visualization",
    icon: "bar chart",
    desc: "Easily visualize complex data using prebuilt customizable charts",
    color: "#2323ff"
  },
  {
    id: 4,
    title: "Models",
    icon: "computer",
    desc:
      "Create Exploratory, Diagnostic, Predictive and Advanced Models using a step by step approach",
    color: "#0063ad"
  },
  {
    id: 5,
    title: "Sand box",
    icon: "zip",
    desc:
      "Compare and analyze various types of models for best possible performance",
    color: "#1123ff"
  }
];

const DSWDesc = () => (
  <Item.Group>
    {refData.map(item => (
      <Item key={item.id}>
        <Item.Image>
          <Icon
            name={item.icon}
            size="big"
            style={{ margin: "0 0 0 80px", color: "#0063ad" }}
          />
        </Item.Image>

        <Item.Content>
          <Item.Header>{item.title}</Item.Header>
          <Item.Meta>
            <span>{item.desc}</span>
          </Item.Meta>
        </Item.Content>
      </Item>
    ))}
  </Item.Group>
);

export default DSWDesc;
