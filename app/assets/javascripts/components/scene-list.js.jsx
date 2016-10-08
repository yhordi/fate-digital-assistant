var SceneList = React.createClass({
  handleClick: function(e){
    e.preventDefault()
    ReactDOM.render(
      <Scene systemId={this.props.systemId} data={this.props.data} />, document.getElementById('container')
    )
  },
  render: function(){
    var sceneLinks = this.props.scenes.map(function(scene, index) {
      return (
        <SceneLink systemId={this.props.systemId} data={scene} key={scene.id} />
      )
    }.bind(this));
    return(
      <div>
        <div id='scene-form-target'></div>
        <div>{sceneLinks}</div>
      </div>
    )
  }
})
