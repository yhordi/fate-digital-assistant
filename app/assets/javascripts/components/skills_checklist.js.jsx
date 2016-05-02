var SkillsChecklist = React.createClass({
  addSkillToNpc: function(e){
    e.preventDefault()
    var url = '/npcs/' + this.props.npcId + '/character_skills'
    var data = this.state
    $.ajax({
      url: url,
      method: 'POST',
      data: data,
      success: function(response){
        console.log(response)
      }
    })
  },
  componentDidMount: function(){
    this.setState({name: this.props.data[0].name, level: "1"})
  },
  updateState: function(e) {
    var prop = e.target.name
    var value = e.target.value
    var npc = {}
    npc[prop] = value
    this.setState(npc)
  },
  render: function() {
    var checkboxes = this.props.data.map(function(skill, index) {
      return(
        <option value={skill.name} key={index}>{skill.name}</option>
      )
    });
    return(
      <div>
        <div>
          <form onSubmit={this.addSkillToNpc}>
            <select name='name' onChange={this.updateState}>
              {checkboxes}
            </select>
            <select onChange={this.updateState} name='level'>
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
