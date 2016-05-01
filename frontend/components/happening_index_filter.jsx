var React = require('react'),
    TagStore = require('../stores/tag_store'),
    ClientActions = require('../actions/client_actions');

var HappeningIndexFilter = React.createClass({

  getInitialState: function () {
    return { tags: [] };
  },

  _onChange: function(){
    this.setState({ tags: TagStore.all() });
  },

  componentDidMount: function () {
    this.tagListener = TagStore.addListener(this._onChange);
    ClientActions.fetchAllTags();
  },

  componentWillUnmount: function () {
    this.tagListener.remove();
  },

  updateFilter: function() {

  },

  render: function() {
    var tags = this.state.tags.map(function(tag, index){
      return <button key={index} onClick={this.updateFilter}>{tag}</button>;
    });
    return (
      <div>
        {tags}
      </div>
    );
  }

});

module.exports = HappeningIndexFilter;
