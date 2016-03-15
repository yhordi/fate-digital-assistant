var SystemList = React.createClass({
  render: function() {
    var systemLinks = this.props.data.map(function(system, index) {
      return (
        <div key={system.key}>
          <a href={'systems/' + system.id} >{system.name}</a>
        </div>
      )
    });
    return (
      <div className='systemList'>
        {systemLinks}
      </div>
    );
  }
});
