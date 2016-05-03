var React = require('react');
var ReactRouter = require('react-router'),
    hashHistory = ReactRouter.hashHistory;


var SplashPage = React.createClass({
  handleClick: function(){
    hashHistory.push('happenings');
  },

  render: function() {
    return (
      <div className='splash-page'>
        <img className='splash-page-image' src='http://i.imgur.com/5g7BNvu.jpg' />
        <div className='splash-page-container'>
          <h1 className='splash-page-welcome-logo'>Welcome Logo</h1>
          <h3 className='splash-page-welcome-tag'>Welcome Tagline</h3>
          <button onClick={this.handleClick}>Find A Session</button>
        </div>
      </div>
    );
  }
});

module.exports = SplashPage;
