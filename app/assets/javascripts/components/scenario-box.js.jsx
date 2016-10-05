var ScenarioBox = React.createClass({
  getInitialState: function(){
    return {data: this.props.data}
  },
  onChildChanged: function(data){
    this.setState(data)
  },
  handleNew: function(e){
    e.preventDefault()
    container = document.getElementById('scenario-form-target')
    ReactDOM.render(
      <ScenarioForm changeParent={this.onChildChanged} data={this.props.data} systemName={this.props.systemName} systemId={this.props.systemId} button="Create Scenario"/>, container
    )
  },
  render: function(){
    return(
      <div>
        <h4>
          <a onClick={this.handleNew} href="#">Create New</a>
        </h4>
        <div>
          <ScenarioList data={this.props.data} changeParent={this.onChildChanged}/>
        </div>
        <div id="scenario-form-target"></div>
      </div>
    )
  }
})
