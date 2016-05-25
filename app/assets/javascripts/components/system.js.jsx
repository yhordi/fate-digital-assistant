var System = React.createClass({
  container: function(){
    return document.getElementById('container')
  },
  propTypes: {
    name: React.PropTypes.string,
    id: React.PropTypes.number,
    description: React.PropTypes.node
  },
  getInitialState: function(){
    return data = {system: this.props};
  },
  getNpcs: function(e){
    e.preventDefault()
    var container = this.container()
    var url = e.target.href
    $.ajax({
      url: url,
      success: function(response){
        ReactDOM.render(
          <NpcBox data={response} systemName={this.props.name} systemId={this.props.id} />, container
        );
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    })
  },
  getSkills: function(e){
    e.preventDefault();
    var container = this.container()
    var url = e.target.href
    var systemName = this.props.name
    var systemId = this.props.id
    $.ajax({
      url: url,
    }).done(function(data){
      ReactDOM.render(
        <SkillBox data={data} systemName={systemName} systemId={systemId} />, container
      );
    })
  },
  handleBack: function(e){
    e.preventDefault(e)
    var container = document.getElementById('container')
    ReactDOM.unmountComponentAtNode(container)
    ReactDOM.render(
      <SystemBox />, container
    )
  },
  handleDelete: function(e){
    e.preventDefault(e)
    var url = '/systems/' + this.props.id
    var container = document.getElementById('container')
    $.ajax({
      url: url,
      method: 'DELETE',
      success: function(response){
        var container = document.getElementById('container')
        this.setState({systems: response})
        this.props = this.state
        ReactDOM.unmountComponentAtNode(document.getElementById('nav-container'))
        ReactDOM.render(
          <SystemBox />, container
        )
        $('#notice').prepend('System deleted').addClass('notice')
        $('#notice').fadeOut(3000)
      }.bind(this)
    })
  },
  handleEdit: function(e){
    e.preventDefault();
    var url = '/systems/' + this.props.id + '/edit'
    var button = this.props.button
    $.ajax({
      url: url,
    }).done(function(data){
      var container = document.getElementById('container');
      ReactDOM.render(
        <Systemform button={button} data={data} />, container
      );
    })
  },
  render: function() {
    return (
      <div name={this.props.name} description={this.props.description} className='system row'>
        <div className="row">
          <div className="col span-12-t inline">
            <ul className="list-hz">
              <li>
                <a id="skillsIndex" onClick={this.getSkills} href={"/systems/" + this.props.id + "/skills/"}>Skills</a>
              </li>
              <li>Games</li>
              <li>
                <a id="npcIndex" onClick={this.getNpcs} href={"/systems/" + this.props.id + "/npcs/"}>NPCs</a>
              </li>
              <li>Locations</li>
            </ul>
          </div>
        </div>
        <p>{this.props.description}</p>
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={this.handleDelete} className='delete'>Delete</button>
      </div>
    );
  }
});
