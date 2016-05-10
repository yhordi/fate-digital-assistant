var NpcForm = React.createClass({
  componentWillMount: function(){
    this.getSkills()
  },
  getInitialState: function(){
    if(this.props.button == "Update NPC"){
      return {targetId: 0, npc_type: this.props.data.npc_type, name: this.props.data.name, background: this.props.data.background}
    } else {
      return {targetId: 0, npc_type: 'Main', system_id: this.props.systemId, characterSkills: []}
    }
  },
  container: function(){
    return document.getElementById('container')
  },
  create: function(){
    var url = '/systems/' + this.props.systemId + '/npcs/'
    var data = {npc: this.state}
    var container = this.container()
    $.ajax({
      url: url,
      method: 'post',
      data: data,
      success: function(response) {
        ReactDOM.unmountComponentAtNode(container)
        ReactDOM.render(
          <Npc data={response} systemName={this.props.systemName} />, container
        )
      }.bind(this)
    })
  },
  getSkills: function(){
    var url = '/systems/' + this.props.systemId + '/skills/'
    var container = document.getElementById('addSkillTarget')
    $.ajax({
      url: url,
      data: {'names': true},
      success: function(response){
        this.setState({skills: response})
      }.bind(this)
    })
  },
  handleBack: function(e){
    e.preventDefault()
    var systemAttributes = this.systemAttributes()
    var container = this.container()
    ReactDOM.unmountComponentAtNode(container)
    var url = '/systems/' + this.state.system_id + '/npcs'
    $.ajax({
      url: url,
      success: function(response){
          ReactDOM.render(
            <NpcBox data={response} systemName={systemAttributes.systemName} systemId={systemAttributes.systemId}/>, container
          )
      }
    })
  },
  handleSubmit: function(e) {
    e.preventDefault()
    if(this.props.button == "Create NPC"){
      this.create()
    } else {
      this.update()
    }
  },
  systemAttributes: function(){
    return {systemName: this.props.systemName,
            systemId: this.state.system_id}
  },
  update: function() {
    var url = '/systems/' + this.props.systemId + '/npcs/' + this.props.data.id
    var data = {npc: this.state}
    var container = this.container()
    $.ajax({
      url: url,
      method: 'put',
      data: data,
      success: function(response) {
        ReactDOM.unmountComponentAtNode(container)
        ReactDOM.render(
          <Npc data={response} systemName={this.props.systemName} />, container
        )
      }.bind(this)
    })
  },
  changeState: function(e) {
    var prop = e.target.name
    var value = e.target.value
    var npc = {}
    npc[prop] = value
    this.setState(npc)
  },
  render: function() {
    return(
      <div className='row center'>
        <form className='form npc-form' onSubmit={this.handleSubmit}>
        <h3 className='form-header npc-header'>
          {this.props.button}
          <a className="close-form" onClick={this.handleBack}>
            <span className="fa fa-close">
            </span>
          </a>
        </h3>
          <div className='label'>
            <label for="npcName">name</label>
          </div>
          <div>
            <input id='npcName' onChange={this.changeState} value={this.state.name} className="form-field"type='text' name="name" placeholder="Your character's name."/>
          </div>
          <div className='label'>
            <label for="typeSelect">Npc type</label>
          </div>
          <div>
            <select id='typeSelect' onChange={this.changeState} className="form-field select" name='npc_type'>
              <option value="Main">Main</option>
              <option value="Supporting">Supporting</option>
              <option value="Nameless">Nameless</option>
            </select>
          </div>
          <div className='label'>
            <label for="background">Background</label>
          </div>
          <div>
            <textarea id='background' onChange={this.changeState} value={this.state.background} className="form-field" name="background" placeholder="Your character's backstory"></textarea>
          </div>
          <input type="hidden" name="systemId" value={this.props.systemId}/>
          <input className='submit' type="submit" value={this.props.button} />
        </form>
      </div>
    );
  }
});
