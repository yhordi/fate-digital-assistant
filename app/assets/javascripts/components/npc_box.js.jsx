var NpcBox = React.createClass({
  container: function(e){
    return document.getElementById('container')
  },
  backToSystem: function(e){
    e.preventDefault(e)
    var container = document.getElementById('container')
    ReactDOM.unmountComponentAtNode(container)
    var url = '/systems/' + this.props.systemId
    $.ajax({
      url: url,
      success: function(data){
        ReactDOM.render(
          <System name={data.name} id={data.id} description={data.description} button="Update System" />, container
        )
      }
    })
  },
  handleNew: function(e){
    e.preventDefault()
    container = this.container()
    ReactDOM.unmountComponentAtNode(container)
    ReactDOM.render(
      <NpcForm systemName={this.props.systemName} systemId={this.props.systemId} button="Create NPC"/>, container
    )
  },
  render: function() {
    return (
      <div className='row'>
        <ul className="list-hz">
          <li>
            NPCs |
          </li>
          <li>
            <a id="newNpc" onClick={this.handleNew} href={"systems/" + this.props.systemId + "/npcs/new"}>Create New</a>
          </li>
        </ul>
          <button onClick={this.backToSystem}>Back</button>
        <h3>NPCs</h3>
          <NpcList data={this.props.data} systemId={this.props.systemId} systemName={this.props.systemName}/>
      </div>
    );
  }
});
