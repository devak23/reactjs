import React from "react";
import PropTypes from "prop-types";

const PriceInDollars = ({ priceInCents }) => (
  <span>
    $
    {priceInCents - Math.floor(priceInCents) !== 0
      ? priceInCents
      : priceInCents / 100}
  </span>
);

PriceInDollars.propTypes = {
  priceInCents: PropTypes.number.isRequired
};

export default PriceInDollars;
