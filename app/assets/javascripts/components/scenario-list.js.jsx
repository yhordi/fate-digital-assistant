var ScenarioList = React.createClass({
  render: function() {
    var scenarioLinks = this.props.data.map(function(scenario, index) {
      return (
        <ScenarioLink data={scenario} index={index} key={index} onClick/>
      )
    }.bind(this));
    return(
      <div>
        {scenarioLinks}
      </div>
    );
  }
});
