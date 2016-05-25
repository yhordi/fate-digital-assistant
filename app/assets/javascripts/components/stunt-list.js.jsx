var StuntList = React.createClass({
  handleClick: function(e){
    e.preventDefault()
    var container = document.getElementById('container')
    ReactDOM.unmountComponentAtNode(container)
    ReactDOM.render(<StuntForm npcId={this.props.npcId} button="Create Stunt"/>, container)
  },
  render: function() {
    var stunts = this.props.data.map(function(stunt, index){
      return (
        <Stunt data={stunt} key={index} />
      )
    })
    return(
      <div>
        <h2>Stunts</h2>
        <div>
          <button onClick={this.handleClick}>Add New</button>
        </div>
        {stunts}
      </div>
    );
  }
});
