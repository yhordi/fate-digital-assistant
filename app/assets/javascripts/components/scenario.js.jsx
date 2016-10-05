var Scenario = React.createClass({
  handleDelete: function(e) {
    var container, id, url
    e.preventDefault()
    container = document.getElementById('container')
    id = this.props.data.id
    url = '/systems/' + this.props.data.system_id + '/scenarios/' + id
    $.ajax({
      url: url,
      data: data,
      method: 'DELETE',
      success: function(response){
        this.props.changeParent(response)
        ReactDOM.unmountComponentAtNode(container)
        ReactDOM.render(
          <ScenarioBox data={response} systemId={response.systemId} />, container
        )
      }.bind(this)
    })
  },
  render: function(){
    return(
      <div>
        <h2>{this.props.data.name}
          <a id="edit-scenario" title="edit scenario" onClick={this.handleEdit} className='edit fa fa-pencil-square'></a>
          <a id="delete-scenario" title="delete scenario" onClick={this.handleDelete} className='delete fa fa-trash'></a>
        </h2>
        <p>{this.props.data.description}</p>
        <div>
          <h4>Scenes</h4>
        </div>
      </div>
    )
  }
})
