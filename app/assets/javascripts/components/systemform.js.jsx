var Systemform = React.createClass({
  getInitialState: function() {
    return { name: this.props.name, description: this.props.description }
  },
  updateNameState: function(e){
    this.setState({ name: e.target.value });
  },
  updateDescriptionState: function(e){
    this.setState({ description: e.target.value });
  },
  handleSubmit: function(e) {
    e.preventDefault()
    data = this.state
    $.ajax({
      url: '/systems',
      method: 'POST',
      data: data
    })
    this.setState({name: '', description: ''})
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
        <input type='submit' value='Create System'/>
      </form>
    );
  }
});
