var React = require('react'),
    LoginFormModal = require('../modal_helpers/login_form_modal');

var ReactRouter = require('react-router'),
    hashHistory = ReactRouter.hashHistory;

var NavigationBar = React.createClass({
  handleClick: function(){
    hashHistory.push('/');
  },

  render: function() {
    return (
      <div  className='navbar' >
        <h1 onClick={this.handleClick}>Session Finder</h1>
        <LoginFormModal />
      </div>
    );
  }

});

module.exports = NavigationBar;
