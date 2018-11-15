import React from 'react';
import './App.css'
import 'semantic-ui-css/semantic.min.css';
import Banner from './components/banner';
import Counter from './components/counter';
import LoginPage from './components/login/loginPage';

const App = () => (
    <div className="ui container">
        <div className="ui grid">
            <div className="four wide column">
                <Banner message={'There are two important days in your life. The day when you were born and the day when you know why.'}
                    color={'orange'}
                    author={'Mark Twain'}
                />
            </div>
            <div className="six wide column">
                <Counter count={150} />
            </div>
            <div className="six wide column">
                <LoginPage />
            </div>
        </div>
        <hr className="stylish" />
    </div>
);

export default App;