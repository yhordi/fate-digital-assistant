var StuntList = React.createClass({

  render: function() {
    var stunts = this.props.data.map(function(stunt, index){
      return (
        <Stunt data={stunt} key={index} />
      )
    })
    return(
      <div>
        <h2>Stunts</h2>
        {stunts}
      </div>
    );
  }
});
