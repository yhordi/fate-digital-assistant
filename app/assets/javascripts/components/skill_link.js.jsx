var SkillLink = React.createClass({
  handleClick: function(e){
    var container = document.getElementById('container');
    // e.preventDefault()
    // var id = this.props.data.id
    // var systemId = this.props.data.system_id
    // var url = "systems/" + systemId + "/skills/" + id
    // $.ajax({
    //   url: url
    // }).done(function(response) {
    //   console.log(response)
    // })
    ReactDOM.render(
      <Skill data={this.props.data} />, container
    )
  },
  render: function() {
    return (
      <div>
        <a onClick={this.handleClick}>{this.props.name}</a>
      </div>
    );
  }
});

