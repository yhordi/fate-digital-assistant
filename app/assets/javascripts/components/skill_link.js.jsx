var SkillLink = React.createClass({
  handleClick: function(e){
    var container = document.getElementById('container');
    ReactDOM.unmountComponentAtNode(container)
    ReactDOM.render(
      <Skill data={this.props.data} />, container
    )
  },
  render: function() {
    return (
      <div>
        <a onClick={this.handleClick} id={"skill" + this.props.data.id}>{this.props.name}</a>
      </div>
    );
  }
});

