var CharacterSkill = React.createClass({
  getInitialState: function(){
    return {name: this.props.data.name, level: this.props.data.level}
  },
  handleDelete: function(e) {
    e.preventDefault()
    var id = this.props.data.id
    var url = '/character_skills/'+ id
    var data = {id: id, npc_id: this.props.data.npc_id}
    $.ajax({
      url: url,
      data: data,
      method: 'DELETE',
      success: function(response){
        this.props.changeParent(response)
      }.bind(this)
    })
  },
  handleEdit: function(e){
    e.preventDefault()
    this.update()
  },
  onChildChanged: function(newState){
    this.setState(newState)
  },
  update: function(){
    var container = document.getElementById("dropdownTarget" + this.props.data.id)
    var url = '/systems/' + this.props.systemId + '/skills/'
    $.ajax({
      url: url,
      data: {names: 'true'},
      success: function(response){
        ReactDOM.render(<SkillSelectBox id={this.props.data.id} skill={this.props.data.name} button="Update Skill" changeParent={this.onChildChanged} skills={response} />, container)
      }.bind(this)
    })
  },
  render: function() {
    return(
      <li className="skillCard">
          <h3 className="no-margin card-header">{this.state.name}
          <button onClick={this.handleDelete} className='delete fa fa-trash'></button>
          </h3>
        <div>
          Level {this.state.level}
          <button onClick={this.handleEdit} className='edit fa fa-arrows-v'></button>
          </div>
        <div className="buttons">
        </div>
        <div id={"dropdownTarget" + this.props.data.id}>
        </div>
      </li>
    );
  }
});
