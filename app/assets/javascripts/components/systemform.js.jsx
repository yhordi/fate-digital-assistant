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
    var url = document.URL
    if(url.substr(url.length - 1) == '#') {
      this.createButton()
    } else {
      this.updateButton()
    };
  },
  createButton: function() {
    this.setState({button: 'Create System'})
  },
  updateButton: function(){
    this.setState({button: 'Update System'})
  },
  create: function(){
    data = this.state
    $.ajax({
      url: '/systems',
      method: 'POST',
      data: data
    })
    this.setState({name: '', description: ''})
  },
  update: function(){

  },
  handleSubmit: function(e) {
    e.preventDefault()

  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>System Name</label>
        </div>
          <input onChange={this.updateNameState} value={this.state.name} type='text'/>
        <div>
          <div>
            <label>Description</label>
          </div>
          <textarea onChange={this.updateDescriptionState} value={this.state.description} rows='5' cols='18'></textarea>
        </div>
        <input type='submit' value={this.state.button}/>
      </form>
    );
  }
});
