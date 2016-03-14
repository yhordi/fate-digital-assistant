var SystemBox = React.createClass({
  getInitialState: function(){
    return { systems: [] }
  },
  componentDidMount: function() {
    this.loadSystemsFromServer()
  },
  loadSystemsFromServer: function(){
    $.ajax({
      url: '/systems',
      dataType: 'json',
      success: function(systems) {
        this.setState({systems: systems})
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div className='systemBox'>
        <h2>Systems</h2>
        <a href='systems/new'>Make a new system</a>
        <SystemList data={this.state.systems} />
      </div>
    );
  }
});