var CharacterSkill = React.createClass({
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
  render: function() {
    return(
      <li className="skillCard">
          <h3 className="no-margin card-header">{this.props.data.name}</h3>
        <div>
          Level {this.props.data.level}
          </div>
        <div>
          <button onClick={this.handleEdit} className='edit fa fa-pencil-square-o'></button>
          <button onClick={this.handleDelete} className='delete fa fa-trash'></button>
        </div>
      </li>
    );
  }
});
