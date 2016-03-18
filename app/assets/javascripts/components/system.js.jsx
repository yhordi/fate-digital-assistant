var System = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    id: React.PropTypes.number,
    description: React.PropTypes.node
  },
  getInitialState: function(){
    return data = {system: this.props}
  },
  handleEdit: function(e){
    e.preventDefault()
    var url = this.props.id + '/edit'
    $.ajax({
      url: url
    }).done(function(data){
      var container = document.getElementById('container')
      ReactDOM.render(
        <Systemform data={data} />, container
      );
    })
  },
  handleDelete: function(e){
    e.preventDefault(e)
    var url = this.props.id
    var container = document.getElementById('container')
    $.ajax({
      url: url,
      method: 'DELETE',
      success: function(response){
        var container = document.getElementById('container')
        this.setState({systems: response})
        this.props = this.state
        console.log(response)
        ReactDOM.render(
          <SystemBox />, container
        )
      }.bind(this)
    })
  },
  render: function() {
    return (
      <div name={this.props.name} description={this.props.description} className='system'>
        <h2>
          {this.props.name}
        </h2>
        <p>{this.props.description}</p>
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={this.handleDelete} className='delete'>Delete</button>
      </div>
    );
  }
});
