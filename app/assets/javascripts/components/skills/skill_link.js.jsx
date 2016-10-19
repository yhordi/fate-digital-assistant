var SkillLink = React.createClass({
  handleClick: function(e){
    var nodes = $(e.target).parent().parent().children().children()
    nodes.each(function(index){
      if ($(nodes[index]).attr('class').includes('active') == true) {
        $(nodes[index]).toggleClass('active')
      }
    })
    $(e.target).toggleClass('active')
    var container = document.getElementById('skill-target');
    ReactDOM.unmountComponentAtNode(container)
    ReactDOM.render(
      <Skill systemName={this.props.systemName} data={this.props.data}/>, container
    )
  },
  render: function() {
    return (
      <div>
        <a className='list-group-item' onClick={this.handleClick} id={"skill" + this.props.data.id}>{this.props.name}</a>
      </div>
    );
  }
});

