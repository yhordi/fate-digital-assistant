var Controller = function(model, view) {
  this.view = view
  this.model = model
}

Controller.prototype = {
  bindListeners: function(event) {
    var controller = this
    $('.newSystem').on('click', function(e){
      e.preventDefault()
      controller.view.hideFormLink()
      var url = $(this).attr('href')
      controller.getForm(url)
    })
  },
  getForm: function(url){
    this.model.getSystems(url, this.sendSystems.bind(this))
  },
  sendSystems: function(response){
    this.view.appendForm(response)
  }
}