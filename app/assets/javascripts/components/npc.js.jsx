var Npc = React.createClass({
  container: function(){
    return document.getElementById('container')
  },
  backToNpcs: function(e){
    e.preventDefault()
    var container = this.container()
    ReactDOM.unmountComponentAtNode(container)
    var systemName = this.props.systemName
    var systemId = this.props.data.system_id
    var url = '/systems/' + systemId + '/npcs'
    $.ajax({
      url: url,
      success: function(response){
          ReactDOM.render(
            <NpcBox data={response} systemName={systemName} systemId={systemId}/>, container
          )
      }
    })
  },
  handleDelete: function(e){
    e.preventDefault()
    var url = '/systems/' + this.props.systemId + '/npcs/' + this.props.data.id
    var systemName = this.props.systemName
    var systemId = this.props.data.systemId
    var container = this.container()
    $.ajax({
      url: url,
      method: 'DELETE',
      success: function(response) {
        ReactDOM.unmountComponentAtNode(container)
        ReactDOM.render(
          <NpcBox data={response} systemName={systemName} systemId={systemId} />, container
        )
      }
    })
  },
  handleEdit: function(e){
    e.preventDefault();
    var container = this.container()
    ReactDOM.unmountComponentAtNode(container)
  },
  render: function() {
    return(
      <div>
        <h2>
          {this.props.systemName}
        </h2>
        <button onClick={this.backToNpcs}>Back</button>
        <h3>
          NPC Profile
        </h3>
        <div>
          Name: {this.props.data.name}
        </div>
        <div>
          NPC Type: {this.props.data.npc_type}
        </div>
        <div>
          <h4>
            Background:
          </h4>
          <p>
            {this.props.data.background}
          </p>
        </div>
        <button onClick={this.handleEdit} className='edit'>Edit</button>
        <button onClick={this.handleDelete} className='delete'>Delete</button>
      </div>
    );
  }
});
