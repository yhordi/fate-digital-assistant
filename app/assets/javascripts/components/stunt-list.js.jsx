var StuntList = React.createClass({
  getInitialState: function() {
    return({stunts: this.props.data})
  },
  handleClick: function(e){
    e.preventDefault()
    var container = document.getElementById('container')
    ReactDOM.unmountComponentAtNode(container)
    ReactDOM.render(<StuntForm npc={this.props.npc} npcId={this.props.npcId} button="Create Stunt"/>, container)
  },
  onChildChanged: function(newState){
    this.replaceState(newState)
  },
  render: function() {
    var stunts = this.state.stunts.map(function(stunt, index){
      return (
        <Stunt changeParent={this.onChildChanged} data={stunt} key={index} />
      )
    }.bind(this))
    return(
      <div>
        <h3>Stunts</h3>
        <div>
          <button onClick={this.handleClick}>Add New</button>
        </div>
        {stunts}
      </div>
    );
  }
});
