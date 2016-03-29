var System = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    id: React.PropTypes.number,
    description: React.PropTypes.node
  },
  getInitialState: function(){
    return data = {system: this.props};
  },
  getSkills: function(e){
    e.preventDefault();
    var container = document.getElementById('container');
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
    var url = 'systems/' + this.props.id
    var container = document.getElementById('container')
    $.ajax({
      url: url,
      method: 'DELETE',
      success: function(response){
        var container = document.getElementById('container')
        this.setState({systems: response})
        this.props = this.state
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
    var url = 'systems/' + this.props.id + '/edit'
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
        <h2 className="no-margin">
          {this.props.name}
        </h2>
        <div className="m-btm-m">
          <a className='list-hz' onClick={this.handleBack} href='/systems'>back to my systems</a>
        </div>
          <div className="col span-12-t">
            <ul className="list-hz">
              <li>
                <a id="skillsIndex" onClick={this.getSkills} href={"systems/" + this.props.id + "/skills/"}>Skills</a>
              </li>
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
