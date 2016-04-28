var NpcForm = React.createClass({
  getInitialState: function(){
    if(this.props.button == "Update NPC"){
      return {npc_type: this.props.data.npc_type, name: this.props.data.name, background: this.props.data.background}
    } else {
      return {npc_type: 'Main', system_id: this.props.systemId}
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
  handleSubmit: function(e) {
    e.preventDefault()
    if(this.props.button == "Create NPC"){
      this.create()
    } else {
      this.update()
    }
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
  updateState: function(e) {
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
          <div>
            <input onChange={this.updateState} value={this.state.name} className="form-field"type='text' name="name" placeholder='name'/>
          </div>
          <div>
            <select onChange={this.updateState} className="form-field select" name='npc_type'>
              <option value="Main">Main</option>
              <option value="Supporting">Supporting</option>
              <option value="Nameless">Nameless</option>
            </select>
          </div>
          <div>
            <textarea onChange={this.updateState} value={this.state.background} className="form-field" name="background" placeholder='background'></textarea>
          </div>
          <input type="hidden" name="systemId" value={this.props.systemId}/>
          <input className='submit' type="submit" value={this.props.button} />
        </form>
      </div>
    );
  }
});
