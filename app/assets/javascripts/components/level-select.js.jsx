var LevelSelect = React.createClass({
  changeState: function(e) {
    var prop = e.target.name
    var value = e.target.value
    var skill = {}
    skill[prop] = value
    this.setState(skill)
    this.props.changeParent(skill)
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
