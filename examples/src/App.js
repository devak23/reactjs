import React from 'react';
import './App.css'
import 'semantic-ui-css/semantic.min.css';
import Banner from './components/banner';
import Counter from './components/counter';
import LoginPage from './components/login/loginPage';
import AddressWidget from './components/addressWidget/addressPage';

const App = () => (
    <div className="ui page grid">
        <div className="three column row">
            <div className="column">
                <Banner message={'There are two important days in your life. The day when you were born and the day when you know why.'}
                    color={'orange'}
                    author={'Mark Twain'}
                />
            </div>
            <div className="column">
                <Counter count={150} />
            </div>
            <div className="column">
                <LoginPage />
            </div>
        </div>
        <div className="three column row">
            <hr className="stylish" />
        </div>
        <div className="row">
            <AddressWidget />
        </div>
    </div>
);

export default App;