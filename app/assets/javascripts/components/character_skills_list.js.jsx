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
        this.setState(response)
        this.props.changeParent(response)
      }.bind(this)
    })
  },
  update: function(level, url, id){
    $.ajax({
      url: url,
      data: level,
      method: 'PUT',
      success: function(response){
        this.props.changeParent(response)
      }.bind(this)
    })
  },
  hideButton: function(){
    var button = document.getElementById('add-skill')
    button.className += " hidden"
  },
  onChildChanged: function(newState){
    this.setState(newState)
    this.props.changeParent(newState)
  },
  render: function() {
    var characterSkills = this.state.characterSkills.map(function(characterSkill, index) {
      return (
        <CharacterSkill id={index} delete={this.handleDelete} name={characterSkill.name} npcId={this.props.data.id} level={characterSkill.level} update={this.update} changeParent={this.onChildChanged} systemId={this.props.systemId} data={characterSkill} key={index} />
      )
    }.bind(this))
    return(
    <div className="col">
      <h3>
        Skills <a className='fa fa-plus' id="add-skill" onClick={this.addSkill}></a>
      </h3>
      <div id='addSkillTarget'></div>
      <div className="well well-lg">
        <ul className='list-group' id="skillsList">
          {characterSkills}
        </ul>
      </div>
    </div>
    );
  }
});
