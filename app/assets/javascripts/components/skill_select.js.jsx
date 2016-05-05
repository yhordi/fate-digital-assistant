var SkillSelect = React.createClass({
  getInitialState: function(){
    return {data: this.props.data, skills: this.props.skills, system_id: this.props.systemId }
  },
  addSkillToNpc: function(e){
    e.preventDefault()
    var url = '/npcs/' + this.props.npcId + '/character_skills'
    var data = {level: this.state.level,
                name: this.state.name,
                system_id: this.state.system_id,
                skills: this.state.skills,
                npc_id: this.props.npcId}
    var container = document.getElementById('characterSkillsListTarget')
    var component = this
    $.ajax({
      url: url,
      method: 'POST',
      data: data,
      success: function(response){
        console.log(response)
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
    this.setState({name: this.props.skills[0].name, level: "1"})
  },
  changeState: function(e) {
    var prop = e.target.name
    var value = e.target.value
    var npc = {}
    npc[prop] = value
    this.setState(npc)
  },
  render: function() {
    console.log('render')
    var checkboxes = this.state.skills.map(function(skill, index) {
      return(
        <option value={skill.name} key={index}>{skill.name}</option>
      )
    });
    return(
      <div>
        <div>
          <form onSubmit={this.addSkillToNpc}>
            <select name='name' onChange={this.changeState}>
              {checkboxes}
            </select>
            <select onChange={this.changeState} name='level'>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6+</option>
            </select>
            <input type='submit' />
          </form>
        </div>
      </div>
    )
  }
});
