var React = require('react'),
    Modal = require("react-modal"),
    HappeningForm = require('../components/happening_form');


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

    render: function(){
      return(
        <div className='form-modal'>
          <button className='pure-button'
                  onClick={this.openModal}>Create A Session</button>
          <Modal
            className='happening-modal'
            overlayClassName='modal-overlay'
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}>
            <HappeningForm />
          </Modal>
        </div>
      );
    }
});

module.exports = HappeningFormModal;
