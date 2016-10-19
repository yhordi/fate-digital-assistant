var NpcImportForm = React.createClass({
  getInitialState: function(){
    return({names: []})
  },
  names: [],
  buildNpcList: function(e) {
    var value, names;
    value = e.target.value
    names = []
    console.log(value)
    if(this.state.names.includes(value)){
      var index = this.names.indexOf(value)
      delete this.names[index]
      console.log(this.names)
      console.log(this.state.names)
    } else {
      this.names.push(value)
    }
  },
  setNpcs: function(e) {
    e.preventDefault()
    var url = 'systems/' + this.props.systemId + '/scenes/' + this.props.data.id
    $.ajax({
      url: url,
      method: 'PUT',
      data: {names: this.names}
    }).done(function(response){
      console.log(response)
    })
  },
  render: function() {
    var that = this
    var npcList = this.props.npcNames.map(function(name, index){
      return(
        <div>
          <input onChange={that.buildNpcList} value={name} type='checkbox' name="name"/ >
          <label for="name">{name}</label>
        </div>
      )
    });
    return(
      <div className="pre-scrollable panel">
        <form onSubmit={this.setNpcs}>
          {npcList}
          <input type="submit" />
        </form>
      </div>
    )
  }
})
