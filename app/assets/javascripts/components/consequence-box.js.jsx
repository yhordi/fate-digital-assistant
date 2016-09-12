var ConsequenceBox = React.createClass({
  getInitialState: function(){
    return {}
  },
  create: function(form){
    var data = {consequence: {}}
    data.consequence.name = form.name.value
    data.consequence.severity = form.severity.value
    data.consequence.shift_value = form.shift.value
    data.consequence.npc_id = this.props.npcId
    data.consequence.shift = data.shift
    $.ajax({
      data: data,
      url: '/npcs/' + data.consequence.npc_id + '/consequences/',
      method: 'POST',
      dataType: 'JSON',
      success: function(response){
        console.log(response)
        ReactDOM.render(<Consequence key={response.id} id={response.severity + "-target" + response.id} shiftValue={response.shift_value}  severity={response.severity} name={response.name} buildFormData={this.buildFormData} />, container)
      }.bind(this)
    })
  },
  buildFormData: function(e){
    e.preventDefault()
    container = document.getElementById('consequence-form-target')
    ReactDOM.render(<ConsequenceForm create={this.create} container={container}/>, container)
  },
  render: function(){
    var consequences = this.props.consequences.map(function(consequence, index){
      return(
        <Consequence key={index} id={consequence.severity + "-target" + index} shiftValue={consequence.shift_value} number={this.props.number} severity={consequence.severity} name={consequence.name} buildFormData={this.buildFormData} />
      )
    }.bind(this))
    return(
      <div>
        <h3>Consequences <a onClick={this.buildFormData} className="fa fa-plus" id='new-consequence'></a></h3>
        <div className="well well-lg">
          <div id='consequence-form-target'></div>
          <ul className="list-group">
            {consequences}
          </ul>
        </div>
      </div>
    )
  }
})
