var React = require('react');

var ReactRouter = require('react-router'),
    hashHistory = ReactRouter.hashHistory;

var HappeningForm = React.createClass({
  getInitialState: function(){
    return {
      title: '',
      body: '',
      game: '',
      image: '',
      address: ''
    };
  },

  handleSubmit: function(){

  },

  updateTitle: function(event){
    this.setState({ title: event.target.value});
  },

  updateBody: function(event){
    this.setState({ body: event.target.value});
  },

  updateImage: function(event){
    this.setState({ image: event.target.value});
  },

  updateAdress: function(event){
    this.setState({ address: event.target.value});
  },

  navigateToSearch: function(){
    hashHistory.push("/");
  },

  handleCancel: function(event){
    event.preventDefault();
    this.navigateToSearch();
  },

  render: function() {
    return (
      <div>
        <h3>Create A Session</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Title:
            <input
              type="text"
              value={this.state.title}
              onChange={this.updateTitle} />
          </label>
          <label>Description:
            <input
              type="text"
              value={this.state.body}
              onChange={this.updateBody} />
          </label>
          <label>image url:
            <input
              type="text"
              value={this.state.image}
              onChange={this.updateImage} />
          </label>
          <label>Address:
            <input
              type="text"
              value={this.state.address}
              onChange={this.updateAddress} />
          </label>
          <input type="submit" value="create bench"/>
        </form>
        <button onClick={this.handleCancel}>Cancel</button>
      </div>
    );
  }

});

module.exports = HappeningForm;
