var ScenarioList = React.createClass({
  render: function() {
    var scenarioLinks = this.props.data.map(function(scenario, index) {
      return (
        <ScenarioLink id={'scenario' + index} data={scenario} index={index} key={index} changeParent={this.props.changeParent} />
      )
    }.bind(this));
    return(
      <div>
        {scenarioLinks}
      </div>
    );
  }
});
