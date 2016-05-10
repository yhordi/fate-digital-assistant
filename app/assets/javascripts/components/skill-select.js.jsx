var SkillSelect = React.createClass({
  componentDidMount: function(){
    this.props.changeParent(this.state)
  },
  getInitialState: function(){
    return {skills: this.props.skills, level: '1', name: this.props.skills[0]}
  },
  changeState: function(e) {
    var prop = e.target.name
    var value = e.target.value
    var npc = {}
    npc[prop] = value
    this.setState(npc)
    this.props.changeParent(npc)
  },
  render: function(){
    var checkboxes = this.state.skills.map(function(skill, index) {
      return(
        <option value={skill} key={index}>{skill}</option>
      )
    });
    return(
      <div>
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
        <div id={'skillSelectTarget' + this.props.targetId }></div>
      </div>
    )
  }
})
