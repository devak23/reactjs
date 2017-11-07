import React from "react";
import PropTypes from "prop-types";
import { Icon } from "semantic-ui-react";

// Emmet code: .ui.icon.message>i.icon.info+.content>.header+p

const Message = ({ header, content, type }) => {
  const getIcon = type =>
    type === "error"
      ? "warning sign"
      : type === "success" ? "thumbs up" : "info"; // info to be defaulted

  const getColor = type =>
    type === "error" ? "red" : type === "success" ? "green" : ""; //info wont have any color

  return (
    <div>
      <div className={`ui icon message ${getColor(type)}`}>
        <Icon name={getIcon(type)} />
        <div className="content">
          <div className="header">{header}</div>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

Message.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

Message.defaultProps = {
  header: "<<A message needs a header>>",
  content: "<<Content for the message component is expected>>",
  type: "info"
};

export default Message;
