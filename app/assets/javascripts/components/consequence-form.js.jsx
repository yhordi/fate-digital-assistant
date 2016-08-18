var ConsequenceForm = React.createClass({
  getInitialState: function(){
    return({shift: 0})
  },
  create: function(e){
    var data, form;
    form = e.target
    e.preventDefault()
    this.props.create(e.target)
  },
  setShiftValue: function(e){
    var severity = e.target.value;
    if(severity == 'mild') {
      this.setState({shift: 2})
    }else if(severity == 'moderate'){
      this.setState({shift: 4})
    } else {
      this.setState({shift: 6})
    };
  },
  render: function(){
    return(
    <div>
      <form onSubmit={this.create}>
        <div>
          <label for='name'>description</label>
          <input type='text' name='name' placeholder='consequence text' required />
        </div>
        <div>
          <label for='severity'>severity</label>
          <select onChange={this.setShiftValue} name="severity" required >
            <option disabled selected value=''>choose a severity</option>
            <option>mild</option>
            <option>moderate</option>
            <option>severe</option>
          </select>
        </div>
        <input type='hidden' name='shift' value={this.state.shift} />
        <input type='submit' />
      </form>
    </div>
    )
  }
})
