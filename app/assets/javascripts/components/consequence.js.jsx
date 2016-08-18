var Consequence = React.createClass({
  render: function(){
    return(
      <li className="list-group-item" id={this.props.id}>
        <h4>{this.props.shiftValue} {this.props.name}</h4>
      </li>
    )
  }
})
