var SystemList = React.createClass({

  render: function() {
    var systemNodes = this.props.data.map(function(system){
      <System key={system.id}>
        <a>{system.name}</a>
        <p>{system.description}</p>
      </System>
    });
    return (
    <div className='systemList'>
      {systemNodes}
    </div>
    );
  }
});
