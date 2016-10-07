var ScenarioBox = React.createClass({
  getInitialState: function(){
    return {data: this.props.data}
  },
  onChildChanged: function(data){
    console.log(data)
    this.setState(data)
  },
  handleNew: function(e){
    e.preventDefault()
    container = document.getElementById('scenario-form-target')
    ReactDOM.render(
      <ScenarioForm create={this.create} changeParent={this.onChildChanged} data={this.props.data} systemName={this.props.systemName} systemId={this.props.systemId} button="Create Scenario"/>, container
    )
  },
  create: function(data){
    $.ajax({
      url: data.url,
      data: data,
      method: 'POST'
      }).done(function(response) {
        if(response.scenarios == undefined) {
          $('#scenario-notice').prepend(response.errors.toString())
          $('#scenario-notice').fadeOut(3000)
          console.error(response.errors.toString())
        } else {
          this.setState({data: response.scenarios})
          ReactDOM.unmountComponentAtNode(document.getElementById('scenario-form-target'));
        }
    }.bind(this))
  },
  render: function(){
    return(
      <div>
        <h4>
          <a onClick={this.handleNew} id="newScenario">Create New</a>
        </h4>
        <div>
          <ScenarioList data={this.state.data} changeParent={this.onChildChanged}/>
        </div>
        <div id="scenario-form-target"></div>
      </div>
    )
  }
})
