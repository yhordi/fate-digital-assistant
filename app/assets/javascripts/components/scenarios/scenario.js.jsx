var Scenario = React.createClass({
  backToScenarios: function(e){
    var container, url;
    e.preventDefault()
    container = document.getElementById('container')
    ReactDOM.unmountComponentAtNode(container)
    url = '/systems/' + this.props.data.system_id + '/scenarios'
    $.ajax({
      url: url,
      success: function(response){
        ReactDOM.render(
          <ScenarioBox data={response} systemId={response.systemId} />, container
        )
      }.bind(this)
    })
  },
  handleDelete: function(e) {
    var container, id, url;
    e.preventDefault()
    container = document.getElementById('container')
    id = this.props.data.id
    url = '/scenarios/' + id
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
  handleEdit: function(e){
    var container;
    e.preventDefault();
    container = document.getElementById('container')
    ReactDOM.unmountComponentAtNode(container)
    ReactDOM.render(
      <ScenarioForm data={this.props.data} button="Update Scenario" systemName={this.props.systemName} systemId={this.props.systemId} />, container
    )
  },
  newScene: function(e){
    e.preventDefault()
    container = document.getElementById('scene-form-target')
    ReactDOM.render(
      <SceneForm systemId={this.props.systemId} scenarioId={this.props.data.id} button="Create Scene"/>, container
    )
  },
  onChildChanged: function(newState){
    console.log(newState)
    this.setState(newState)
  },
  render: function(){
    return(
      <div>
        <div className='row'>
          <div className='col-md-4'>
            <h2>{this.props.data.name}
              <a onClick={this.backToScenarios}><span className="fa fa-arrow-left"></span></a>
              <a id="edit-scenario" title="edit scenario" onClick={this.handleEdit} className='edit fa fa-pencil-square'></a>
              <a id="delete-scenario" title="delete scenario" onClick={this.handleDelete} className='delete fa fa-trash'></a>
            </h2>
          </div>
          <div className='col-md-8'>
            <div className='well well-lg'>
              <p>{this.props.data.description}</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <h3>Scenes
              <a className='fa fa-plus' id='new-scene' onClick={this.newScene}></a>
            </h3>
            <div id='scene-list-target'>
              <SceneList changeParent={this.onChildChanged} systemId={this.props.data.system_id} scenes={this.props.data.scenes} />
            </div>
          </div>
          <div className="col-md-6" id="aspects-container">
            <AspectList data={this.props.data.aspects} aspectableType={'Scenario'} aspectableId={this.props.data.id} scenario={this.props} />
          </div>
        </div>
      </div>
    )
  }
})
