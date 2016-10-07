var Scene = React.createClass({
  importNpcForm: function(e){
    e.preventDefault()
    $.ajax({
      url: '/systems/' + this.props.systemId + '/npcs',
      data: {names: true}
    }).done(function(response){
      console.log(response)
    })
  },
  render: function(){
    return(
      <div>
        <div>
          <h3>{this.props.data.name}</h3>
          <p>{this.props.data.description}</p>
        </div>
        <div>
          <a alt='import npcs' title='Import Npcs to scene'  className='fa fa-user-plus' onClick={this.importNpcForm}></a>
        </div>
      </div>
    )
  }
})
