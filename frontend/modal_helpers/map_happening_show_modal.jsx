var React = require('react'),
    Modal = require("react-modal"),
    HappeningShow = require('../components/happening_show');


var MapHappeningShowModal = React.createClass({
  getInitialState: function(){
      return({ modalOpen: false });
    },
    closeModal: function(){
      this.setState({ modalOpen: false });
    },

    render: function(){
      debugger;
      var happening = this.props.happenings[this.state.happeningId];
      return(
        <Modal
          className='modal'
          overlayClassName='modal-overlay'
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}>
          <HappeningShow happening={happening} closeModal={this.closeModal}/>
        </Modal>
      );
    }
});

MapHappeningShowModal.openModal = function(happeningId){
  this.setState(
    {
      modalOpen: true,
      happeningId: happeningId
    });
};

module.exports = MapHappeningShowModal;
