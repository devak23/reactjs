import React from "react";
import { connect } from "react-redux";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import gravatarUrl from "gravatar-url";
import PropTypes from "prop-types";
import { allBooksSelector } from "../../reducers/books";
import * as actions from "../../actions/auth";

const TopNavigation = ({ user, logout, hasBooks }) => (
  <Menu secondary pointing>
    <Menu.Item as={Link} to="/dashboard">
      <h5>Dashboard</h5>
    </Menu.Item>
    {hasBooks && (
      <Menu.Item as={Link} to="/books/new">
        <h5>New Book</h5>
      </Menu.Item>
    )}

    <Menu.Menu position="right">
      <Dropdown trigger={<Image avatar src={gravatarUrl(user.email)} />}>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </Menu>
);

TopNavigation.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired
  }).isRequired,
  hasBooks: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToPropTypes(state) {
  console.log("state = ", allBooksSelector(state));

  return {
    user: state.user,
    hasBooks: allBooksSelector(state).length > 0
  };
}

export default connect(mapStateToPropTypes, { logout: actions.logout })(
  TopNavigation
);
