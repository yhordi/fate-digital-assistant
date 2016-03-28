var SkillBox = React.createClass({
  handleBackToSystem: function(e){
    e.preventDefault(e)
    var container = document.getElementById('container')
    ReactDOM.unmountComponentAtNode(container)
    var url = 'systems/' + this.props.systemId
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
      <div>
        <h2 className="no-margin">
          {this.props.systemName}
        </h2>
        <div className="m-btm-m">
          <ul className="list-hz">
            <li>
              <a onClick={this.handleBackToSystems} href="systems/">
                My Systems
              </a>/
            </li>
            <li>
              <a onClick={this.handleBackToSystem} href="#">
                {this.props.systemName}
              </a>/
            </li>
            <li>
              Skills List
            </li>
          </ul>
        </div>
        <SkillList systemName={this.props.systemName} data={this.props.data} />
      </div>
    );
  }
});
