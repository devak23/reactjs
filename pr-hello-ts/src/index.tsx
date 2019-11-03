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
      <IndianGreeter />
      <GermanGreeter />
      <JapaneseGreeter />
      <EnglishGreeter />
    </div>
  </div>,
  document.querySelector('#root')
);
