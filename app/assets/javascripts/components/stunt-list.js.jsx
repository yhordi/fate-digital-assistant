var StuntList = React.createClass({
  handleClick: function(e){
    e.preventDefault()
    var container = document.getElementById('container')
    ReactDOM.unmountComponentAtNode(container)
    ReactDOM.render(<StuntForm npc={this.props.npc} npcId={this.props.npcId} button="Create Stunt"/>, container)
  },
  onChildChanged: function(newState){
    console.log(newState)
    debugger
    this.setState(newState)
  },
  render: function() {
    var stunts = this.props.data.map(function(stunt, index){
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
