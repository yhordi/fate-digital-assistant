var Stunt = React.createClass({
  handleEdit: function(e){
    e.preventDefault()
    var container = document.getElementById("form-target")
    var url = '/stunts/' + this.props.data.id
    ReactDOM.render(
      <StuntForm data={this.props.data} button="Update Stunt"/>, container
    )
  },
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
          {this.props.data.name}
          <span className="btn-group-sm rt" role="group">
            <button type="button" onClick={this.handleEdit} className='btn edit fa fa-pencil-square-o'></button>
            <button type="button" onClick={this.handleDelete} className='btn delete fa fa-trash'></button>
          </span>
        </div>
        <p className='panel-body'>{this.props.data.description}</p>
      </div>
    );
  }
});
