var SceneLink = React.createClass({
  container: function(){
    return document.getElementById('container')
  },
  handleClick: function(e){
    e.preventDefault()
    ReactDOM.render(
      <Scene data={this.props.data} systemId={this.props.systemId} />, this.container()
    )
  },
  render: function() {
    return(
      <div>
        <a onClick={this.handleClick} id={"scene" + this.props.data.id}>{this.props.data.name}</a>
      </div>
    );
  }
});
