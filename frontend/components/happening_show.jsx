var React = require('react'),
    HappeningStore = require('../stores/happening_store'),
    ClientActions = require('../actions/client_actions');

var HappeningShow = React.createClass({
  getInitialState: function () {
  var happeningId = this.props.params.happeningid;
  var happening = HappeningStore.find(happeningId) || {} ;
  return { happening: happening };
  },

  componentDidMount: function() {
    this.happeningListener = HappeningStore.addListener(this._onChange);
    ClientActions.fetchAllHappenings();
  },

  componentWillUnmount: function() {
    this.happeningListener.remove();
  },

  _onChange: function() {
    var happeningId = this.props.params.happeningid;
    var happening = HappeningStore.find(happeningId) || {} ;
    this.setState( { happening: happening});
  },

  render: function() {
    var happening = this.state.happening;
    return (
      <div>
        <h1>{happening.title}</h1>
        <body>
          <ul>
            <li>
              <div className='happening-attribute'>Game</div>
              <div className='happening-value'>{happening.game}</div>
            </li>
            <li>
              <div className='happening-attribute'>Date</div>
              <div className='happening-value'> {happening.date}</div>
            </li>
          </ul>
          <img className='happening-show-image' src={happening.image}/>
        </body>
      </div>
    );
  }

});

module.exports = HappeningShow;
