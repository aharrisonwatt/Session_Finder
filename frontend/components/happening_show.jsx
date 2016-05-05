var React = require('react'),
    HappeningStore = require('../stores/happening_store'),
    ClientActions = require('../actions/client_actions');

var HappeningShow = React.createClass({
  getInitialState: function () {
    return { happening: undefined };
  },

  componentDidMount: function() {
    this.happeningListener = HappeningStore.addListener(this._onChange);
    ClientActions.fetchSingleHappening(this.props.happening.id);
  },

  componentWillUnmount: function() {
    this.happeningListener.remove();
  },

  _onChange: function() {
    var happeningId = this.props.happening.id;
    var happening = HappeningStore.find(happeningId) || {} ;
    this.setState( { happening: happening});
  },

  render: function() {
    if (this.state.happening){
      var happening = this.state.happening;
      var images = happening.image.map(function(image){
        return <img key={image.id} className='happening-show-image' src={image.image_url}/>;
      });
      var tags = happening.tags.map(function(tag){
        return <div key={tag.id} className='happening-value'>{tag.name}</div>;
      });
      var title = happening.title;
      var body = happening.body;
      var date = happening.date;
    }
    return (
      <div className='happening-show-container'>
        <h1 className='happening-show-title'>{title}</h1>
        <section>
          <div className='happening-show-description'>{body}</div>
          <ul>
            <li>
              <div className='happening-show-tags'>Game</div>
              {tags}
            </li>
            <li>
              <div className='happening-attribute'>Date</div>
              <div className='happening-value'>{date}</div>
            </li>
          </ul>
          {images}
        </section>
      </div>
    );
  }

});

module.exports = HappeningShow;
