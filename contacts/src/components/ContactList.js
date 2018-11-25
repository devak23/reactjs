import React from "react";
import PropTypes from "prop-types";

const ContactList = ({ contacts, filterText }) => {
  const filteredContacts = contacts.filter(
    contact => contact.name.indexOf(filterText) !== -1
  );
  return (
    <ul>
      {filteredContacts.map(con => (
        <li key={con.email}>
          <img src={con.thumbnail} role="presentation" alt="presentation" />
          <div className="contactData">
            <strong>{con.name} </strong> <br /> <small>{con.email}</small>
          </div>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filterText: PropTypes.string.isRequired
};

export default ContactList;
