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
      // <div className='form skillForm'>
      <form className='form skillForm' onSubmit={this.handleSubmit}>
        <h3 className='form-header'>New Skill</h3>
        <div>
          <input placeholder="Skill Name" className="form-field" onChange={this.updateState} value={this.props.data.name} id="skillName" name="name" />
        </div>
        <div>
          <textarea placeholder="Description" rows="50" cols="25" className="form-field" onChange={this.updateState} value={this.props.data.description} id="skillDescription" name="description"></textarea>
        </div>
        <div>
          <textarea placeholder="Create an Advantage" rows="50" cols="25" className="form-field" onChange={this.updateState} value={this.props.data.advantage} id="advantage" name="advantage"></textarea>
        </div>
        <div>
          <textarea placeholder="Overcome" rows="50" cols="25" className="form-field" onChange={this.updateState} value={this.props.data.overcome} id="overcome" name="overcome"></textarea>
        </div>
        <div>
          <textarea placeholder="attack" rows="50" cols="25" className="form-field" onChange={this.updateState} value={this.props.data.attack} id="attack" name="attack"></textarea>
        </div>
        <div>
          <textarea placeholder="defend" rows="50" cols="25" className="form-field" onChange={this.updateState} value={this.props.data.defend} id="defend" name="defend"></textarea>
        </div>
        <input type="hidden" name="systemId" value={this.props.systemId}/>
        <input className='submit' type="submit" value={this.props.button} />
      </form>
      // </div>
    )
  }
});
