var Systemform = React.createClass({
  getInitialState: function() {
    return { name: this.props.data.name, description: this.props.data.description }
  },
  updateNameState: function(e){
    this.setState({ name: e.target.value });
  },
  updateDescriptionState: function(e){
    this.setState({ description: e.target.value });
  },
  createButton: function() {
    this.setState({button: 'Create System'})
  },
  updateButton: function(){
    this.setState({button: 'Update System'})
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
          $('#notice').prepend(errors[i] + " ").addClass('error')
          $('#notice').fadeOut(3000)
        }
      }
    })
    this.setState({name: '', description: ''})
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
        $('#notice').prepend('System updated successfully!').addClass('notice')
        $('#notice').fadeOut(3000)
      }.bind(this)
    })
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
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label for="name">System Name</label>
        </div>
        <input id="name" onChange={this.updateNameState} value={this.state.name} type='text'/> <span id='nameNotice'></span>
        <div>
          <div>
            <label for="desc">Description</label>
          </div>
          <textarea id="desc" onChange={this.updateDescriptionState} value={this.state.description} rows='5' cols='18'></textarea>
          <span id="descNotice"></span>
        </div>
        <input className="submit" type='submit' value={this.props.button}/>
      </form>
    );
  }
});