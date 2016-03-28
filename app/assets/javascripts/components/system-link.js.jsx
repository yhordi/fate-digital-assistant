var Systemlink = React.createClass({
  handleClick: function(e){
    e.preventDefault()
    var container = document.getElementById('container')
    var systemProps = this.props.data
    ReactDOM.unmountComponentAtNode(container)
    ReactDOM.render(
      <System name={systemProps.name} button="Update System" description={systemProps.description} id={systemProps.id} />, container
    ), container
  },
  render: function(){
    return(
    <div>
      <a onClick={this.handleClick} index={this.props.index} description={this.props.description} id={'systemLink' + this.props.data.id}>
        {this.props.data.name}
      </a>
    </div>
    )
  }
})
