var SystemList = React.createClass({
  render: function() {
    var systemLinks = this.props.data.map(function(system, index) {
      return (
        <Systemlink data={system} index={index} key={index} />
      )
    }.bind(this));
    return (

      <div className='systemList'>
        {systemLinks}
      </div>
    );
  }
});
