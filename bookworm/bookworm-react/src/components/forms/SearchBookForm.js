import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Dropdown } from 'semantic-ui-react';
import axios from 'axios';

class SearchBookForm extends Component {
  state = {
    query: '',
    loading: false,
    options: [],
    books: {},
  };

  handleOnSearchChange = (e, data) => {
    clearTimeout(this.timer);
    this.setState({
      query: data,
    });
    this.timer = setTimeout(this.fetchOptions, 1000);
  };

  fetchOptions = () => {
    if (!this.state.query) return;
    this.setState({ loading: true });
    axios
      .get(`/api/books/search?q=${this.state.query}`)
      .then(res => res.data.books)
      .then(books => {
        const options = [];
        const booksHash = {};
        books.forEach(book => {
          booksHash[book.goodreadsId] = book;
          options.push({
            key: book.goodreadsId,
            value: book.goodreadsId,
            text: book.title,
            image: { avatar: false, src: book.thumb },
          });
        });
        this.setState({ loading: false, options, books: booksHash });
      });
  };

  handleBookSelect = (e, data) => {
    this.setState({ query: data.value });
    const book = this.state.books[data.value];
    this.props.onSelect(book);
    // axios
    //   .get(`/api/books/fetchPages?q=${book.goodreadsId}`)
    //   .then(res => {
    //     book.pages = res.data.pages;
    //     this.props.onSelect(book);
    //     this.setState({ loading: false });
    //   })
    //   .catch(err => {
    //     this.setState({ loading: false });
    //     console.log('cannot load pages!', err);
    //   }); // TODO: need to improve this
  };

  render() {
    return (
      <Form loading={this.state.loading}>
        <Dropdown
          search
          fluid
          placeholder="Search for book by title"
          value={this.state.value}
          onSearchChange={this.handleOnSearchChange}
          onChange={this.handleBookSelect}
          options={this.state.options}
        />
      </Form>
    );
  }
}

SearchBookForm.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default SearchBookForm;
