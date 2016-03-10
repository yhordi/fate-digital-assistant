var System = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    id: React.PropTypes.number,
    description: React.PropTypes.node
  },

  render: function() {
    return (
      <div className='system'>
        <a>{this.props.name}</a>
        <p>{this.props.description}</p>
      </div>
    );
  }
});
