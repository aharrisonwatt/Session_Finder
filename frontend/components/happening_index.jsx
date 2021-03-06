var React = require('react'),
    ClientActions = require('../actions/client_actions'),
    HappeningStore = require('../stores/happening_store'),
    HappeningIndexItem = require('./happening_index_item'),
    HappeningIndexFilter = require('./happening_index_filter');

var HappeningIndex = React.createClass({

  getInitialState: function () {
    return { happenings: [] };
  },

  _onChange: function(){
    this.setState({ happenings: HappeningStore.all() });
  },

  componentDidMount: function () {
    this.happeningListener = HappeningStore.addListener(this._onChange);
    ClientActions.fetchAllHappenings();
  },

  componentWillUnmount: function () {
    this.happeningListener.remove();
  },

  noHappenings: function(){
    if(Object.keys(this.state.happenings).length === 0){
      return(
        <h3 className='happening-index-warning'>No Sessions Found</h3>
      );
    }
  },

  render: function() {
    var happenings = this.state.happenings;
    return (
      <div className="happening-index">
        <HappeningIndexFilter />
        <div className="index-item-container">
          {this.noHappenings()}
          {
            Object.keys(happenings).map(function(happeningId){
              return (
                <HappeningIndexItem
                  key={happeningId}
                  happening={happenings[happeningId]} />
              );
            })
          }
        </div>
      </div>
    );
  }

});

module.exports = HappeningIndex;
