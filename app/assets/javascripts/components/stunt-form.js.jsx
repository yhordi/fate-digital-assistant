var StuntForm = React.createClass({
  getInitialState: function(){
    return({
      name: this.props.data.name,
      description: this.props.data.description
    })
  },
  changeState: function(e) {
    var prop = e.target.name
    var value = e.target.value
    var stunt = {}
    stunt[prop] = value
    this.setState(stunt)
  },
  create: function(){
    var url = '/npcs/' + this.props.npcId +'/stunts/'
    var data = {stunt: this.state}
    $.ajax({
      url: url,
      data: data,
      method: 'POST',
      success: function(response){
        // this.props.npc.data.stunts.push(response);
        ReactDOM.unmountComponentAtNode(document.getElementById('form-target'));
        this.props.changeParent(response)
        // ReactDOM.render(<Npc data={this.props.npc.data} />, this.container());
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    })
  },
  update: function() {
    var url = '/stunts/' + this.props.data.id
    var container = document.getElementById('stunts-container')
    $.ajax({
      url: url,
      data: {stunt: this.state, npc_id: this.props.data.npc_id},
      method: 'PUT',
      success: function(response){
        ReactDOM.unmountComponentAtNode(container);
        ReactDOM.render(<StuntList data={response.stunts} />, container)
      }.bind(this)
    })
  },
  container: function(){
    return(document.getElementById('container'))
  },
  handleBack: function(e){
    e.preventDefault()
    var container = document.getElementById('form-target')
    ReactDOM.unmountComponentAtNode(container)
  },
  handleSubmit: function(e){
    e.preventDefault()
    if(this.props.button[0] == "C"){
      this.create()
    } else {
      this.update()
    }
  },
  render: function(){
    return(
      <div>
        <form className='input-group' onSubmit={this.handleSubmit}>
          <div title="Your stunt's name.">
            <h3 className="form-header">{this.props.button}
              <a className="close-form" onClick={this.handleBack}>
                <span className="fa fa-close">
                </span>
              </a>
            </h3>
            <label for="name">Stunt Name</label>
          </div>
          <input id="name" name="name" className='form-control' onChange={this.changeState} value={this.state.name} type='text'/><span id='nameNotice'></span>
          <div>
            <div title="You'll write a brief description here to give players a quick understanding of what your stunt does.">
              <label for="stunt-desc">Description</label>
            </div>
            <textarea id="stunt-desc" name="description" className='form-control' onChange={this.changeState} value={this.state.description}></textarea>
            <span id="descNotice"></span>
          </div>
          <input className="btn" type='submit' value={this.props.button}/>
        </form>
      </div>
    )
  }
})
