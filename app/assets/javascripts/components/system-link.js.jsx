var Systemlink = React.createClass({
  handleClick: function(e){
    // this.setState(index: )
    var container = document.getElementById('container')
    e.preventDefault()
    var systemProps = this.props.data
    ReactDOM.render(
      <System name={systemProps.name} buttonProp="Update System" description={systemProps.description} id={systemProps.id} />, container
    ), container
  },
  render: function(){
    return(
    <div>
      <a onClick={this.handleClick} index={this.props.index} description={this.props.description} id={this.props.id}>
        {this.props.data.name}
      </a>
    </div>
    )
  }
})
