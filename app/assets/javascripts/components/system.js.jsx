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
    console.log(e)
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
  render: function() {
    return (
      <div className='system'>
        <h2>
          {this.props.name}
        </h2>
        <p>{this.props.description}</p>
        <button onClick={this.handleEdit}>Edit</button>
        <button className='delete'>Delete</button>
      </div>
    );
  }
});
