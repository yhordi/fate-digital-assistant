var SkillSelectBox = React.createClass({
  getInitialState: function(){
    return {data: this.props.data, skills: this.props.skills, systemId: this.props.systemId }
  },
  addSkillToNpc: function(e){
    e.preventDefault()
    var url = '/npcs/' + this.props.npcId + '/character_skills'
    var data = {level: this.state.level,
                name: this.state.name,
                system_id: this.state.systemId,
                skills: this.state.skills,
                npc_id: this.props.npcId}
    var container = document.getElementById('characterSkillsListTarget')
    var component = this
    $.ajax({
      url: url,
      method: 'POST',
      data: data,
      success: function(response){
        component.props.changeParent({data: response.data,
                                      characterSkills: response.character_skills,
                                      skills: response.Skill
                                    })
      },
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
       }.bind(this)
    })
  },
  componentDidMount: function(){
    this.setState({name: this.props.skills[0], level: "1"})
  },
  changeState: function(e) {
    var prop = e.target.name
    var value = e.target.value
    var npc = {}
    npc[prop] = value
    this.setState(npc)
  },
  onChildChange: function(newState){
    this.setState(newState)
  },
  render: function() {
    return(
      <div>
        <form onSubmit={this.addSkillToNpc}>
          <SkillSelect skills={this.state.skills} changeParent={this.onChildChange} />
          <input id="add-skill-submit" type='submit' />
        </form>
      </div>
    )
  }
});
