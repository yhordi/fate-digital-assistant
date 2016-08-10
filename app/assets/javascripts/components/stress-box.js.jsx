var StressBox = React.createClass({
  getInitialState: function(){
    return{}
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    return this.props.mentalStress !== nextState.mentalStress || this.props.physicalStress !== nextState.physicalStress
  },
  clearStress: function(e){
    var $targets;
    e.preventDefault()
    $targets = $(e.target).next().children().children()
    $targets.each(function(i){
      this.className = 'btn btn-default'
    })
  },
  onChildChanged: function(newState){
    this.props.changeParent(newState)
  },
  resetBoxes: function(e){
    var siblings;
    siblings = $(e.target).parent().parent().children().children()
    siblings.each(function(i){
      if(this.className.includes('danger')) {
        return
      } else {
        $(siblings[i]).removeClass('btn-warning')
        $(siblings[i]).addClass('btn-default')
      }
    })
  },
  update: function(data) {
    $.ajax({
      url: '/npcs/' + data.npc.id,
      data: data,
      dataType: 'JSON',
      method: 'PUT',
      success: function(response){
        this.props.changeParent({data: response})
      }.bind(this)
    })
  },
  render: function(){
    var phStresses, mStresses;
    phStresses = []
    for (var i = 0; i < this.props.maxPhysicalStress; i++) {
      var shaded;
          if(i < this.props.physicalStress) {
            shaded = true
          } else {
            shaded = false
          }
          phStresses.push(<Stress changeParent={this.props.onChildChanged} npcId={this.props.npcId} key={i} update={this.update} shaded={shaded} id={"physical" + i} stressValue={i+1} fillBoxes={this.fillBoxes} maxStress={this.props.MaxPhysicalStress} stress={this.props.physicalStress} stressType="physical" />)
        }
    mStresses = []
    for (var i = 0; i < this.props.maxMentalStress; i++) {
        var shaded;
          if(i < this.props.mentalStress){
            shaded = true
          } else {
            shaded = false
          }
          mStresses.push(<Stress changeParent={this.props.onChildChanged} npcId={this.props.npcId} key={i} update={this.update} shaded={shaded} id={"mental" + i} stressValue={i+1} fillBoxes={this.fillBoxes} maxStress={this.props.MaxMentalStress} stress={this.props.mentalStress} stressType="mental" />)
        }
    return(
      <div>
        <div>
          <div>
            Physical:
          </div>
          <a onClick={this.clearStress}>clear </a>
          <div className="btn-group btn-group-toolbar" onMouseLeave={this.resetBoxes} id='physical-stress-target'>
            {phStresses.reverse()}
          </div>
        </div>
        <div>
          <div>
            Mental:
          </div>
          <a onClick={this.clearStress}>clear </a>
          <div className="btn-group" onMouseLeave={this.resetBoxes} id='mental-stress-target'>
            {mStresses.reverse()}
          </div>
        </div>
      </div>
    )
  }
})
