var React = require('react'),
    Modal = require("react-modal"),
    HappeningForm = require('../components/happening_form'),
    LoginForm = require('../components/login_form');


var HappeningFormModal = React.createClass({
  getInitialState: function(){
      return({ modalOpen: false });
    },
    closeModal: function(){
      this.setState({ modalOpen: false });
    },
    openModal: function(){
        this.setState({ modalOpen: true });
    },

    modal: function(){
      if (this.props.currentUser){
        return (
          <Modal
            className='happening-modal'
            overlayClassName='modal-overlay'
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}>
            <HappeningForm closeModal={this.closeModal}/>
          </Modal>
        );
      }else{
        return (
          <Modal
            className='modal'
            overlayClassName='modal-overlay'
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}>
            <LoginForm error='true' closeModal={this.closeModal}/>
          </Modal>
        );
      }
    },

    render: function(){
      return(
        <div className='form-modal'>
          <button className='pure-button click-me'
                  onClick={this.openModal}>Create A Session</button>
          {this.modal()}
        </div>
      );
    }
});

module.exports = HappeningFormModal;
