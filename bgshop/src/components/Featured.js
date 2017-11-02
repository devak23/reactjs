import React from "react";
import PropTypes from "prop-types";

// Emmet code: a.ui.right.corner.label>i.empty.star.icon

const Featured = ({ featured, toggleFeatured, gameId }) => (
  <span>
    {featured ? (
      <div>
        <a
          onClick={() => toggleFeatured(gameId)}
          className="ui right yellow corner label"
        >
          <i className="star icon" />
        </a>
      </div>
    ) : (
      <div>
        <a
          onClick={() => toggleFeatured(gameId)}
          className="ui right corner label"
        >
          <i className="empty star icon" />
        </a>
      </div>
    )}
  </span>
);

Featured.propTypes = {
  featured: PropTypes.bool.isRequired,
  toggleFeatured: PropTypes.func.isRequired,
  gameId: PropTypes.number.isRequired
};

Featured.defaultProps = {
  featured: false
};

export default Featured;
