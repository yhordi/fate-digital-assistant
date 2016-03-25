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
    $.ajax({
      url: url,
    }).done(function(data){
      ReactDOM.render(
        <SkillBox data={data} systemName={systemName} />, container
      );
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
  render: function() {
    return (
      <div name={this.props.name} description={this.props.description} className='system row'>
      <div className="row">
      <h2>
        {this.props.name}
      </h2>
        <div className="col span-12-t">
          <ul className="systemActions">
            <li className="pad-right">
              <a href={"systems/" + this.props.id + "/skills/new"}>Add Skill</a>
            </li>
            <li className="pad-right">
              <a onClick={this.getSkills} href={"systems/" + this.props.id + "/skills/"}>Display all skills</a>
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
