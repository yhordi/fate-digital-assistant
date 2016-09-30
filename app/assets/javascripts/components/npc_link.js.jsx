var NpcLink = React.createClass({
  container: function(){
    return document.getElementById('container')
  },
  handleClick: function(e){
    e.preventDefault()
    // ReactDOM.unmountComponentAtNode(this.container())
    ReactDOM.render(
      <Npc data={this.props.data} systemId={this.props.systemId} consequences={this.props.data.consequences} characterSkills={this.props.data.character_skills}/>, this.container()
    )
  },
  render: function() {
    return(
      <tr>
        <td className="pad-r-em">
          <a onClick={this.handleClick} id={"npc" + this.props.data.id}>{this.props.data.name}</a>
        </td>
        <td>
          {this.props.data.npc_type}
        </td>
      </tr>
    );
  }
});
