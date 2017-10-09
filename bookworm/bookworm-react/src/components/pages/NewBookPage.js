import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchBookForm from '../forms/SearchBookForm';
import BookForm from '../forms/BookForm';
import { addBook } from '../../actions/books';

class NewBookPage extends Component {
  state = {
    book: null,
  };

  handleBookSelect = book => this.setState({ book });

  addBook = book =>
    this.props
      .addBook(book)
      .then(() => this.props.history.push('/dashboard'))
      .catch(err => console.log(err)); // TODO: fix this!

  render() {
    return (
      <Segment>
        <h1>Add new book to your collection</h1>
        <SearchBookForm onSelect={this.handleBookSelect} />

        {this.state.book && (
          <BookForm submit={this.addBook} book={this.state.book} />
        )}
      </Segment>
    );
  }
}

NewBookPage.propTypes = {
  addBook: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, { addBook })(NewBookPage);
