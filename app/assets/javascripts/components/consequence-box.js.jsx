var ConsequenceBox = React.createClass({
  getInitialState: function(){
    return {consequences: this.props.consequences}
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
        this.setState(response)
        // ReactDOM.render(<Consequence key={response.id} id={response.severity + "-target" + response.id} shiftValue={response.shift_value}  npcId={this.props.npcId} severity={response.severity} name={response.name} buildFormData={this.buildFormData} delete={this.handleDelete} edit={this.handleEdit} />, document.getElementById('consequence-list'))
      }.bind(this)
    })
  },
  buildFormData: function(e){
    e.preventDefault()
    container = document.getElementById('consequence-form-target')
    ReactDOM.render(<ConsequenceForm create={this.create} container={container}/>, container)
  },
  onChildChanged: function(newState){
    this.setState(newState)
  },
  render: function(){
    var consequences = this.state.consequences.map(function(consequence, index){
      return(
        <Consequence key={index} npcId={this.props.npcId} consequenceId={consequence.id} id={consequence.severity + "-target" + index} shiftValue={consequence.shift_value} number={this.props.number} severity={consequence.severity} name={consequence.name} buildFormData={this.buildFormData} delete={this.handleDelete} edit={this.handleEdit} changeParent={this.onChildChanged}/>
      )
    }.bind(this))
    return(
      <div>
        <h3>Consequences <a onClick={this.buildFormData} className="fa fa-plus" id='new-consequence'></a></h3>
        <div className="well well-lg">
          <div id='consequence-form-target'></div>
          <ul className="list-group" id='consequence-list'>
            {consequences}
          </ul>
        </div>
      </div>
    )
  }
})
