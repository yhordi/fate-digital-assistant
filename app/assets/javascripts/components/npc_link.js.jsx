var NpcLink = React.createClass({
  handleClick: function(e){
    e.preventDefault()
  },
  render: function() {
    return(
      <tr>
        <td>
          <a onClick={this.handleClick} id="npc">{this.props.name}</a>
        </td>
        <td>
          {this.props.npc_type}
        </td>
      </tr>
    );
  }
});
