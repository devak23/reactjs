import React from 'react';

const PhotoGrid = () => {
  return (
    <section className='container section scrollspy' id='photogrid'>
      <div className='row'>
        <div className='col s12 l5'>
          <img src='img/portrait.jpg' alt='img/portrait.jpg' className='responsive-img materialboxed' />
        </div>
        <div className='col s12 l6  offset-l1 raise'>
          <h2 className='indigo-text text-darken-4'>Portrait</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At vero, quasi libero ipsa et culpa eveniet ab
            deleniti quibusdam tempore, quisquam cumque dolorum saepe repellat. Magnam architecto minima repellendus
            vero.
          </p>
        </div>
      </div>
      <div className='row'>
        <div className='col s12 l5 push-l6'>
          <img src='img/city.jpg' alt='' className='responsive-img materialboxed' />
        </div>
        <div className='col s12 l5 offset-l1 raise pull-l6'>
          <h2 className='indigo-text text-darken-4'>Cityscapes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem accusamus ut nulla sequi saepe,
            repellat voluptatem similique laboriosam incidunt necessitatibus dolor pariatur. Vero, veniam! Fugit
            exercitationem sapiente veritatis? Eaque, repellendus!
          </p>
        </div>
      </div>
      <div className='row'>
        <div className='col s12 l5'>
          <img src='img/nature.jpg' alt='' className='responsive-img materialboxed' />
        </div>
        <div className='col s12 l6 offset-l1 raise'>
          <h2 className='indigo-text text-darken-4'>Nature</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, et nihil temporibus consectetur nemo optio.
            Alias totam, sit quaerat voluptatibus perspiciatis et. Ipsam nisi deleniti impedit officiis optio nam? Est!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoGrid;
