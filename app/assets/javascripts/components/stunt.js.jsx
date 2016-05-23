var Stunt = React.createClass({

  render: function() {
    return(
      <div>
        <h3>{this.props.data.name}</h3>
        <p>{this.props.data.description}</p>
      </div>
    );
  }
});
