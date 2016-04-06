var SkillForm = React.createClass({
  create: function(){
    var url = '/systems/' + this.props.systemId + '/skills/'
    var data = {skill: this.state}
    var container = document.getElementById('container')
    $.ajax({
      url: url,
      method: 'post',
      data: data,
      success: function(response) {
        ReactDOM.unmountComponentAtNode(container)
        ReactDOM.render(
          <Skill data={response} systemName={this.props.systemName} />, container
        )
      }.bind(this)
    })
  },
  getInitialState: function() {
    return {system_id: this.props.systemId}
  },
  handleSubmit: function(e) {
    e.preventDefault()
    if(this.props.button == "Create Skill"){
      this.create()
    } else {
      this.update()
    }
  },
  update: function(){
    var url = '/systems/' + this.props.systemId + '/skills/' + this.props.data.id
    var data = {skill: this.state}
    var container = document.getElementById('container')
    $.ajax({
      url: url,
      method: 'put',
      data: data,
      success: function(response) {
        ReactDOM.unmountComponentAtNode(container)
        ReactDOM.render(
          <Skill data={response} systemName={this.props.systemName} />, container
        )
      }.bind(this)
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
          <input onChange={this.updateState} value={this.props.data.name} id="skillName" name="name" />
        </div>
          <label for="skillDescription">Description</label>
        <div>
          <textarea onChange={this.updateState} value={this.props.data.description} id="skillDescription" name="description"></textarea>
        </div>
          <label for="advantage">Create an Advantage</label>
        <div>
          <textarea onChange={this.updateState} value={this.props.data.advantage} id="advantage" name="advantage"></textarea>
        </div>
          <label for="overcome">Overcome</label>
        <div>
          <textarea onChange={this.updateState} value={this.props.data.overcome} id="overcome" name="overcome"></textarea>
        </div>
          <label for="attack">attack</label>
        <div>
          <textarea onChange={this.updateState} value={this.props.data.attack} id="attack" name="attack"></textarea>
        </div>
          <label for="defend">defend</label>
        <div>
          <textarea onChange={this.updateState} value={this.props.data.defend} id="defend" name="defend"></textarea>
        </div>
        <input type="hidden" name="systemId" value={this.props.systemId}/>
        <input type="submit" value={this.props.button} />
      </form>
    )
  }
});
