var NpcBox = React.createClass({
  backToSystem: function(e){
    e.preventDefault(e)
    var container = document.getElementById('container')
    ReactDOM.unmountComponentAtNode(container)
    var url = '/systems/' + this.props.systemId
    $.ajax({
      url: url,
      success: function(data){
        ReactDOM.render(
          <System name={data.name} id={data.id} description={data.description} button="Update System" />, container
        )
      }
    })
  },
  render: function() {
    return (
      <div className='row'>
        <h2>{this.props.systemName}</h2>
          <button onClick={this.backToSystem}>Back</button>
        <h3>NPCs</h3>
          <NpcList data={this.props.data} systemId={this.props.systemId} systemName={this.props.systemName}/>
      </div>
    );
  }
});
