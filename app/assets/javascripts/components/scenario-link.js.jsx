var ScenarioLink = React.createClass({
  getScenario: function(e){
    e.preventDefault();
    ReactDOM.render(
      <Scenario data={this.props.data} />, document.getElementById('container')
    )
  },
  render: function(){
    return(
      <div>
        <a id={this.props.id} onClick={this.getScenario}>
          {this.props.data.name}
        </a>
      </div>
    )
  }
})
