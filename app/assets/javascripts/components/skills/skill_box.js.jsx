var SkillBox = React.createClass({
  handleNew: function(e){
    e.preventDefault();
    var container = document.getElementById('container')
    ReactDOM.unmountComponentAtNode(container)
    ReactDOM.render(
      <SkillForm data={[]} systemName={this.props.systemName} button={"Create Skill"} systemId={this.props.systemId} />, container
    )
  },
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
      <div>
        <div className='col-md-3'>
          <h4>
            <a onClick={this.handleNew} href={"systems/" + this.props.id + "/skills/new"}>Create New</a>
          </h4>
          <SkillList systemId={this.props.systemId} systemName={this.props.systemName} data={this.props.data} />
        </div>
        <div id='skill-target' className='col-md-9'>
        </div>
      </div>
    );
  }
});
