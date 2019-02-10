import React from 'react';

const Services = () => {
  return (
    <section className='section container' id='services'>
      <div className='row'>
        <div className='col s12 l4'>
          <h3 className='indigo-text text-darken-4'>What I do</h3>
          <p>
            Commodo Lorem et elit nisi anim adipisicing veniam labore velit aliqua ut est laborum labore. Culpa cillum
            pariatur adipisicing voluptate minim proident mollit dolore minim ullamco velit incididunt qui nostrud. Qui
            officia veniam incididunt aute quis excepteur. Amet ad qui tempor est.
          </p>
          <p>
            Occaecat veniam laboris Lorem in amet. Aliqua id laboris laborum velit fugiat pariatur exercitation mollit.
            Laboris duis cupidatat qui dolore deserunt officia. Magna fugiat consectetur amet est. Nisi duis nisi aute
            occaecat velit non cupidatat exercitation. Culpa ea veniam excepteur ea excepteur consequat eu id
            adipisicing. Ea veniam Lorem ea consequat eu nulla commodo.
          </p>
        </div>
        <div className='col s12 l5 offset-l2'>
          <ul className='tabs'>
            <li className='tab col s6'>
              <a href='#photography' className='indigo-text text-darken-4'>
                Photography
              </a>
            </li>
            <li className='tab col s6'>
              <a href='#editing' className='indigo-text text-darken-4'>
                Editing
              </a>
            </li>
          </ul>
          <div id='photography'>
            <p className='flow-text indigo-text text-darken-4'>PHOTOGRAPHY</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium beatae voluptatibus deleniti
              veritatis eius est. Minus voluptatum cum repudiandae dolore veniam. Sit nulla quod unde exercitationem
              voluptatem beatae natus dolore?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quibusdam ea rerum magnam impedit optio
              illum. Aliquam laudantium, odio debitis repudiandae modi non vero cumque sapiente explicabo, libero nisi
              ipsa.
            </p>
          </div>
          <div id='editing'>
            <p className='flow-text indigo-text text-darken-4'>EDITING</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quam labore. Quibusdam reiciendis
              voluptatem consequatur vel voluptas atque eligendi, amet sint quisquam magnam praesentium autem harum nisi
              totam reprehenderit aliquid?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque accusantium dolorem esse, reiciendis ad
              aliquam sint eius fugit dolor alias illo ipsam deleniti excepturi cum inventore corporis nemo neque
              ducimus!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
