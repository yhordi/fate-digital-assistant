var Skill = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    description: React.PropTypes.node
  },

  render: function() {
    return (
      <div id={'skill' + this.props.data.id}>
        <a>{this.props.data.name}</a>
        <p>{this.props.data.description}</p>
      </div>
    );
  }
});
