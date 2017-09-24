import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions/auth';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';
import LogoutLink from '../buttons/LogoutLink';
import { allBooksSelector } from '../../reducers/books';
import AddBookCTA from '../ctas/AddBookCTA';

const DashboardPage = ({ isConfirmed, logout, books }) => (
  <div style={{ margin: '20px 0' }}>
    {!isConfirmed && <ConfirmEmailMessage />}

    {books.length === 0 && <AddBookCTA />}
    <LogoutLink signOff={logout} />
  </div>
);

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
    books: allBooksSelector(state),
  };
}

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default connect(mapStateToProps, { logout: actions.logout })(
  DashboardPage,
);
