var SceneList = React.createClass({
  render: function() {
    var scenes = this.props.scenes.map(function(scene, index) {
      return (
        <Scene systemId={this.props.systemId} data={scene} key={scene.id} />
      )
    }.bind(this));
    return(
      <div className='panel panel-default'>
        <div id='scene-form-target'></div>
        <div>{scenes}</div>
      </div>
    )
  }
})
