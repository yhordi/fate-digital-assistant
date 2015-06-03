$(document).ready(function(){
  var view = new View()
  var model = new Model()
  var controller = new Controller(model, view)
  // controller.bindListeners()
  // controller.getSystems('/systems')
})