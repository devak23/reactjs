import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class UserDetailsPage extends Component {
  state = {};

  render() {
    if (this.props.user) {
      const { first, last, description, sex, thumbnail, age } = this.props.user;

      return (
        <Card>
          <Image src={thumbnail} />
          <Card.Content>
            <Card.Header>
              {first} {last}
            </Card.Header>
            <Card.Meta>
              <span className="date">
                {sex} of age {age}
              </span>
            </Card.Meta>
            <Card.Description>{description}</Card.Description>
          </Card.Content>
        </Card>
      );
    }
    return <h4>Please select an employee.</h4>;
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser,
  };
}

UserDetailsPage.propTypes = {
  user: PropTypes.shape({
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(UserDetailsPage);
