var SkillBox = React.createClass({
  render: function() {
    return (
      <div>
        <h2>{this.props.systemName}</h2>
        <SkillList data={this.props.data} />
      </div>
    );
  }
});
