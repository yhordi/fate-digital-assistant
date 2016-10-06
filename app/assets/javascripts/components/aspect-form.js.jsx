var AspectForm = React.createClass({
  getInitialState: function(){
    return({
      name: this.props.data.name,
      description: this.props.data.description,
      aspectable_id: this.props.data.aspectable_id,
      aspectable_type: this.props.data.aspectable_type
    })
  },
  changeState: function(e) {
    var prop = e.target.name
    var value = e.target.value
    var aspect = {}
    aspect[prop] = value
    this.setState(aspect)
  },
  create: function(){
    var url = '/aspects/'
    var data = {aspect: this.state}
    $.ajax({
      url: url,
      data: data,
      method: 'POST'
      }).done(function(response) {
        if(response.aspects == undefined) {
          console.error(response.errors.toString())
          $('#aspect-notice').prepend(response.errors.toString())
          $('#aspect-notice').fadeOut(3000)
        } else {
          ReactDOM.unmountComponentAtNode(document.getElementById('aspect-form-target'));
          this.setState(response)
          this.props.changeParent(response)
        }
      }.bind(this))
  },
  update: function() {
    var url = '/aspects/' + this.props.data.id
    var container = document.getElementById('aspect-form-target')
    $.ajax({
      url: url,
      data: {aspect: this.state},
      method: 'PUT',
      success: function(response){
        ReactDOM.unmountComponentAtNode(container);
        console.log(response)
        this.props.changeParent(response)
        // ReactDOM.render(<AspectList data={response.aspects} />, container)
      }.bind(this)
    })
  },
  container: function(){
    return(document.getElementById('container'))
  },
  handleBack: function(e){
    e.preventDefault()
    var container = document.getElementById('aspect-form-target')
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
          <div title="Your aspect's name.">
            <h3 className="form-header">{this.props.button}
              <a className="close-form" onClick={this.handleBack}>
                <span className="fa fa-close">
                </span>
              </a>
            </h3>
            <label for="name">aspect Name</label>
          </div>
          <input required id="name" name="name" className='form-control' onChange={this.changeState} value={this.state.name} type='text'/><span id='nameNotice'></span>
          <div>
            <div title="You'll write a brief description here to give players a quick understanding of what your aspect does.">
              <label for="aspect-desc">Description</label>
            </div>
            <textarea id="aspect-desc" name="description" className='form-control' onChange={this.changeState} value={this.state.description}></textarea>
            <span id="descNotice"></span>
          </div>
          <input required className="btn" type='submit' value={this.props.button}/>
        </form>
      </div>
    )
  }
})
