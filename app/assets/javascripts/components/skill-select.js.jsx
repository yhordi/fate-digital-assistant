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
  onChildChange: function(newState){
    this.props.changeParent(newState)
    this.setState(newState)
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
        <LevelSelect changeParent={this.onChildChange} />
        <div id={'skillSelectTarget' + this.props.targetId }></div>
      </div>
    )
  }
})
