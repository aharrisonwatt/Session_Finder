var React = require('react'),
    TagStore = require('../stores/tag_store'),
    ClientActions = require('../actions/client_actions'),
    CurrentFilterState = require('../helpers/current_filter_state');

var HappeningIndexFilter = React.createClass({

  getInitialState: function () {
    return { tags: {} };
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

  updateFilter: function(event) {
    event.preventDefault();
    CurrentFilterState.setFilters(parseInt(event.currentTarget.value));
  },

  render: function() {
    var that = this;
      var tags = this.state.tags;
      var tagsButtons = Object.keys(tags).map(function(tagId){
        return <button key={tagId} onClick={that.updateFilter} value={tagId}>{tags[tagId]}</button>;
      });
    return (
      <div>
        {tagsButtons}
      </div>
    );
  }

});

module.exports = HappeningIndexFilter;
