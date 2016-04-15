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
      <Systemform button="Create System" data={[]} />, document.getElementsByClassName('form-target')[0]
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
          <div className="col span-3-d span-4-t">
            <header>Systems</header>
              <button onClick={this.newSystem} href=''>Create New</button>
              <i className='fa fa-arrow-circle-o-right fa-stack center'></i>
            <SystemList data={this.state.systems} />
          </div>
          <div className="col span-8-d span-8-t form-target"></div>
        </div>
      </div>
    );
  }
});
