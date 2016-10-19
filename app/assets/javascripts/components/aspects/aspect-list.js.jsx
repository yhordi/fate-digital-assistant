var AspectList = React.createClass({
  getInitialState: function(){
    return {aspects: this.props.data}
  },
  edit: function(data, container){
    ReactDOM.render(
      <AspectForm changeParent={this.onChildChanged} data={data} button="Update aspect"/>, container
    )
  },
  destroy: function(data){
    $.ajax({
      url: data.url,
      data: data,
      method: 'DELETE',
      success: function(response){
        this.setState(response)
      }.bind(this)
    })
  },
  getForm: function(e){
    e.preventDefault
    var data = {aspectable_type: this.props.aspectableType,
                aspectable_id: this.props.aspectableId}
    var container = document.getElementById('aspect-form-target')
    ReactDOM.render(<AspectForm changeParent={this.onChildChanged} parentComponent={this.props.npc} changeParent={this.onChildChanged} data={data} button="Create Aspect"/>, container)
  },
  onChildChanged: function(newState){
    this.setState(newState)
  },
  render: function(){
    var aspects = this.state.aspects.map(function(aspect, index){
      return (
        <Aspect destroy={this.destroy} edit={this.edit} changeParent={this.onChildChanged} data={aspect} key={index} />
      )
    }.bind(this))
    return(
      <div>
        <div>
          <h3>
            Aspects <a className='fa fa-plus' id='new-aspect' onClick={this.getForm}></a>
          </h3>
        </div>
        <div id='aspect-notice'></div>
        <div className='well well-lg'>
        <div id="aspect-form-target"></div>
          {aspects}
        </div>
      </div>
    )
  }
})
