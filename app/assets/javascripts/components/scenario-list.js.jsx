var ScenarioList = React.createClass({
  render: function() {
    var scenarioLinks = this.props.data.map(function(scenario, index){
      <ScenarioLink data={scenario} index={index} key={index} />
    })
    return(
      <div>
        {scenarioLinks}
      </div>
    );
  }
});
