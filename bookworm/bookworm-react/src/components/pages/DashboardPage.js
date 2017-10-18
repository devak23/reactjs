import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Table, Header, Image, Grid, Segment, Rating } from "semantic-ui-react";
import * as actions from "../../actions/auth";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import { allBooksSelector } from "../../reducers/books";
import AddBookCTA from "../ctas/AddBookCTA";
import { fetchBooks } from "../../actions/books";

class DashboardPage extends Component {
  componentDidMount = () => this.onInit(this.props);

  onInit = props => props.fetchBooks();

  render() {
    const { isConfirmed, books } = this.props;
    console.log("books.length = ", books.length);

    return (
      <div style={{ margin: "20px 0" }}>
        {!isConfirmed && <ConfirmEmailMessage />}
        <Segment>
          <Header>Books read so far...</Header>
          <Grid columns="two">
            <Grid.Column>{books.length === 0 && <AddBookCTA />}</Grid.Column>
            <Grid.Column>
              <Table basic="very">
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {books &&
                    books.length > 0 &&
                    books.map(book => (
                      <Table.Row key={book._id}>
                        <Table.Cell>
                          <Header as="h4" image>
                            <Image
                              src={book.cover}
                              shape="rounded"
                              size="mini"
                            />
                            <Header.Content>
                              {book.title}
                              <Header.Subheader>
                                {book.authors}
                              </Header.Subheader>
                              <Header.Subheader>
                                {book.pages} pages
                              </Header.Subheader>
                            </Header.Content>
                          </Header>
                        </Table.Cell>
                        <Table.Cell>
                          <Rating
                            defaultRating={book.averageRating}
                            maxRating={5}
                            disabled
                          />
                        </Table.Cell>
                      </Table.Row>
                    ))}
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
    books: allBooksSelector(state)
  };
}

DashboardPage.propTypes = {
  fetchBooks: PropTypes.func.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default connect(mapStateToProps, { logout: actions.logout, fetchBooks })(
  DashboardPage
);
