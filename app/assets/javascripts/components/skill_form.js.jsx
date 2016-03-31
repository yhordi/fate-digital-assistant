var SkillForm = React.createClass({
  getInitialState: function() {
    return {system_id: this.props.systemId}
  },
  handleSubmit: function(e) {
    e.preventDefault()
    var url = '/systems/' + this.props.systemId + '/skills/'
    var data = {skill: this.state}
    var container = document.getElementById('container')
    $.ajax({
      url: url,
      method: 'post',
      data: data,
      success: function(response){
        debugger
        ReactDOM.unmountComponentAtNode(container)
        ReactDOM.render(
          <Skill data={response} />, container
        )
      }
    })
  },
  updateState: function(e) {
    var prop = e.target.name
    var value = e.target.value
    var skill = {}
    skill[prop] = value
    this.setState(skill)
  },
  render: function() {
    return(
      <form onSubmit={this.handleSubmit}>
          <label for="skillName">Skill Name</label>
        <div>
          <input onChange={this.updateState} id="skillName" name="name" />
        </div>
          <label for="skillDescription">Description</label>
        <div>
          <textarea onChange={this.updateState} id="skillDescription" name="description"></textarea>
        </div>
          <label for="advantage">Create an Advantage</label>
        <div>
          <textarea onChange={this.updateState} id="advantage" name="advantage"></textarea>
        </div>
          <label for="overcome">Overcome</label>
        <div>
          <textarea onChange={this.updateState} id="overcome" name="overcome"></textarea>
        </div>
          <label for="attack">attack</label>
        <div>
          <textarea onChange={this.updateState} id="attack" name="attack"></textarea>
        </div>
          <label for="defend">defend</label>
        <div>
          <textarea onChange={this.updateState} id="defend" name="defend"></textarea>
        </div>
        <input type="hidden" name="systemId" value={this.props.systemId}/>
        <input type="submit" value="Create Skill"/>
      </form>
    )
  }
});
