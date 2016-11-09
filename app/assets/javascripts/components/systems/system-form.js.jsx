var Systemform = React.createClass({
  check: function(e) {
    if(e.target.checked == true){
      this.setState({default_set: true})
    } else {
      this.setState({default_set: false})
    }
  },
  checkFields: function(){
    var errors = false
    if(this.state.name == undefined || this.state.name == ''){
      $('#nameNotice').append(" - name can't be blank").addClass('dark error')
      errors = true
    };
    if(this.state.description == undefined || this.state.description == '') {
      $('#descNotice').append(" - description can't be blank").addClass('dark error')
      errors = true
    };
    if(errors == true) {
      throw new Error("Blank fields are preventing execution");
    };
  },
  create: function(){
    var data = {system: this.state}
    this.checkFields()
    $.ajax({
      url: '/systems',
      method: 'POST',
      data: data,
      success: function(data){
        var container = document.getElementById('container')
        this.setState({systems: data})
        ReactDOM.render(
          <System name={data.name} id={data.id} button="Update System" description={data.description} />, container
        );
        $('#notice').prepend('System Created!').addClass('notice')
        $('#notice').fadeOut(3000)
      }.bind(this),
      error: function(data){
        var response = JSON.parse(data.responseText)
        var errors = response.error.errors
        for(i in errors) {
          $('#nameNotice').prepend(errors[i] + " ").addClass('error')
          $('#nameNotice').fadeOut(3000)
        }
      }
    })
    this.setState({name: '', description: ''})
  },
  createButton: function() {
    this.setState({button: 'Create System'})
  },
  getInitialState: function() {
    return { name: this.props.data.name, description: this.props.data.description }
  },
  handleBack: function(e){
    e.preventDefault()
    if(this.props.button == "Create System") {
      this.backToSystem()
    } else {
    this.backToSystems()
    }
  },
  backToSystem: function(){
    var container = document.getElementById('form-target')
    ReactDOM.unmountComponentAtNode(container)
  },
  backToSystems: function(){
    var container = document.getElementById('container')
    ReactDOM.unmountComponentAtNode(container)
    ReactDOM.render(
      <System id={this.props.data.id} description={this.props.data.description} name={this.props.data.name} />, container
    )
  },
  handleSubmit: function(e) {
    e.preventDefault()
    var action = document.getElementsByClassName('submit')[0].value[0]
    if (action == 'U'){
      this.update()
    } else if (action == 'C') {
      this.create()
    } else {
      console.error('Button action is invalid')
    }
  },
  update: function(){
    var data = {system: this.state}
    var url = '/systems/' + this.props.data.id
    var props = this.props
    $.ajax({
      url: url,
      data: data,
      method: 'PUT',
      success: function(response) {
        var container = document.getElementById('container')
        ReactDOM.render(
          <System name={data.system.name} button={this.props.button} id={this.props.data.id} description={data.system.description} />, container
        );
      }.bind(this)
    })
  },
  updateButton: function(){
    this.setState({button: 'Update System'})
  },
  updateDescriptionState: function(e){
    this.setState({ description: e.target.value });
  },
  updateNameState: function(e){
    this.setState({ name: e.target.value });
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <fieldset className="form-group">
            <div title="Your system's name.">
              <h3>{this.props.button}
                <a onClick={this.handleBack}>
                  <span className="fa fa-close">
                  </span>
                </a>
              </h3>
              <label for="name">System Name</label>
            </div>
            <input id="name" className='form-control' onChange={this.updateNameState} value={this.state.name} type='text'/><span id='nameNotice'></span>
            <div>
              <div title="You'll write a brief description here to give players a quick understanding of what your system is.">
                <label for="desc">Description</label>
              </div>
              <textarea id="desc" className='form-control' onChange={this.updateDescriptionState} value={this.state.description}></textarea>
              <span id="descNotice"></span>
            </div>
            <input className="submit" type='submit' value={this.props.button}/>
          </fieldset>
        </form>
      </div>
    );
  }
});
