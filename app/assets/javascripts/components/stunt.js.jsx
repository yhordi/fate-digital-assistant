var Stunt = React.createClass({

  render: function() {
    return(
      <div>
        <h4 className="card-header">{this.props.data.name}</h4>
        <p>{this.props.data.description}</p>
      </div>
    );
  }
});
