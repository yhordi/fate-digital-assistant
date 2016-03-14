var System = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    id: React.PropTypes.number,
    description: React.PropTypes.node
  },
  getInitialState: function(){
    return data = {system: this.props}
  },
  render: function() {
    return (
      <div className='system'>
        <h2>
          {this.props.name}
        </h2>
        <p>{this.props.description}</p>
        <button>Edit</button>
        <button className='delete'>Delete</button>
      </div>
    );
  }
});
