var CharacterSkillForm = React.createClass({
  render: function() {
    return(
      <select>
        <option value={this.props.name}>{this.props.name}</option>
      </select>
    );
  }
});
