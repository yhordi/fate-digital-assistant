var StressBox = React.createClass({
  getInitialState: function(){
    return{  }
  },
  maxPStress: function(){
    var stresses = []
    for (var i = 0; i == this.props.maxPhysicalStress; i++) {
          stresses.push(<Stress key={i} maxStress={this.props.MaxPhysicalStress} stress={this.props.physicalStress} />)
        }
    return stresses
  },
  render: function(){
    var phStresses = []
    for (var i = 0; i < this.props.maxPhysicalStress; i++) {
          phStresses.push(<Stress key={i} maxStress={this.props.MaxPhysicalStress} stress={this.props.physicalStress} />)
        }
    var mStresses = []
    for (var i = 0; i < this.props.maxMentalStress; i++) {
          mStresses.push(<Stress key={i} maxStress={this.props.MaxMentalStress} stress={this.props.mentalStress} />)
        }
    return(
      <div>
        <div>
          Physical Stress:
          <div className="btn-group" id='physical-stress-target'>
            {phStresses}
          </div>
        </div>
        <div>
          Mental Stress:
          <div className="btn-group" id='physical-stress-target'>
            {mStresses}
          </div>
        </div>
      </div>
    )
  }
})
