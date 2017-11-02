import React from "react";
import PropTypes from "prop-types";

// Emmet code: a.ui.right.corner.label>i.empty.star.icon

const Featured = ({ featured, toggleFeatured }) => (
  <span>
    {featured ? (
      <div>
        <a onClick={toggleFeatured} className="ui right yellow corner label">
          <i className="star icon" />
        </a>
      </div>
    ) : (
      <div>
        <a onClick={toggleFeatured} className="ui right corner label">
          <i className="empty star icon" />
        </a>
      </div>
    )}
  </span>
);

Featured.propTypes = {
  featured: PropTypes.bool.isRequired,
  toggleFeatured: PropTypes.func.isRequired
};

Featured.defaultProps = {
  featured: false
};

export default Featured;
