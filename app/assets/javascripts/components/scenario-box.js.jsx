var ScenarioBox = React.createClass({
  handleNew: function(e){
    e.preventDefault()
    container = document.getElementById('scenario-form-target')
    // ReactDOM.unmountComponentAtNode(container)
    ReactDOM.render(
      <ScenarioForm data={this.props.data} systemName={this.props.systemName} systemId={this.props.systemId} button="Create Scenario"/>, container
    )
  },
  render: function(){
    return(
      <div>
        <h4>
          <a onClick={this.handleNew} href="#">Create New</a>
        </h4>
        <div>
          <ScenarioList data={this.props.data} />
        </div>
        <div id="scenario-form-target"></div>
      </div>
    )
  }
})
