import React from 'react';

const Parallax = ({ img, id }) => {
  return (
    <div className='parallax-container'>
      <div className='parallax'>
        <img src={img} alt={img} id={id} className='responsive-img' />
      </div>
    </div>
  );
};

export default Parallax;
