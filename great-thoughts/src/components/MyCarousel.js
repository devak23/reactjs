import React from "react";
import PropTypes from "prop-types";
import Carousel from "nuka-carousel";
// import Button from "./Button";

const MyCarousel = ({ images }) => (
  <div>
    <Carousel cellAlign="center" dragging edgeEasing="easeOutCirc">
      {images &&
        images.length > 0 &&
        images.map(imgUrl => <img key={imgUrl} alt={imgUrl} src={imgUrl} />)}
    </Carousel>
  </div>
);

MyCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default MyCarousel;
