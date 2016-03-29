var SkillList = React.createClass({

  render: function() {
    debugger
    var skillLinks = this.props.data.map(function(skill, index) {
      return (
        <SkillLink systemName={this.props.systemName} name={skill.name} data={skill} key={skill.id} />
      )
    }.bind(this));
    return (
      <div className='skillList'>
        {skillLinks}
      </div>
    );
  }
});
