var LevelSelect = React.createClass({
  getInitialState: function(){
    return(
      {level: this.props.level}
    )
  },
  changeState: function(e) {
    var level = {level: e.target.value}
    this.props.changeParent(level)
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
