var StressBox = React.createClass({
  getInitialState: function(){
    return{}
  },
  clearStress: function(e){
    e.preventDefault()
    if($(e.target).next().attr('id')[0] == "p") {
      this.prepareStressUpdate('physical_stress', 0)
    } else {
      this.prepareStressUpdate('mental_stress', 0)
    }
  },
  prepareStressUpdate: function(stressType, value){
    var data = {npc:
                  {
                    id: this.props.npcId,
                  }
                }
    data['npc'][stressType] = value
    this.update(data)
  },
  onChildChanged: function(newState){
    this.props.changeParent(newState)
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    return this.props.mentalStress !== nextState.mentalStress || this.props.physicalStress !== nextState.physicalStress
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
      url: '/npcs/' + this.props.npcId,
      data: data,
      dataType: 'JSON',
      method: 'PUT',
      success: function(response){
        this.props.changeParent({data: response})
      }.bind(this)
    })
  },
  render: function(){
    // this render function should be refactored to be more dry.
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
          <a className="clear" onClick={this.clearStress}>clear </a>
          <div className="btn-group btn-group-toolbar" onMouseLeave={this.resetBoxes} id='physical-stress-target'>
            {phStresses.reverse()}
          </div>
        </div>
        <div>
          <div>
            Mental:
          </div>
          <a className="clear" onClick={this.clearStress}>clear </a>
          <div className="btn-group" onMouseLeave={this.resetBoxes} id='mental-stress-target'>
            {mStresses.reverse()}
          </div>
        </div>
      </div>
    )
  }
})
