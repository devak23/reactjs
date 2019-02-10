import React from 'react';
import Copyright from './Copyright';

const Footer = () => {
  return (
    <footer className='page-footer grey darken-3'>
      <div className='container'>
        <div className='row'>
          <div className='col s12 l6'>
            <h5>About Me</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores tempora inventore fugit reiciendis!
              Molestiae excepturi dignissimos, asperiores provident quod illum suscipit vero doloribus! Explicabo
              facilis possimus nobis. Quos, nihil in.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor distinctio consequuntur, nisi repellendus
              unde, culpa vitae nostrum quae laudantium eos cumque assumenda. Dicta, modi nemo architecto saepe sint
              natus error?
            </p>
          </div>
          <div className='col s12 l4 offset-l1'>
            <h5>Connect</h5>
            <ul>
              <li>
                <a href='#!' className='grey-text text-lighten-3'>
                  Facebook
                </a>
              </li>
              <li>
                <a href='#!' className='grey-text text-lighten-3'>
                  Twitter
                </a>
              </li>
              <li>
                <a href='#!' className='grey-text text-lighten-3'>
                  Google+
                </a>
              </li>
              <li>
                <a href='#!' className='grey-text text-lighten-3'>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
