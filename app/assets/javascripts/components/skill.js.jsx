var Skill = React.createClass({
  handleBackToSkills: function(e){
    e.preventDefault()
    var container = document.getElementById('container')
    ReactDOM.unmountComponentAtNode(container)
    var systemName = this.props.systemName
    var url = 'systems/' + this.props.data.system_id + '/skills'
    $.ajax({
      url: url,
      success: function(response){
          ReactDOM.render(
            <SkillBox data={response} systemName={systemName} />, container
          )
      }
    })
  },
  handleBackToSystems: function(e){
    e.preventDefault()
    var container = document.getElementById('container')
    ReactDOM.unmountComponentAtNode(container)
    ReactDOM.render(
      <SystemBox />, container
    )
  },
  handleBackToSystem: function(e){
    e.preventDefault(e)
    var container = document.getElementById('container')
    ReactDOM.unmountComponentAtNode(container)
    var url = 'systems/' + this.props.data.system_id
    $.ajax({
      url: url,
      success: function(data){
        ReactDOM.render(
          <System name={data.name} id={data.id} description={data.description} button="Update System" />, container
        )
      }
    })
  },
  handleDelete: function(e){
    e.preventDefault()
    var url = 'systems/' + this.props.data.system_id + '/skills/' + this.props.data.id
    var container = document.getElementById('container')
    $.ajax({
      url: url,
      method: 'DELETE',
      success: function(response) {
        var container = document.getElementById('container')
        ReactDOM.unmountComponentAtNode(container)
        ReactDOM.render(
          <SkillBox data={response} systemName={this.props.systemName} />, container
        )
        $('#notice').prepend('Skill deleted').addClass('notice')
        $('#notice').fadeOut(3000)
      }.bind(this)
    })
  },
  handleEdit: function(e){
    e.preventDefault()
    ReactDOM.render(
      <SkillForm data={this.props.data} button={"Update Skill"}/>, container
    );
  },
  render: function() {
    return(
      <div>
        <h3 className="no-margin">
          {this.props.data.name}
        </h3>
        <p>
          {this.props.data.description}
        </p>
        <div className="m-btm-m">
          <ul className="list-hz">
            <li>
              <a onClick={this.handleBackToSystems} href='/systems'>My Systems
              </a>/
            </li>
            <li>
              <a onClick={this.handleBackToSystem} href="#">
                {this.props.systemName}
              </a>/
            </li>
            <li>
              <a onClick={this.handleBackToSkills}href="#">Skills List</a>
            </li>
            <li>
              /{this.props.data.name}
            </li>
          </ul>
        </div>

        <h4>Overcome</h4>
        <p>
          {this.props.data.overcome}
        </p>
        <h4>Create an advantage</h4>
        <p>
          {this.props.data.advantage}
        </p>
        <h4>Attack</h4>
          <p>
            {this.props.data.attack}
          </p>
        <h4>Defend</h4>
          <p>
            {this.props.data.defend}
          </p>
        <button onClick={this.handleEdit} className='edit'>Edit</button>
        <button onClick={this.handleDelete} className='delete'>Delete</button>
      </div>
    )
  }
});
