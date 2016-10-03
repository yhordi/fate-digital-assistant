var ScenarioList = React.createClass({
  render: function() {
    var scenarioLinks = this.props.data.map(function(scenario, index) {
      return (
        <Systemlink data={scenario} index={index} key={index} />
      )
    }.bind(this));
    return(
      <div>
        {scenarioLinks}
      </div>
    );
  }
});
