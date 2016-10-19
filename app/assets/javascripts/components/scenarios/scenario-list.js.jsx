var ScenarioList = React.createClass({
  getInitialState: function() {
    return {scenarios: this.props.scenarios}
  },
  render: function() {
    var scenarioLinks = this.props.data.map(function(scenario, index) {
      return (
        <ScenarioLink changeParent={this.props.changeParent} id={'scenario' + index} data={scenario} index={index} key={index}  />
      )
    }.bind(this));
    return(
      <div>
        {scenarioLinks}
      </div>
    );
  }
});
