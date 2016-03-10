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

var ready = function(){
  var fakeSystems = [
    {name: 'wonderball', description: 'wonderful'},
    {name: 'thunderball', description: 'thunderful'}
  ];

  ReactDOM.render(
    <SystemList data={this.state.data} />,
    document.getElementById('systems')
  )
}

$(document).ready(ready)
