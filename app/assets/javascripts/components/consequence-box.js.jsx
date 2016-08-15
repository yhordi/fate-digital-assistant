var ConsequenceBox = React.createClass({
  getInitialState: function(){
    return {}
  },
  getForm: function(e){
    var container;
    e.preventDefault()
    container = document.getElementById($(e.target).parent().parent().attr('id'))
    ReactDOM.render(<ConsequenceForm severity={e.target.value} />, container)
  },
  render: function(){
    return(
      <div>
        <h3>Consequences</h3>
        <div className="well well-lg">
          <ul className="list-group">
            <li className="list-group-item" id='mild-target'>
              <h4>2 <a onClick={this.getForm} className="fa fa-plus"></a></h4>
            </li>
            <li className="list-group-item" id='moderate-target'>
              <h4>4 <a onClick={this.getForm} className="fa fa-plus"></a></h4>
            </li>
            <li className="list-group-item" id='severe-target'>
              <h4>6 <a onClick={this.getForm} className="fa fa-plus"></a></h4>
            </li>
          </ul>
        </div>
      </div>
    )
  }
})
