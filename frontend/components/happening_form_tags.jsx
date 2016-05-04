var React = require('react'),
    TagStore = require('../stores/tag_store'),
    ClientActions = require('../actions/client_actions');

var filters = [];

var HappeningFormTags = React.createClass({

  getInitialState: function () {
    return { tags: {} };
  },

  setFilters: function(tagId){
    var index = filters.indexOf(tagId);
    if(index === -1){
      filters.push(tagId);
    }else {
      filters.splice(index, 1);
    }
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
    this.setFilters(parseInt(event.currentTarget.value));
  },

  render: function() {
    var that = this;
      var tags = this.state.tags;
      var tagsButtons = Object.keys(tags).map(function(tagId){
        return <button key={tagId} onClick={that.updateFilter} value={tagId}>{tags[tagId]}</button>;
      });
    return (
      <div className="happening-form-tags">
        {tagsButtons}
      </div>
    );
  }

});

HappeningFormTags.getTags = function(){
  return {tags: filters};
};

module.exports = HappeningFormTags;
