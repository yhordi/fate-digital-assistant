var Aspect = React.createClass({
  handleEdit: function(e){
    e.preventDefault()
    var container = document.getElementById("aspect-form-target")
    this.props.edit(this.props.data, container)
  },
  handleDelete: function(e) {
    var data, id;
    e.preventDefault()
    id = this.props.data.id
    data = {url: '/aspects/' + id,
            // id: id,
            aspect: {aspectable_id: this.props.data.aspectable_id,
                     aspectable_type: this.props.data.aspectable_type
                    }
            }
    this.props.destroy(data)
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
