var System = React.createClass({
  container: function(){
    return document.getElementById('container')
  },
  propTypes: {
    name: React.PropTypes.string,
    id: React.PropTypes.number,
    description: React.PropTypes.node
  },
  getInitialState: function(){
    return data = {system: this.props};
  },
  handleBack: function(e){
    e.preventDefault(e)
    var container = document.getElementById('container')
    ReactDOM.render(
      <SystemBox />, container
    )
  },
  handleDelete: function(e){
    e.preventDefault(e)
    var url = '/systems/' + this.props.id
    var container = document.getElementById('container')
    $.ajax({
      url: url,
      method: 'DELETE',
      success: function(response){
        var container = document.getElementById('container')
        this.setState({systems: response})
        this.props = this.state
        ReactDOM.unmountComponentAtNode(document.getElementById('nav-container'))
        ReactDOM.render(
          <SystemBox />, container
        )
        $('#notice').prepend('System deleted').addClass('notice')
        $('#notice').fadeOut(3000)
      }.bind(this)
    })
  },
  handleEdit: function(e){
    e.preventDefault();
    var url = '/systems/' + this.props.id + '/edit'
    var button = this.props.button
    $.ajax({
      url: url,
    }).done(function(data){
      var container = document.getElementById('container');
      ReactDOM.render(
        <Systemform button={button} data={data} />, container
      );
    })
  },
  render: function() {
    return (
      <div className="col-md-10" name={this.props.name} description={this.props.description}>
        <p>{this.props.description}</p>
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={this.handleDelete} className='delete'>Delete</button>
      </div>
    );
  }
});
