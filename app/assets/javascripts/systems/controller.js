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
    });
    $('.content').on('submit', '#new_system', function(e){
      e.preventDefault()
      debugger
      controller.view.hideForm()
      controller.view.showFormLink()
      var url = this.action
      var data = $(this).serialize()
      controller.create(url, data)
    })
  },
  create: function(url, data) {
    this.model.create(url, data, this.sendSystems.bind(this))
  },
  getForm: function(url){
    this.model.getSystems(url, this.sendForm.bind(this))
  },
  sendForm: function(response){
    this.view.appendForm(response)
  },
  sendSystems: function(response){
    this.view.appendSystem(response)
  }
}