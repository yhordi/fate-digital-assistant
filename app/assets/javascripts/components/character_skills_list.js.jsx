var CharacterSkillsList = React.createClass({
  addSkill: function(e){
    e.preventDefault()
    var url = '/systems/' + this.props.data.system_id + '/skills/'
    var container = document.getElementById('addSkillTarget')
    var npcName = this.props.data.name
    var knownSkills = this.props.data.skills
    var npcId = this.props.data.id
    var systemId = this.props.data.system_id
    var onChildChanged = this.onChildChanged
    $.ajax({
      url: url,
      success: function(response){
        ReactDOM.render(
          <SkillSelect npcId={npcId} changeParent={onChildChanged} systemId={systemId} knownSkills={knownSkills} npcName={npcName} skills={response} />, container
        )
      }
    })
  },
  onChildChanged: function(newState){
    this.props.changeParent(newState)
  },
  render: function() {
    var characterSkills = this.props.skills.map(function(characterSkill, index){
      return (
        <CharacterSkill data={characterSkill} key={index} />
      )
    })
    return(
    <div className="col span-9-t">
      <h3>
        Skills
      </h3>
      <div>
        <button onClick={this.addSkill}>Add Skill to NPC</button>
      </div>
      <div id='addSkillTarget'></div>
      <ul className='no-bullet' id="skillsList">
        {characterSkills}
      </ul>
    </div>
    );
  }
});
