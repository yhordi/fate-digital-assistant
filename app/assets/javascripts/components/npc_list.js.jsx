var NpcList = React.createClass({
  render: function() {
    var npcLinks = this.props.data.map(function(npc, index) {
      return (
        <NpcLink name={npc.name} npc_type={npc.npc_type} data={npc} key={npc.id} />
      )
    }.bind(this));
    return(
      <div className='npcList col'>
        <div className='m-top'>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Type</th>
            </tr>
            {npcLinks}
          </tbody>
        </table>
        </div>
      </div>
    );
  }
});
