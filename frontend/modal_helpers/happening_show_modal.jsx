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
      return(
        <div className='happening-show-modal'>
          <button onClick={this.openModal}>Create A Session</button>

          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}>
            <HappeningShow />
          </Modal>
        </div>
      );
    }
});

module.exports = HappeningShowModal;
