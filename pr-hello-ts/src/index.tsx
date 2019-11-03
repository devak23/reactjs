import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import IndianGreeter from './indian-greeter';
import GermanGreeter from './german-greeter';
import JapaneseGreeter from './japanese-greeter';
import EnglishGreeter from './english-greeter';
import './index.css';

render(
  <div className='container'>
    <div className='jumbotron'>
      <h2>Greetings</h2>
    </div>
    <div className='mtop2'>
      <IndianGreeter name='Srinivas Ramanujam' toGreet='Abhay' />
      <GermanGreeter name='Albert Einstein' toGreet='Manik' />
      <JapaneseGreeter name='Goro Shimura' toGreet='Soham' />
      <EnglishGreeter name='George Boole' toGreet='Pralhad' />
    </div>
  </div>,
  document.querySelector('#root')
);
