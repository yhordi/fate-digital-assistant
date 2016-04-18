var SkillBox = React.createClass({
  handleBackToSystem: function(e){
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
  handleBackToSystems: function(e){
    e.preventDefault(e)
    var container = document.getElementById('container')
    ReactDOM.unmountComponentAtNode(container)
    ReactDOM.render(
      <SystemBox />, container
    )
  },
  render: function() {
    return (
      <div className='row'>
        <h2 className="no-margin">
          <a onClick={this.handleBackToSystem}>{this.props.systemName}</a>
        </h2>
        <SkillList systemId={this.props.systemId} systemName={this.props.systemName} data={this.props.data} />
      </div>
    );
  }
});
