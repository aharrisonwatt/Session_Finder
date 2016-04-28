var React = require('react'),
    ClientActions = require('../actions/client_actions'),
    HappeningStore = require('../stores/happening_store');

var HappeningIndex = React.createClass({

  getInitialState: function () {
    return { happenings: [] };
  },

  _onChange: function(){
    this.setState({ happenings: HappeningStore.all() });
  },

  componentDidMount: function () {
    this.happeningListener = HappeningStore.addListener(this._onChange);
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
              <ul key={happeningId}> {happenings[happeningId].title}
                <li>{happenings[happeningId].body}</li>
                <li>{happenings[happeningId].game}</li>
                <li>{happenings[happeningId].date}</li>
              </ul>
            );
          })
        }
      </div>
    );
  }

});

module.exports = HappeningIndex;
