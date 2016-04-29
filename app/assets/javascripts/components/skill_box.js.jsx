var SkillBox = React.createClass({
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
          {this.props.systemName}
        </h2>
        <button onClick={this.backToSystem}>Back</button>
        <ul className="list-hz">
          <li>
            Skills |
          </li>
          <li>
            <a onClick={this.handleNew} href={"systems/" + this.props.id + "/skills/new"}>Create New</a>
          </li>
        </ul>
        <SkillList systemId={this.props.systemId} systemName={this.props.systemName} data={this.props.data} />
      </div>
    );
  }
});
