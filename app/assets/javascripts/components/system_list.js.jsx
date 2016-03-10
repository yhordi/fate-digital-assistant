var SystemList = React.createClass({

  render: function() {
    var systemNodes = this.props.data.map(function(system, index) {
      return (
      <System name={system.name} description={system.description} key={index} />
      )
    });
    return (
    <div className='systemList'>
      {systemNodes}
    </div>
    );
  }
});
