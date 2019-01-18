let React = require('react');
let CreateClass = require('create-react-class');
let Title = require('./components/Title');
let Poster = require('./components/Poster');
let Description = require('./components/Description');

let Show = CreateClass({
  getDefaultProps: function() {
    return {
      index: 0
    };
  },
  getInitialState: function() {
    return {
      currentIndex: this.props.index
    };
  },
  handleNext: function() {
    const totalShows = this.props.shows.length;
    this.setState(function(prevState) {
      return {
        currentIndex: (prevState.currentIndex + 1) % totalShows
      };
    });
  },
  handlePrevious: function() {
    const totalShows = this.props.shows.length;

    this.setState(function(prevState) {
      const newIndex = (prevState.currentIndex - 1) % totalShows;
      return {
        currentIndex: newIndex < 0 ? totalShows - 1 : newIndex
      };
    });
  },
  render: function() {
    const currentShow = this.props.shows[this.state.currentIndex];
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
});

module.exports = Show;
