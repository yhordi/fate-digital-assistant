var SkillForm = React.createClass({
  create: function(){
    var url = '/systems/' + this.props.systemId + '/skills/'
    var data = {skill: this.state}
    var container = document.getElementById('container')
    $.ajax({
      url: url,
      method: 'post',
      data: data,
    }).done(function(response){
      ReactDOM.unmountComponentAtNode(container)
      ReactDOM.render(
        <Skill data={response} systemName={this.props.systemName} />, container
      )
    }.bind(this))
  },
  getInitialState: function() {
    return {system_id: this.props.systemId}
  },
  handleBack: function(e){
    e.preventDefault()
    var container = document.getElementById('container')
    var systemName = this.props.systemName
    if(this.props.button == "Update Skill") {
      // var systemName = this.props.data.systemName
      var systemId = this.props.data.system_id
      var url = '/systems/' + systemId + '/skills/'
    } else {
      var systemId = this.props.systemId
      var url = '/systems/' + systemId + '/skills/'
    }
    ReactDOM.unmountComponentAtNode(container)
    $.ajax({
      url: url,
      success: function(response){
        ReactDOM.render(
          <SkillBox data={response} systemId={systemId} systemName={systemName} />, container
        )
      }
    })
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
      <div className="input-group well well-lg">
        <form onSubmit={this.handleSubmit}>
          <div className='panel panel-heading'>
            {this.props.button}
            <a className="close-form" onClick={this.handleBack}>
              <span className="fa fa-close">
              </span>
            </a>
          </div>
          <div>
            <input placeholder="Skill Name" className="form-control" onChange={this.updateState} value={this.props.data.name} id="skillName" name="name" />
          </div>
          <div>
            <textarea placeholder="Description" className="form-control" onChange={this.updateState} value={this.props.data.description} id="skillDescription" name="description"></textarea>
          </div>
          <div>
            <textarea placeholder="Create an Advantage" className="form-control" onChange={this.updateState} value={this.props.data.advantage} id="advantage" name="advantage"></textarea>
          </div>
          <div>
            <textarea placeholder="Overcome" className="form-control" onChange={this.updateState} value={this.props.data.overcome} id="overcome" name="overcome"></textarea>
          </div>
          <div>
            <textarea placeholder="attack" className="form-control" onChange={this.updateState} value={this.props.data.attack} id="attack" name="attack"></textarea>
          </div>
          <div>
            <textarea placeholder="defend" className="form-control" onChange={this.updateState} value={this.props.data.defend} id="defend" name="defend"></textarea>
          </div>
          <input type="hidden" name="systemId" value={this.props.systemId}/>
          <input className='submit' type="submit" value={this.props.button} />
        </form>
      </div>
    )
  }
});
