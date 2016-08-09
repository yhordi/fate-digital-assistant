var StressBox = React.createClass({
  getInitialState: function(){
    return{  }
  },
  resetBoxes: function(e){
    var siblings;
    siblings = $(e.target).parent().parent().children().children()
    siblings.each(function(i){
      $(siblings[i]).removeClass('btn-warning')
      $(siblings[i]).addClass('btn-default')
    })
  },
  shade: function(stress){
    // console.log(stress)
  },
  update: function(data) {
    $.ajax({
      url: '/npcs/' + data.npc.id,
      data: data,
      dataType: 'JSON',
      method: 'PUT',
      success: function(response){
        this.props.changeParent(response)
        ReactDOM.render(<StressBox changeParent={this.props.changeParent} npcId={response.id} maxPhysicalStress={response.max_physical_stress} maxMentalStress={response.max_mental_stress} mentalStress={response.mental_stress} physicalStress={response.physical_stress} />, document.getElementById('stress-container'))
      }.bind(this)
    })
  },
  render: function(){
    var phStresses = []
    for (var i = 0; i < this.props.maxPhysicalStress; i++) {
      var shaded;
          if(i < this.props.physicalStress) {
            shaded = true
          } else {
            shaded = false
          }
          phStresses.push(<Stress npcId={this.props.npcId} key={i} update={this.update} shaded={shaded} id={"physical" + i} stressValue={i+1} fillBoxes={this.fillBoxes} maxStress={this.props.MaxPhysicalStress} stress={this.props.physicalStress} stressType="physical" />)
        }
    var mStresses = []
    for (var i = 0; i < this.props.maxMentalStress; i++) {
        var shaded;
          if(i < this.props.mentalStress){
            shaded = true
          } else {
            shaded = false
          }
          mStresses.push(<Stress npcId={this.props.npcId} key={i} update={this.update} shaded={shaded} id={"mental" + i} stressValue={i+1} fillBoxes={this.fillBoxes} maxStress={this.props.MaxMentalStress} stress={this.props.mentalStress} stressType="mental" />)
        }
    return(
      <div>
        <div>
          Physical Stress:
          <div className="btn-group" onMouseLeave={this.resetBoxes} id='physical-stress-target'>
            {phStresses.reverse()}
          </div>
        </div>
        <div>
          Mental Stress:
          <div className="btn-group" onMouseLeave={this.resetBoxes} id='mental-stress-target'>
            {mStresses.reverse()}
          </div>
        </div>
      </div>
    )
  }
})
