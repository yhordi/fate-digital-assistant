var StuntForm = React.createClass({
  getInitialState: function(){
    return({})
  },
  changeState: function(e) {
    var prop = e.target.name
    var value = e.target.value
    var stunt = {}
    stunt[prop] = value
    this.setState(stunt)
  },
  container: function(){
    return(document.getElementById('container'))
  },
  handleBack: function(e){
    e.preventDefault()
    var container = this.container()
    ReactDOM.unmountComponentAtNode(container)
    ReactDOM.render(
      <SystemBox />, container
    )
  },
  handleSubmit: function(e){
    e.preventDefault()
    var url = '/npcs/' + this.props.npcId +'/stunts/'
    var data = {stunt: this.state}
    $.ajax({
      url: url,
      data: data,
      method: 'POST',
      success: function(response){
        this.props.npc.data.stunts.push(response);
        ReactDOM.unmountComponentAtNode(this.container());
        ReactDOM.render(<Npc data={this.props.npc.data} />, this.container());
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    })
  },
  render: function(){
    return(
      <div>
        <form className='form center system-form' onSubmit={this.handleSubmit}>
          <div title="Your stunt's name.">
            <h3 className="form-header">{this.props.button}
              <a className="close-form" onClick={this.handleBack}>
                <span className="fa fa-close">
                </span>
              </a>
            </h3>
            <label for="name">Stunt Name</label>
          </div>
          <input id="name" name="name" className='form-field' onChange={this.changeState} value={this.state.name} type='text'/><span id='nameNotice'></span>
          <div>
            <div title="You'll write a brief description here to give players a quick understanding of what your stunt does.">
              <label for="desc">Description</label>
            </div>
            <textarea id="desc" name="description" className='form-field' rows="50" cols="25" onChange={this.changeState} value={this.state.description}></textarea>
            <span id="descNotice"></span>
          </div>
          <input className="submit" type='submit' value={this.props.button}/>
        </form>
      </div>
    )
  }
})
