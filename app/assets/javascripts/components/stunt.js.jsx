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
        <div className='panel-title panel-heading'>
        <div>
          {this.props.data.name}
        </div>
          <div className="btn-group" role="group">
            <button type="button" onClick={this.handleEdit} className='btn edit fa fa-pencil-square-o '></button>
            <button type="button" onClick={this.handleDelete} className='btn delete fa fa-trash'></button>
          </div>
        </div>
        <p className='panel-body'>{this.props.data.description}</p>
      </div>
    );
  }
});
