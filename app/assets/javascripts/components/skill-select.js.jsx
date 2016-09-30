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
  handleBack: function(e){
    e.preventDefault()
    this.props.showButton()
    var container = document.getElementById('addSkillTarget')
    ReactDOM.unmountComponentAtNode(container)
  },
  onChildChange: function(newState){
    ReactDOM.unmountComponentAtNode(document.getElementById('skillSelectTarget' + this.props.targetId))
    this.props.changeParent(newState)
    this.setState(newState)
  },
  update: function(){
    this.props.update()
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
        <a className="close-form" onClick={this.handleBack}>
          <span className="fa fa-close">
          </span>
        </a>
        <select name='name' onChange={this.changeState}>
          {options}
        </select>
        <LevelSelect update={this.props.update} changeParent={this.onChildChange} parent={'skill-select'} />
        <div id={'skillSelectTarget' + this.props.targetId }></div>
      </div>
    )
  }
})
