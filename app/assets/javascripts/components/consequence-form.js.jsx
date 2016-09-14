var ConsequenceForm = React.createClass({
  getInitialState: function(){
    return({shift_value: 0, name: this.props.name, id : this.props.consequenceId, severity: null})
  },
  changeState: function(e) {
    var prop = e.target.name
    var value = e.target.value
    var consequence = {}
    consequence[prop] = value
    this.setState(consequence)
  },
  create: function(e){
    var data, form;
    form = e.target
    e.preventDefault()
    this.handleBack(e)
    this.props.create(e.target)
  },
  update: function(e) {
    e.preventDefault()
    this.handleBack(e)
    this.props.update(this.state)
  },
  handleBack: function(e){
    e.preventDefault()
    var container = document.getElementById('consequence-form-target')
    ReactDOM.unmountComponentAtNode(container)
  },
  handleSubmit: function(e){
    e.preventDefault()
    if(this.props.button[0] == "C"){
      this.create(e)
    } else {
      this.update(e)
    }
  },
  setShiftValue: function(e){
    var severity = e.target.value;
    if(severity == 'mild') {
      this.setState({shift_value: 2})
    }else if(severity == 'moderate'){
      this.setState({shift_value: 4})
    } else {
      this.setState({shift_value: 6})
    };
    this.changeState(e)
  },
  render: function(){
    return(
    <div>
      <form onSubmit={this.handleSubmit}>
        <h3>{this.props.button}
          <a className="close-form" onClick={this.handleBack}>
            <span className="fa fa-close">
            </span>
          </a>
        </h3>
        <div>
          <label for='name'>description</label>
          <input onChange={this.changeState} type='text' name='name' value={this.state.name} placeholder='consequence text' required />
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
        <input type='hidden' name='shift' value={this.state.shift_value} />
        <input className="btn" type='submit' value={this.props.button}/>
      </form>
    </div>
    )
  }
})
