import React from "react";
import { Link } from "react-router-dom";
import {
  Segment,
  Grid,
  Image,
  Table,
  Divider,
  Icon,
  Header
} from "semantic-ui-react";
import PropTypes from "prop-types";

const AlgorithmListPage = ({ image, altText, algorithms, type }) => (
  <div>
    <Segment>
      <Grid columns={2}>
        <Grid.Column>
          <Image src={image} alt={altText} />
          <Header
            as="h4"
            content={altText}
            style={{ textTransform: "uppercase", color: "#005aa9" }}
          />
        </Grid.Column>
        <Grid.Column textAlign="right" verticalAlign="top">
          <Link to="/">
            <div
              className="ui icon"
              data-tooltip={`Add new ${type} algorithm`}
              data-position="left center"
              style={{ display: "inline-block" }}
            >
              <Icon name="plus circle" size="huge" />
            </div>
          </Link>
        </Grid.Column>
      </Grid>

      <Divider />
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {algorithms &&
            algorithms.map(algo => (
              <Table.Row key={algo.id}>
                <Table.Cell>{algo.name}</Table.Cell>
                <Table.Cell>
                  <Link to={`/algorithms/${algo.id}/edit`}>
                    <Icon name="edit" size="large" />
                  </Link>
                  <Link to="/delete">
                    <Icon name="trash" size="large" />
                  </Link>
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </Segment>
  </div>
);

AlgorithmListPage.propTypes = {
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  algorithms: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default AlgorithmListPage;
