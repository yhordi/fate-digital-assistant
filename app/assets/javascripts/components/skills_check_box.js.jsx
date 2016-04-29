var SkillsCheckBox = React.createClass({

  render: function() {
    return(
      <li>
        <input value={this.props.name}type='checkbox'/>
        {this.props.name}
      </li>
    );
  }
});
