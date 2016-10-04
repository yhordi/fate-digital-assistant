var Scenario = React.createClass({
  render: function(){
    return(
      <div>
        <h2>{this.props.data.name}
          <a id="edit-scenario" title="edit scenario" onClick={this.handleEdit} className='edit fa fa-pencil-square'></a>
          <a id="delete-scenario" title="delete scenario" onClick={this.handleDelete} className='delete fa fa-trash'></a>
        </h2>
        <p>{this.props.data.description}</p>
        <div>
          <h4>Scenes</h4>
        </div>
      </div>
    )
  }
})
