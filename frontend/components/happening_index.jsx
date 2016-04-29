var React = require('react'),
    ClientActions = require('../actions/client_actions'),
    HappeningStore = require('../stores/happening_store'),
    HappeningIndexItem = require('./happening_index_item');

var HappeningIndex = React.createClass({

  getInitialState: function () {
    return { happenings: [] };
  },

  _onChange: function(){
    this.setState({ happenings: HappeningStore.all() });
  },

  componentDidMount: function () {
    console.log("Happeing_index Mounting");
    this.happeningListener = HappeningStore.addListener(this._onChange);
    ClientActions.fetchAllHappenings();
  },

  componentWillUnmount: function () {
    this.happeningListener.remove();
  },

  render: function() {
    var happenings = this.state.happenings;
    return (
      <div className="happening-index">
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
    );
  }

});

module.exports = HappeningIndex;
