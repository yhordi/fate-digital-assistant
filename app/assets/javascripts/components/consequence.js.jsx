var Consequence = React.createClass({
  handleDelete: function(e){
    e.preventDefault()
    var id = this.props.consequenceId
    var url = '/consequences/'+ id
    $.ajax({
      url: url,
      data: {npc_id: this.props.npcId},
      method: 'DELETE',
      success: function(response){
        this.props.changeParent(response)
      }.bind(this)
    })
  },
  handleEdit: function(e){
    e.preventDefault()
    this.props.edit(id, url)
  },
  changeParent: function(e){
    this.props.changeParent(response)
  },
  render: function(){
    return(
      <li className="list-group-item" id={this.props.id}>
        {this.props.shiftValue} {this.props.name} <button type="button" onClick={this.handleEdit} className='btn edit fa fa-pencil-square-o'></button> <button type="button" onClick={this.handleDelete} className='btn delete fa fa-trash'></button>
      </li>
    )
  }
})
