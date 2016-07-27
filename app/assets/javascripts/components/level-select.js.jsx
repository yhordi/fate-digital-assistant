var LevelSelect = React.createClass({
  getInitialState: function(){
    return(
      {level: this.props.level}
    )
  },
  setLevel: function(e) {
    var level = {level: e.target.value}
    if(this.props.parent == 'skill-select'){
      this.props.changeParent(level)
    } else {
      this.props.update(level)
    }
  },
  render: function(){
    return(
      <select onChange={this.setLevel} name='level'>
        <option>select a new level</option>
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
