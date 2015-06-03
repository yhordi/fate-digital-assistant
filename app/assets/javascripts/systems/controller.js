var Controller = function(model, view) {
  this.view = view
  this.model = model
}

Controller.prototype = {
  bindListeners: function(event) {
    var controller = this
    $('li a:first-child').on('click', function(e){
      e.preventDefault()
      var url = $(this).attr('href')
      controller.getSystems(url)
    })
  },
  getSystems: function(url){
    this.model.getSystems(url, this.sendSystems.bind(this))
  },
  sendSystems: function(response){
    this.view.appendSystem(response)
  }
}