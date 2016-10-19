
var SystemBox = React.createClass({
  componentWillMount: function() {
    var container = document.getElementById('container')
  },
  getInitialState: function(){
    return { systems: [] }
  },
  componentDidMount: function() {
    this.loadSystemsFromServer()
  },
  newSystem: function(e) {
    e.preventDefault()
    ReactDOM.render(
      <Systemform button="Create System" data={[]} />, document.getElementById('form-target')
    );
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
        <div className='row'>
          <div className="panel panel-info">
            <div className="panel-heading">
              Systems
            </div>
            <button className="btn btn-primary-outline" onClick={this.newSystem} href=''>Create New</button>
            <SystemList data={this.state.systems} />
          </div>
          <div className="col-xs-6" id="form-target"></div>
        </div>
      </div>
    );
  }
});
