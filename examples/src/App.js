import React from 'react';
import './App.css'
import 'semantic-ui-css/semantic.min.css';
import Banner from './components/banner';
import Counter from './components/counter'

const App = () => (
    <div className="container">
        <Banner message={'There are two important days in your life. The day when you were born and the day when you know why.'}
            color={'orange'}
        />
        <hr className="stylish" />
        <Counter count={150} />
        <hr className="stylish" />
    </div>
);

export default App;