var SkillList = React.createClass({

  render: function() {
    var skillLinks = this.props.data.map(function(skill, index) {
      return (
        <SkillLink systemName={this.props.systemName} name={skill.name} data={skill} key={skill.id} />
      )
    }.bind(this));
    return (
      <div>
        <div className='skillList'>
          {skillLinks}
        </div>
        <div className="skillFormTarget co span-7-t"></div>
      </div>
    );
  }
});
