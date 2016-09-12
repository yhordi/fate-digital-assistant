var ConsequenceForm = React.createClass({
  getInitialState: function(){
    return({shift: 0})
  },
  create: function(e){
    var data, form;
    form = e.target
    e.preventDefault()
    this.handleBack(e)
    this.props.create(e.target)
  },
  handleBack: function(e){
    e.preventDefault()
    var container = document.getElementById('consequence-form-target')
    ReactDOM.unmountComponentAtNode(container)
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
        <h3>Create Consequence
          <a className="close-form" onClick={this.handleBack}>
            <span className="fa fa-close">
            </span>
          </a>
        </h3>
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
        <input className="btn" type='submit' value='Create Consequence'/>
      </form>
    </div>
    )
  }
})
