var Aspect = React.createClass({
  handleEdit: function(e){
    e.preventDefault()
    // var container = document.getElementById("form-target")
    // var url = '/aspects/' + this.props.data.id
    // ReactDOM.render(
    //   <aspectForm data={this.props.data} button="Update aspect"/>, container
    // )
  },
  handleDelete: function(e) {
    e.preventDefault()
    var id = this.props.data.id
    var url = '/aspects/'+ id
    var data = {id: id, aspectable_id: this.props.data.aspectable_id}
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
      <div id={'aspect' + this.props.data.id} className='panel panel-default'>
        <div className='panel-title panel-heading'>
          {this.props.data.name}
          <span className="btn-group-sm rt" role="group">
            <button type="button" onClick={this.handleEdit} className='edit-aspect btn edit fa fa-pencil-square-o'></button>
            <button type="button" onClick={this.handleDelete} className='btn delete fa fa-trash'></button>
          </span>
        </div>
        <p className='panel-body'>{this.props.data.description}</p>
      </div>
    );
  }
});
