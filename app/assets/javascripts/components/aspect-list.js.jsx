var AspectList = React.createClass({
  getInitialState: function(){
    return {aspects: this.props.data}
  },
  handleClick: function(e){
    e.preventDefault
    var data = {aspectable_type: "Npc",
                aspectable_id: this.props.npcId}
    var container = document.getElementById('aspect-form-target')
    ReactDOM.render(<AspectForm npc={this.props.npc} data={data} button="Create Aspect"/>, container)
  },
  onChildChanged: function(newState){
    this.setState(newState)
  },
  render: function(){
    var aspects = this.state.aspects.map(function(aspect, index){
      return (
        <Aspect changeParent={this.onChildChanged} data={aspect} key={index} />
      )
    }.bind(this))
    return(
      <div>
        <div>
          <h3>Aspects</h3>
            <button className='btn' onClick={this.handleClick}>Add New Aspect</button>
          </div>
        <div id="aspect-form-target"></div>
        <div>
          {aspects}
        </div>
      </div>
    )
  }
})
