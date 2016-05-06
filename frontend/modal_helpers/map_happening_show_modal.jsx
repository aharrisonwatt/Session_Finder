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

    openModal: function(happening){
      this.setState(
        {
          modalOpen: true,
          happening: happening
        });
    },

    render: function(){
      if (this.props[0]){
        this.openModal(this.props.happening);
      }
      var happening = this.state.happening;
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


module.exports = MapHappeningShowModal;
