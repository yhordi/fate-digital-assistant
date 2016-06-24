var AspectList = React.createClass({
  getInitialState: function(){
    return {aspects: this.props.data}
  },
  handleClick: function(e){
    e.preventDefault
  },
  render: function(){
    var aspects = this.state.aspects.map(function(aspect, index){
      return (
        <Aspect data={aspect} key={index} />
      )
    }.bind(this))
    return(
      <div>
        <div>
          <h3>Aspects</h3>
            <button className='btn' onClick={this.handleClick}>Add New</button>
          </div>
        <div id="aspect-form-target"></div>
        <div>
          {aspects}
        </div>
      </div>
    )
  }
})
