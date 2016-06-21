var SkillSelectBox = React.createClass({
  getInitialState: function(){
    return {data: this.props.data, skills: this.props.skills, systemId: this.props.systemId }
  },
  addSkillToNpc: function(data){
    var url = '/npcs/' + this.props.npcId + '/character_skills'
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
                                    });
        this.showButton()
        ReactDOM.unmountComponentAtNode(document.getElementById('addSkillTarget'))
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
       }.bind(this)
    })
  },
  componentDidMount: function(){
    this.setState({name: this.props.skills[0], level: "1"})
  },
  changeParent: function(newState){
    this.setState(newState)
    this.props.changeParent(newState)
  },
  changeState: function(e) {
    var prop = e.target.name
    var value = e.target.value
    var npc = {}
    npc[prop] = value
    this.setState(npc)
  },
  handleSubmit: function(e){
    e.preventDefault()
    var data = {level: this.state.level,
                name: this.state.name,
                system_id: this.state.systemId,
                skills: this.state.skills,
                npc_id: this.props.npcId}
    if(this.props.button == "Update Skill") {
      this.update()
    } else {
      this.addSkillToNpc(data)
    }
  },
  onChildChange: function(newState){
    this.changeParent(newState)
    this.setState(newState)
  },
  showButton: function(){
    var button = document.getElementById('addSkill')
    button.className = ""
  },
  update: function(){
    var url = '/npcs/' + this.props.npcId + '/character_skills/' + this.props.id
    var data = {level: this.state.level,
                name: this.state.name}
    $.ajax({
      url: url,
      data: data,
      method: 'PUT',
      success: function(response){
        console.log(response)
      }
    })
  },
  render: function() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <SkillSelect skill={this.props.skill} changeParent={this.onChildChange} skills={this.state.skills}  />
          <input id="add-skill-submit" type='submit' value={this.props.button} />
        </form>
      </div>
    )
  }
});
