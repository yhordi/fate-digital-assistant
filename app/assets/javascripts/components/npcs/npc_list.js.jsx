var NpcList = React.createClass({
  render: function() {
    var npcLinks = this.props.data.map(function(npc, index) {
      return (
        <NpcLink data={npc} systemId={this.props.systemId} key={index} />
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
