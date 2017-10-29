import React from "react";
import PropTypes from "prop-types";
import Carousel from "nuka-carousel";

const MyCarousel = ({ images }) => (
  <div>
    <Carousel
      dragging
      slidesToShow={3}
      slidesToScroll={3}
      edgeEasing="easeOutCirc"
      cellSpacing={10}
    >
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
