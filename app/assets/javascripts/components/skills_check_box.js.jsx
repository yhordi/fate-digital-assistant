var SkillsCheckBox = React.createClass({
  render: function() {
    return(
      <option value={this.props.name}>{this.props.name}</option>
    );
  }
});
