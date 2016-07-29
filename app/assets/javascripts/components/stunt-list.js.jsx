var StuntList = React.createClass({
  getInitialState: function() {
    return({stunts: this.props.data})
  },
  handleClick: function(e){
    e.preventDefault()
    var container = document.getElementById('form-target')
    ReactDOM.render(<StuntForm npc={this.props.npc} npcId={this.props.npcId} data={{}}button="Create Stunt"/>, container)
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
        <div>
        <h3>Stunts</h3>
          <button className='btn' onClick={this.handleClick}>Add New</button>
        </div>
        <div id="form-target"></div>
        <div className='well well-lg'>
          {stunts}
        </div>
      </div>
    );
  }
});
