var SkillList = React.createClass({

  render: function() {
    var skillLinks = this.props.data.map(function(skill, index) {
      return (
        <SkillLink name={skill.name} data={skill} key={skill.id} />
      )
    }.bind(this));
    return (
      <div className='skillList'>
        {skillLinks}
      </div>
    );
  }
});
