var React = require('react'),
    Modal = require("react-modal"),
    LoginForm = require('../components/login_form');


var LoginFormModal = React.createClass({
  getInitialState: function(){
      return({ modalOpen: false });
    },
    closeModal: function(){
      this.setState({ modalOpen: false });
    },
    openModal: function(){
      this.setState({ modalOpen: true });
    },

    render: function(){
      return(
        <div className='form-modal'>
          <button className='pure-button'
            onClick={this.openModal}>Log In</button>

          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}>
            <LoginForm />
          </Modal>
        </div>
      );
    }
});

module.exports = LoginFormModal;
