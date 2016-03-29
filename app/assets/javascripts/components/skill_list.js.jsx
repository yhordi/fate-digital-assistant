var SkillList = React.createClass({

  render: function() {
    var skillLinks = this.props.data.map(function(skill, index) {
      return (
        <SkillLink systemName={this.props.systemName} name={skill.name} data={skill} key={skill.id} />
      )
    }.bind(this));
    return (
      <div className='skillList'>
        <ul className="list-hz">
          <li>
            Skills |
          </li>
          <li>
            <a href={"systems/" + this.props.id + "/skills/new"}> Create New</a>
          </li>
        </ul>
        <div className='m-top'>
          {skillLinks}
        </div>
      </div>
    );
  }
});
