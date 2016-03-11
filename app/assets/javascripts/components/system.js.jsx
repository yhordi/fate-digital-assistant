var System = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    id: React.PropTypes.number,
    description: React.PropTypes.node
  },
  getInitialState: function(){
    return data = {system: this.props}
  },
  render: function() {
    return (
      <div className='system'>
        <h4><a href={'/systems/' + this.props.id}>{this.props.name}</a></h4>
        <p>{this.props.description}</p>
      </div>
    );
  }
});
