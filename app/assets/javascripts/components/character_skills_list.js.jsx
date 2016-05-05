var CharacterSkillsList = React.createClass({
  getInitialState: function() {
      return {
        characterSkills: this.props.characterSkills
      };
  },
  addSkill: function(e){
    e.preventDefault()
    var url = '/systems/' + this.props.data.system_id + '/skills/'
    var container = document.getElementById('addSkillTarget')
    var propData = this.propData()
    $.ajax({
      url: url,
      success: function(response){
        ReactDOM.render(
          <SkillSelect npcId={propData.npcId} changeParent={propData.onChildChanged} systemId={propData.systemId} knownSkills={propData.knownSkills} npcName={propData.npcName} skills={response} />, container
        )
      }
    })
  },
  onChildChanged: function(newState){
    this.setState(newState)
    this.props.changeParent(newState)
  },
  propData: function(){
    return {npcName: this.props.data.name,
            knownSkills: this.props.data.skills,
            npcId: this.props.data.id,
            systemId: this.props.data.system_id,
            onChildChanged: this.onChildChanged}
  },
  render: function() {
    var characterSkills = this.state.characterSkills.map(function(characterSkill, index){
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
