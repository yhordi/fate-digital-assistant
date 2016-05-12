var Stunt = React.createClass({

  render: function() {
    return(
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.description}</p>
      </div>
    );
  }
});
