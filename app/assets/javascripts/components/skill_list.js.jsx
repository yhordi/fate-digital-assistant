var SkillList = React.createClass({
  handleNew: function(e){
    e.preventDefault();
    var container = document.getElementById('container')
    ReactDOM.unmountComponentAtNode(container)
    ReactDOM.render(
      <SkillForm data={[]} systemName={this.props.systemName} button={"Create Skill"} systemId={this.props.systemId} />, container
    )
  },
  render: function() {
    var skillLinks = this.props.data.map(function(skill, index) {
      return (
        <SkillLink systemName={this.props.systemName} name={skill.name} data={skill} key={skill.id} />
      )
    }.bind(this));
    return (
      <div>
      <div className='skillList col span-5-t'>
        <ul className="list-hz">
          <li>
            Skills |
          </li>
          <li>
            <a onClick={this.handleNew} href={"systems/" + this.props.id + "/skills/new"}> Create New</a>
          </li>
        </ul>
        <div className='m-top'>
          {skillLinks}
        </div>
      </div>
      <div className="skillFormTarget co span-7-t"></div>
      </div>
    );
  }
});
