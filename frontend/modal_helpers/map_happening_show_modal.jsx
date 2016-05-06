var React = require('react'),
    Modal = require("react-modal"),
    HappeningShow = require('../components/happening_show');


var MapHappeningShowModal = React.createClass({

    render: function(){
      var happening = this.props.happening;
      return(
        <Modal
          className='modal'
          overlayClassName='modal-overlay'
          isOpen={this.props.isOpen}
          onRequestClose={this.props.onClose}>
          <HappeningShow happening={happening} closeModal={this.closeModal}/>
        </Modal>
      );
    }
});


module.exports = MapHappeningShowModal;
