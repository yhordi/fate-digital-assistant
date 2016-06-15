var Stunt = React.createClass({
  handleDelete: function(e) {
    e.preventDefault()
    var id = this.props.data.id
    var url = '/stunts/'+ id
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
      <div className='panel panel-default'>
        <div className='panel-title panel-heading'>{this.props.data.name}
          <div>
            <a onClick={this.handleEdit} className='edit fa fa-pencil-square fa-2x'></a>
            <a onClick={this.handleDelete} className='delete fa fa-trash fa-2x'></a>
          </div>
        </div>
        <p className='panel-body'>{this.props.data.description}</p>
      </div>
    );
  }
});
