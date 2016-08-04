var AspectList = React.createClass({
  getInitialState: function(){
    return {aspects: this.props.data}
  },
  handleClick: function(e){
    e.preventDefault
    var data = {aspectable_type: "Npc",
                aspectable_id: this.props.npcId}
    var container = document.getElementById('aspect-form-target')
    ReactDOM.render(<AspectForm npc={this.props.npc} changeParent={this.onChildChanged} data={data} button="Create Aspect"/>, container)
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
          <h3>
            Aspects <a className='fa fa-plus' onClick={this.handleClick}></a>
          </h3>
          </div>
        <div id="aspect-form-target"></div>
        <div className='well well-lg'>
          {aspects}
        </div>
      </div>
    )
  }
})
