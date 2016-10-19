var ConsequenceList = React.createClass({
  getInitialState: function(){
    return {consequences: this.props.consequences}
  },
  create: function(form){
    var data = {consequence: {}}
    data.consequence.name = form.name.value
    data.consequence.severity = form.severity.value
    data.consequence.shift_value = form.shift.value
    data.consequence.npc_id = this.props.npcId
    $.ajax({
      data: data,
      url: '/npcs/' + data.consequence.npc_id + '/consequences/',
      method: 'POST',
      dataType: 'JSON',
    }).done(function(response){
      if(response.consequences == undefined) {
        console.error(response.errors.toString())
        $('#consequence-notice').prepend(response.errors.toString())
        $('#consequence-notice').fadeOut(3000)
      } else {
        this.setState(response)
      }
    }.bind(this))
  },
  update: function(consequence) {
    var url = '/consequences/' + consequence.id
    var container = document.getElementById('consequence-form-target')
    $.ajax({
      url: url,
      data: {consequence: consequence, npc_id: this.props.npcId},
      method: 'PUT',
      success: function(response){
        ReactDOM.unmountComponentAtNode(container);
        this.setState(response)
      }.bind(this)
    })
  },
  buildFormData: function(e){
    e.preventDefault()
    container = document.getElementById('consequence-form-target')
    ReactDOM.render(<ConsequenceForm create={this.create} button='Create Consequence' container={container}/>, container)
  },
  onChildChanged: function(newState){
    this.setState(newState)
  },
  render: function(){
    var consequences = this.state.consequences.map(function(consequence, index){
      return(
        <Consequence key={index} npcId={this.props.npcId} consequenceId={consequence.id} id={consequence.severity + "-target" + index} shiftValue={consequence.shift_value} number={this.props.number} severity={consequence.severity} name={consequence.name} buildFormData={this.buildFormData} delete={this.handleDelete} edit={this.handleEdit} changeParent={this.onChildChanged} update={this.update} />
      )
    }.bind(this))
    return(
      <div>
        <h3>Consequences <a onClick={this.buildFormData} className="fa fa-plus" id='new-consequence'></a></h3>
        <div id='consequence-notice'></div>
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
