var React = require('react'),
    Modal = require("react-modal"),
    SignupForm = require('../components/signup_form');


var SigninFormModal = React.createClass({
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
        <div className='signup-form-modal'>
          <button onClick={this.openModal}>Sign Up</button>

          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}>
            <SignupForm />
          </Modal>
        </div>
      );
    }
});

module.exports = SigninFormModal;
