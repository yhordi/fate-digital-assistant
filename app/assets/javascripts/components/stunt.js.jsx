var Stunt = React.createClass({

  render: function() {
    return(
      <div className='card m-top-m'>
        <h4 className="card-header no-margin m-btm ">{this.props.data.name}</h4>
        <p>{this.props.data.description}</p>
      </div>
    );
  }
});
