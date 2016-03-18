var Systemform = React.createClass({
  componentWillMount: function() {
    this.checkUrl()
  },
  getInitialState: function() {
    return { name: this.props.data.name, description: this.props.data.description }
  },
  updateNameState: function(e){
    this.setState({ name: e.target.value });
  },
  updateDescriptionState: function(e){
    this.setState({ description: e.target.value });
  },
  checkUrl: function(){
    var urlSubstring = document.URL.substr(document.URL.length - 1)
    if(urlSubstring != 's') {
      this.updateButton()
    } else {
      this.createButton()
    };
  },
  createButton: function() {
    this.setState({button: 'Create System'})
  },
  updateButton: function(){
    this.setState({button: 'Update System'})
  },
  create: function(){
    var data = this.state
    $.ajax({
      url: '/systems',
      method: 'POST',
      data: data,
      dataType: 'json',
      success: function(data){
        var container = document.getElementById('container')
        this.setState({systems: data})
        debugger
        ReactDOM.render(
          <System name={data.name} id={data.id} description={data.description} />, container
        )
      }.bind(this)
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
          <System name={data.system.name} id={this.props.data.id} description={data.system.description} />, container
        )
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
          <input id="name" onChange={this.updateNameState} value={this.state.name} type='text'/>
        <div>
          <div>
            <label for="desc">Description</label>
          </div>
          <textarea id="desc" onChange={this.updateDescriptionState} value={this.state.description} rows='5' cols='18'></textarea>
        </div>
        <input className="submit" type='submit' value={this.state.button}/>
      </form>
    );
  }
});
