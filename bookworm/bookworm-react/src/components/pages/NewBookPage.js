import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

import SearchBookForm from '../forms/SearchBookForm';
import BookForm from '../forms/BookForm';

class NewBookPage extends Component {
  state = {
    book: null,
  };

  handleBookSelect = book => this.setState({ book });

  addBook = () => console.log('addBook invoked');

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

export default NewBookPage;
