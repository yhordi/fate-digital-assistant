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
    var skill = {}
    skill[prop] = value
    this.setState(skill)
    this.props.changeParent(skill)
  },
  render: function(){
    var component = this
    var options = this.state.skills.map(function(skill, index) {
      if(component.props.skill == skill) {
        return(
          <option selected="selected" value={skill} key={index}>{skill}</option>
        )
        this.setState({name: skill})
        this.props.changeParent({name: skill})
      } else {
        return(
          <option value={skill} key={index}>{skill}</option>
        )
      }
    });
    return(
      <div>
        <select name='name' onChange={this.changeState}>
          {options}
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
