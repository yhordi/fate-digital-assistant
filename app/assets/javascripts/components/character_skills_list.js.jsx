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
  handleDelete: function(data) {
    var id = data.id
    var url = '/character_skills/' + id
    var data = {id: id, npc_id: data.npc_id}
    $.ajax({
      url: url,
      data: data,
      method: 'DELETE',
      success: function(response){
        ReactDOM.render(<StressBox maxPhysicalStress={response.data.max_physical_stress} maxMentalStress={response.data.max_mental_stress} mentalStress={response.data.mental_stress} physicalStress={response.data.physical_stress} />, document.getElementById('stress-container'))
        this.setState(response)
      }.bind(this)
    })
  },
  update: function(level, url, id){
    $.ajax({
      url: url,
      data: level,
      method: 'PUT',
      success: function(response){
        this.setState({characterSkills: response})
      }.bind(this)
    })
  },
  hideButton: function(){
    var button = document.getElementById('addSkill')
    button.className += " hidden"
  },
  onChildChanged: function(newState){

    this.setState(newState)
    this.props.changeParent(newState)
  },
  render: function() {
    var characterSkills = this.state.characterSkills.map(function(characterSkill, index) {
      return (
        <CharacterSkill delete={this.handleDelete} name={characterSkill.name} npcId={this.props.data.id} level={characterSkill.level} update={this.update} changeParent={this.onChildChanged} systemId={this.props.systemId} data={characterSkill} key={index} />
      )
    }.bind(this))
    return(
    <div className="col span-9-t">
      <h3>
        Skills
      </h3>
      <div>
        <button className='btn' id="addSkill" onClick={this.addSkill}>Add Skill to NPC</button>
      </div>
      <div className="well well-lg">
        <div id='addSkillTarget'></div>
        <ul className='list-group' id="skillsList">
          {characterSkills}
        </ul>
      </div>
    </div>
    );
  }
});
