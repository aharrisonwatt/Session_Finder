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
        <div className='splash-page-container'>
          <h2 className='splash-page-welcome-logo'>Session Finder</h2>
          <h3 className='splash-page-welcome-tag'>Get Your Game On</h3>
          <button onClick={this.handleClick}>Find A Session</button>
        </div>
      </div>
    );
  }
});

module.exports = SplashPage;
