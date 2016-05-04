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
    CurrentFilterState.setFilters(parseInt(event.currentTarget.value));
  },

  render: function() {
    var that = this;
      var tags = this.state.tags;
      var tagsButtons = Object.keys(tags).map(function(tagId){
        return <li
                className='filter-item'
                key={tagId}>
                <h3 className='filter-item-header'>{tags[tagId]}</h3>
                <input
                  value={tagId}
                  onClick={that.updateFilter}
                  type='checkbox'
                  className='filter-item-input' />
              </li>;
      });
    return (
      <div className='filter-item-container'>
        <h3 className='filter-item-list-header'>Filter Results by Game</h3>
        <ul className='filter-item-list'>
          {tagsButtons}
        </ul>
      </div>
    );
  }

});

module.exports = HappeningIndexFilter;
