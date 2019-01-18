let React = require('react');
let CreateClass = require('create-react-class');
let Title = require('./components/Title');
let Poster = require('./components/Poster');
let Description = require('./components/Description');
let ShowData = require('./shows.json');

let Show = CreateClass({
  getInitialState: function() {
    return {
      currentIndex: 0,
      currentShow: ShowData[0]
    };
  },
  handleNext: function() {
    let newIndex = this.state.currentIndex + 1;
    if (newIndex >= ShowData.length) {
      newIndex = 0;
    }
    this.setState({ currentIndex: newIndex, currentShow: ShowData[newIndex] });
  },
  handlePrevious: function() {
    let newIndex = this.state.currentIndex - 1;
    if (newIndex < 0) {
      newIndex = ShowData.length - 1;
    }
    this.setState({ currentIndex: newIndex, currentShow: ShowData[newIndex] });
  },
  render: function() {
    const { currentShow } = this.state;
    if (!currentShow) {
      return (
        <div className='text-center'>
          <h2>No Show Found!</h2>
        </div>
      );
    } else {
      return (
        <div className='container' style={{ marginTop: 40 }}>
          <div className='row'>
            <div className='col-sm-4'>
              <Poster poster={currentShow.poster} />
            </div>
            <div className='col-sm-8'>
              <Title title={currentShow.title} />
              <Description plot={currentShow.plot} rating={currentShow.imdbRating} creators={currentShow.creators} />
              <button className='btn btn-success' onClick={this.handleNext}>
                Next
              </button>
              <button className='btn btn-info' onClick={this.handlePrevious} style={{ marginLeft: 5 }}>
                Previous
              </button>
            </div>
            <div className='clear-both' />
          </div>
        </div>
      );
    }
  }
});

module.exports = Show;
