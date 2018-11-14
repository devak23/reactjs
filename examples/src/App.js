import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Banner from './components/banner';
import Counter from './components/counter'

const App = () => (
    <div className="container">
        <Banner message={'Welcome to the lovely world of ReactJS'}
            color={'orange'}
        />
        <Counter count={150} />
    </div>
);

export default App;