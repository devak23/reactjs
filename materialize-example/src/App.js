import React, { Component } from 'react';
import Navbar from './components/Navbar';
import PhotoGrid from './components/PhotoGrid';
import Parallax from './components/Parallax';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import M from 'materialize-css';
import 'material-icons';

class App extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <React.Fragment>
        <header>
          <Navbar />
        </header>
        <PhotoGrid />
        <Parallax img='img/stars.jpg' id='paraStars' />
        <Services />
        <Parallax img='img/street.jpg' id='paraStreet' />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
