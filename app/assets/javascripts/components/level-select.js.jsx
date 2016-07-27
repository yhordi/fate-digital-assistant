var LevelSelect = React.createClass({
  getInitialState: function(){
    return(
      {level: this.props.level}
    )
  },
  update: function(e) {
    var level = {level: e.target.value}
    this.props.update(level)
  },

  render: function(){
    return(
      <select onChange={this.update} name='level'>
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
