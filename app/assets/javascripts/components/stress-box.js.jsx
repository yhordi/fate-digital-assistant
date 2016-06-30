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
    var stresses = []
    for (var i = 0; i < this.props.maxPhysicalStress; i++) {
          stresses.push(<Stress key={i} maxStress={this.props.MaxPhysicalStress} stress={this.props.physicalStress} />)
        }
    return(
      <div>
        <div>
          Physical Stress:
          <div className="btn-group" id='physical-stress-target'>
            {stresses}
          </div>
        </div>
        <div>
          Mental Stress:
        </div>
      </div>
    )
  }
})
