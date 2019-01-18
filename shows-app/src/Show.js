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
  handleOnClick: function() {
    let newIndex = this.state.currentIndex + 1;
    if (newIndex >= ShowData.length) {
      newIndex = 0;
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
        <div className='text-center'>
          <Title title={currentShow.title} />
          <Poster poster={currentShow.poster} />
          <Description plot={currentShow.plot} rating={currentShow.imdbRating} />
          <button className='btn btn-primary' onClick={this.handleOnClick}>
            Next Show
          </button>
        </div>
      );
    }
  }
});

module.exports = Show;
