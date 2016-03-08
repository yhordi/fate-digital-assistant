var System = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    id: React.PropTypes.number,
    description: React.PropTypes.node
  },

  render: function() {
    return (
      <div>
        <a href={'systems/' + this.props.data.id}>{this.props.data.name}</a>
        <p>{this.props.data.description}</p>
      </div>
    );
  }
});
