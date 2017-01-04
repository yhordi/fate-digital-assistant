var Scene = React.createClass({
  getInitialState: function() {
    return this.props
  },
  onChildChanged: function(newState){
    this.setState(newState)
  },
  importNpcForm: function(e){
    e.preventDefault()
    $.ajax({
      url: '/systems/' + this.props.systemId + '/npcs',
      data: {names: true}
    }).done(function(response){
      ReactDOM.render(
        <NpcImportForm changeParent={this.onChildChanged} systemId={this.props.systemId} data={this.props.data} npcNames={response.names} />, document.getElementById('npc-import-form-target')
      )
    }.bind(this))
  },
  render: function() {
    return(
      <div>
        <div>
          <h3>{this.state.data.name}</h3>
          <p>{this.state.data.description}</p>
        </div>
        <div>
          <a alt='import npcs' title='Add Npcs to scene' className='fa fa-user-plus' onClick={this.importNpcForm}></a>
          <div id="npc-import-form-target"></div>
        </div>
        <NpcList data={this.state.data.npcs} />
      </div>
    )
  }
})
