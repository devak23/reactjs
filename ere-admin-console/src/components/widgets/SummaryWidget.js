import React, {Component, Fragment} from 'react';

class SummaryWidget extends Component {
  render() {
    return (
      <Fragment>
        <div className="card horizontal">
          <div className="card-image">
            <i className='material-icons large'>insert_drive_file</i>
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.</p>
            </div>
            <div className="card-action">
              <a href="#!">This is a link</a>
            </div>
          </div>
        </div>
    </Fragment>
    )
  }
}

export default SummaryWidget;