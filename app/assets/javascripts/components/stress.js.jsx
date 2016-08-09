var Stress = React.createClass({
  getInitialState: function(){
    return {filled: false}
  },
  boxCheck: function(e) {
    e.preventDefault()
    if(this.state.filled == false) {
      this.highlightBoxes(e.target.id)
    } else if(this.state.filled == true) {
      this.highlightBoxes(e.target.id)
    }
  },
  fillBox: function(e){
    e.preventDefault()
    $(e.target).removeClass('btn-default')
    $(e.target).addClass('btn-danger')
  },
  highlightBoxes: function(id){
    var siblings, lastIndex;
    siblings = $('#' + id).parent().parent().children().children()
    lastIndex = id.length - 1
    var id = id[lastIndex]
    siblings.each(function(i){
      if(siblings[i].id[lastIndex] <= id) {
        $(siblings[i]).removeClass('btn-default')
        $(siblings[i]).addClass('btn-warning')
      } else {
        $(siblings[i]).removeClass('btn-warning')
        $(siblings[i]).addClass('btn-default')
      }
    })
  },
  update: function(e){
    e.preventDefault()
    console.log(this.props.stressType == "mental")
    if(this.props.stressType == "mental"){
      this.updateMentalStress()
    } else {
      this.updatePhysicalStress()
    }
  },
  updateMentalStress: function(){
    var data = {npc:
                  {
                    id: this.props.npcId,
                    mental_stress: this.props.stressValue,
                    stressType: this.props.stressType
                  }
                }
    this.props.update(data)
  },
  updatePhysicalStress: function(){
    var data = {npc:
                  {
                    id: this.props.npcId,
                    physical_stress: this.props.stressValue,
                    stressType: this.props.stressType
                  }
                }
    this.props.update(data)
  },
  render: function(){
    if(this.props.shaded == true ) {
      return (
        <span className="btn-group-sm rt" role="group">
        <button id={this.props.id} onMouseOver={this.boxCheck}  className="btn btn-danger" onClick={this.update}></button>
        </span>
        )
    } else {
      return(
        <span className="btn-group-sm rt" role="group">
        <button id={this.props.id} onMouseOver={this.boxCheck}  className="btn btn-default" onClick={this.update}></button>
        </span>
        )
    }
  }
})
