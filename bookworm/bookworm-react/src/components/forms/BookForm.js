import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { Form, Rating, Button, Grid, Image, Segment } from 'semantic-ui-react';
import InlineError from '../messages/InlineError';

class BookForm extends Component {
  state = {
    loading: false,
    data: {
      goodreadsId: this.props.book.goodreadsId,
      title: this.props.book.title,
      authors: this.props.book.authors,
      pages: this.props.book.pages,
      cover: this.props.book.covers[0],
      averageRating: this.props.book.averageRating,
      thumb: this.props.book.thumb,
    },
    covers: this.props.book.covers,
    index: 0,
    errors: {},
  };

  componentWillReceiveProps = props =>
    this.setState({
      data: {
        goodreadsId: props.book.goodreadsId,
        title: props.book.title,
        authors: props.book.authors,
        pages: props.book.pages,
        cover: props.book.covers[0],
        averageRating: props.book.averageRating,
        image: props.book.thumb[0],
      },
      covers: props.book.covers,
      index: 0, // we need to reset the index when new book is loaded
    });

  handleOnChange = e =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });

  handleChangeCover = () => {
    const { index, covers } = this.state;
    const newIndex = index + 1 >= covers.length ? 0 : index + 1;
    this.setState({
      index: newIndex,
      data: { ...this.state.data, cover: covers[newIndex] },
    });
  };

  handleOnChangeNumber = e =>
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: parseInt(e.target.value, 10),
      },
    });

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });

    if (isEmpty(errors)) {
      this.setState({ loading: true });
      this.props.submit(this.state.data).then();
    }
  };

  validate = data => {
    const errors = {};
    if (!data.title) errors.title = "Title can't be blank";
    if (!data.authors) errors.authors = "Authors can't be blank";
    if (!data.pages) errors.pages = "Pages can't be blank";
    return errors;
  };

  render() {
    const { errors, data, loading } = this.state;

    return (
      <Segment>
        <Form loading={loading}>
          <Grid columns={2} stackable>
            <Grid.Row>
              <Grid.Column>
                <Form.Field error={!!errors.title}>
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={data.title}
                    placeholder="Book title ..."
                    onChange={this.handleOnChange}
                  />
                  {errors.title && <InlineError text={errors.title} />}
                </Form.Field>

                <Form.Field error={!!errors.authors}>
                  <label htmlFor="authors">Authors</label>
                  <input
                    type="text"
                    name="authors"
                    id="authors"
                    value={data.authors}
                    placeholder="Authors ..."
                    onChange={this.handleOnChange}
                  />
                  {errors.authors && <InlineError text={errors.authors} />}
                </Form.Field>

                <Form.Field error={!!errors.pages}>
                  <label htmlFor="pages">Pages</label>
                  <input
                    type="number"
                    name="pages"
                    id="pages"
                    value={data.pages}
                    onChange={this.handleOnChangeNumber}
                  />
                  {errors.pages && <InlineError text={errors.pages} />}
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <p>
                  <Rating
                    defaultRating={data.averageRating}
                    maxRating={5}
                    disabled
                  />
                </p>
                <Image size="small" src={data.cover} />
                {this.state.covers.length > 1 && (
                  <a
                    role="button"
                    tabIndex={0}
                    onClick={this.handleChangeCover}
                    style={{ cursor: 'pointer' }}
                  >
                    Next
                  </a>
                )}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Button primary>Add Book</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </Segment>
    );
  }
}

BookForm.propTypes = {
  submit: PropTypes.func.isRequired,
  book: PropTypes.shape({
    goodreadsId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    pages: PropTypes.number.isRequired,
    averageRating: PropTypes.number,
    covers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    thumb: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};

export default BookForm;
