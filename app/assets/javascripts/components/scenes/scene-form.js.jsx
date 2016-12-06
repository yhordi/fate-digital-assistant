var SceneForm = React.createClass({
  getInitialState: function(){
    return({})
  },
  changeState: function(e) {
    var prop = e.target.name
    var value = e.target.value
    var scene = {}
    scene[prop] = value
    this.setState(scene)
  },
  create: function(){
    var url = '/scenarios/' + this.props.scenarioId + '/scenes/'
    var data = {scene: this.state}
    $.ajax({
      url: url,
      data: data,
      method: 'POST'
      }).done(function(response) {
        console.log(response)
        if(response.errors != undefined) {
          console.error(response.errors.toString())
          $('#scene-notice').prepend(response.errors.toString())
          $('#scene-notice').fadeOut(3000)
        } else {
          ReactDOM.unmountComponentAtNode(document.getElementById('scene-form-target'));
          this.setState(response)
          this.props.changeParent(response)
        }
      }.bind(this))
  },
  handleSubmit: function(e){
    e.preventDefault()
    if(this.props.button[0] == "C"){
      this.create()
    } else {
      this.update()
    }
  },
  render: function(){
    return(
      <div>
        <div>
          <form className='input-group' onSubmit={this.handleSubmit}>
            <div title="Your scene's name.">
              <h3 className="form-header">{this.props.button}
                <a className="close-form" onClick={this.handleBack}>
                  <span className="fa fa-close">
                  </span>
                </a>
              </h3>
              <label for="name">Scene Name</label>
            </div>
            <input required id="name" name="name" className='form-control' onChange={this.changeState} value={this.state.name} type='text'/><span id='nameNotice'></span>
            <div>
              <div title="You'll write a brief description here to give players a quick understanding of what your scene does.">
                <label for="scene-desc">Description</label>
              </div>
              <textarea id="scene-desc" name="description" className='form-control' onChange={this.changeState} value={this.state.description}></textarea>
              <span id="descNotice"></span>
            </div>
            <input required className="btn" type='submit' value={this.props.button}/>
          </form>
        </div>
      </div>
    )
  }
})
