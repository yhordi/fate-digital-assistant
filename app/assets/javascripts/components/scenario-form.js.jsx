var ScenarioForm = React.createClass({
  getInitialState: function(){
    return({
      name: this.props.data.name,
      description: this.props.data.description,
    })
  },
  changeState: function(e) {
    var prop = e.target.name
    var value = e.target.value
    var scenario = {}
    scenario[prop] = value
    this.setState(scenario)
  },
  handleSubmit: function(e){
    e.preventDefault()
    if(this.props.button[0] == "C"){
      this.create()
    } else {
      this.update()
    }
  },
  update: function() {
  //   var url = '/scenarios/' + this.props.data.id
  //   var container = document.getElementById('scenarios-container')
  //   $.ajax({
  //     url: url,
  //     data: {scenario: this.state},
  //     method: 'PUT',
  //     success: function(response){
  //       ReactDOM.unmountComponentAtNode(container);
  //       ReactDOM.render(<AspectList data={response.scenarios} />, container)
  //     }.bind(this)
  //   })
  },
  create: function(){
    var url = '/systems/' + this.props.systemId + '/scenarios/'
    var data = {scenario: this.state}
    $.ajax({
      url: url,
      data: data,
      method: 'POST'
      }).done(function(response) {
        if(response.scenarios == undefined) {
          console.error(response.errors.toString())
          $('#scenario-notice').prepend(response.errors.toString())
          $('#scenario-notice').fadeOut(3000)
        } else {
          this.props.changeParent({data: response.scenarios})
          ReactDOM.unmountComponentAtNode(document.getElementById('scenario-form-target'));
          // this.setState(response)
        }
      }.bind(this))
  },
  render: function(){
    return(
      <div>
        <form className='input-group' onSubmit={this.handleSubmit}>
          <div title="Your scenario's name.">
            <h3 className="form-header">{this.props.button}
              <a className="close-form" onClick={this.handleBack}>
                <span className="fa fa-close">
                </span>
              </a>
            </h3>
            <label for="name">Scenario Name</label>
          </div>
          <input required id="name" name="name" className='form-control' onChange={this.changeState} value={this.state.name} type='text'/><span id='nameNotice'></span>
          <div>
            <div title="You'll write a brief description here to give players a quick understanding of what your scenario does.">
              <label for="scenario-desc">Description</label>
            </div>
            <textarea id="scenario-desc" name="description" className='form-control' onChange={this.changeState} value={this.state.description}></textarea>
            <span id="descNotice"></span>
          </div>
          <input required className="btn" type='submit' value={this.props.button}/>
        </form>
      </div>
    )
  }
})
