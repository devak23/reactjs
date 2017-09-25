import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import rootReducer from './reducers';
import Results from './components/results';

const store = createStore(rootReducer);

function render() {
  ReactDOM.render(
    <div className="container">
      <App store={store} />
      <hr />
      <Results store={store} />
    </div>,
    document.getElementById('root'),
  );
}

store.subscribe(render);

render();
