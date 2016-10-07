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
  handleBack: function(e){
    var url, container;
    e.preventDefault()
    container = document.getElementById('container')
    ReactDOM.unmountComponentAtNode(container)
    url = '/systems/' + this.props.data.system_id + '/scenarios'
    $.ajax({
      url: url,
      success: function(response){
          ReactDOM.render(
            <ScenarioBox data={response} systemId={response.systemId} />, container
          )
      }
    })
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
    var url, container;
    url = '/systems/' + this.props.data.system_id + '/scenarios/' + this.props.data.id
    container = document.getElementById('container')
    $.ajax({
      url: url,
      data: {scenario: this.state},
      method: 'PUT',
      success: function(response){
        ReactDOM.unmountComponentAtNode(container)
        ReactDOM.render(
          <ScenarioBox data={response} systemId={response.systemId} />, container
        )
      }.bind(this)
    })
  },
  create: function(){
    var url, data;
    url = '/systems/' + this.props.systemId + '/scenarios/'
    data = {url: url, scenario: this.state}
    this.props.create(data)
  },
  render: function(){
    return(
      <div>
        <div id="scenario-notice"></div>
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
