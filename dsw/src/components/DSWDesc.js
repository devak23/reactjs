import React from "react";
import { Item, Icon } from "semantic-ui-react";

const ItemExampleMetadata = () => (
  <Item.Group>
    <Item>
      <Item.Image>
        <Icon
          name="code"
          size="big"
          style={{ margin: "0 0 0 80px", color: "#2323ff" }}
        />
      </Item.Image>

      <Item.Content>
        <Item.Header>Algorithms</Item.Header>
        <Item.Meta>
          <span>
            Annotated, Proven and Rolta developed algorithms for creating models
          </span>
        </Item.Meta>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image>
        <Icon
          name="database"
          size="big"
          style={{ margin: "0 0 0 80px", color: "#3f3eff" }}
        />
      </Item.Image>

      <Item.Content>
        <Item.Header>Data Preparation</Item.Header>
        <Item.Meta>
          <span>
            Use virtual lab environment to explore, cleanse and transform your
            data
          </span>
        </Item.Meta>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image>
        <Icon
          name="bar chart"
          size="big"
          style={{ margin: "0 0 0 80px", color: "#2323ff" }}
        />
      </Item.Image>

      <Item.Content>
        <Item.Header>Visualization</Item.Header>
        <Item.Meta>
          <span>
            Easily visualize complex data using prebuilt customizable charts
          </span>
        </Item.Meta>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image>
        <Icon
          name="computer"
          size="big"
          style={{ margin: "0 0 0 80px", color: "#0063ad" }}
        />
      </Item.Image>

      <Item.Content>
        <Item.Header>Models</Item.Header>
        <Item.Meta>
          <span>
            Create Exploratory, Diagnostic, Predictive and Advanced Models using
            a step by step approach
          </span>
        </Item.Meta>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image>
        <Icon
          name="zip"
          size="big"
          style={{ margin: "0 0 0 80px", color: "#1123ff" }}
        />
      </Item.Image>

      <Item.Content>
        <Item.Header>Sandbox</Item.Header>
        <Item.Meta>
          <span>
            Compare and analyze various types of models for best possible
            performance
          </span>
        </Item.Meta>
      </Item.Content>
    </Item>
  </Item.Group>
);

export default ItemExampleMetadata;
