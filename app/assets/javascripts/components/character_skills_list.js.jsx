var CharacterSkillsList = React.createClass({
  getInitialState: function() {
      return {
        characterSkills: this.props.characterSkills
      };
  },
  addSkill: function(e){
    e.preventDefault()
    this.hideButton()
    var url = '/systems/' + this.props.data.system_id + '/skills/'
    var container = document.getElementById('addSkillTarget')
    $.ajax({
      url: url,
      data: {'names': true},
      success: function(response){
        ReactDOM.render(
          <SkillSelectBox npcId={this.props.data.id} changeParent={this.onChildChanged} skills={response} />, container
        )
      }.bind(this)
    })
  },
  hideButton: function(){
    var button = document.getElementById('addSkill')
    button.className += " hidden"
  },
  onChildChanged: function(newState){
    this.setState(newState)
    // this.props.changeParent(newState)
  },
  render: function() {
    var characterSkills = this.state.characterSkills.map(function(characterSkill, index) {
      return (
        <CharacterSkill name={characterSkill.name} npcId={this.props.data.id} level={characterSkill.level} changeParent={this.onChildChanged} systemId={this.props.systemId} data={characterSkill} key={index} />
      )
    }.bind(this))
    return(
    <div className="col span-9-t">
      <h3>
        Skills
      </h3>
      <div>
        <button id="addSkill" onClick={this.addSkill}>Add Skill to NPC</button>
      </div>
      <div id='addSkillTarget'></div>
      <ul className='list-group' id="skillsList">
        {characterSkills}
      </ul>
    </div>
    );
  }
});
