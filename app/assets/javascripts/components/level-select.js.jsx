var LevelSelect = React.createClass({
  getInitialState: function(){
    return(
      {level: this.props.level}
    )
  },
  changeState: function(e) {
    var level = {level: e.target.value}
    this.props.changeParent(level)
    this.update(level)
  },
  update: function(level){
    var url = '/character_skills/' + this.props.id
    $.ajax({
      url: url,
      data: level,
      method: 'PUT',
      success: function(response){
        console.log(response)
        this.setState(level)
      }.bind(this)
    })
  },
  render: function(){
    return(
      <select onChange={this.changeState} name='level'>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6+</option>
      </select>
    )
}
})
