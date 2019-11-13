import React from 'react';
import M from 'materialize-css';
import 'material-icons';

class App extends React.Component {
  componentDidMount() {
    M.Collapsible.init(document.querySelectorAll('.collapsible.expandable'), {
      accordion: false
    });
  }

  handleClick = e => {
    console.log('button is clicked');
    e.stopPropogation();
  }


  render() {
    return (
      <ul id='collapsible' className='collapsible expandable'>
        <li>
          <div className='collapsible-header'>
            <i className='material-icons'>filter_drama</i>Clicking the
            <label className='test'>
              <input type='checkbox' />
              <span></span>
            </label>
            <span className='testbtn'>
              <a className='right waves-effect waves-light btn-small' onClick={this.handleClick}>
                Click Me
              </a>
            </span>
          </div>
          <div className='collapsible-body'>
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </li>
        <li>
          <div className='collapsible-header'>
            <i className='material-icons'>place</i>Checkbox also opens the collapsible
            <label className='test'>
              <input type='checkbox' />
              <span></span>
            </label>
            <span className='testbtn'>
              <a className='right waves-effect waves-light btn-small' onClick={this.handleClick}>
                Click Me
              </a>
            </span>
          </div>
          <div className='collapsible-body'>
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </li>
      </ul>
    );
  }
}

export default App;
