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
      <div className='card m-top-m'>
        <h4 className="card-header no-margin m-btm ">{this.props.data.name}
          <button onClick={this.handleEdit} className='edit fa fa-pencil-square-o fa-fw m-left'></button>
          <button onClick={this.handleDelete} className='delete fa fa-trash fa-fw m-left'></button>
        </h4>
        <p>{this.props.data.description}</p>
      </div>
    );
  }
});
