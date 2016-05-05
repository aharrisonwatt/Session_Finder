var React = require('react'),
    Modal = require("react-modal"),
    HappeningShow = require('../components/happening_show');


var HappeningShowModal = React.createClass({
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
      var happening = this.props.happening;
      return(
        <div className='happening-show-modal'>
          <button className='pure-button' onClick={this.openModal}>View Details</button>

          <Modal
            className='modal'
            overlayClassName='modal-overlay'
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}>
            <HappeningShow happening={happening} closeModal={this.closeModal}/>
          </Modal>
        </div>
      );
    }
});

module.exports = HappeningShowModal;
