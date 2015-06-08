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
      controller.view.removeErrors()
      var url = $(this).attr('href')
      controller.getForm(url)
    });
    $('.content').on('submit', '#new_system', function(e) {
      e.preventDefault()
      controller.view.hideForm()
      controller.view.showFormLink()
      var url = this.action
      var data = $(this).serialize()
      controller.create(url, data)
    });
    $('.system').on('click', function(e) {
      e.preventDefault()
      var url = this.href
      var id = $(this).attr('href').slice([-1])
      controller.getSystem(url, id)
    });
    $('#system1').on('submit', function(e) {
      e.preventDefault()
      var url = $('form').attr('action')
      debugger
      edit(url)
    });
  },
  edit: function(url, data){
    // build ajax call in model
  },
  create: function(url, data) {
    this.model.create(url, data, this.checkResponse.bind(this))
  },
  getForm: function(url) {
    this.model.getRequest(url, this.sendForm.bind(this))
  },
  sendForm: function(response) {
    this.view.appendForm(response)
  },
  getSystem: function(url, id) {
    if ($('#system' + id + ' > .systemContent')[0] == undefined) {
      this.model.getRequest(url, this.showSystem.bind(this), id)
    } else {
      $('#system' + id).children().remove()
    }
  },
  showSystem: function(response, id) {
    this.view.showSystem(response, id)
  },
  checkResponse: function(response){
    if(response.id == undefined) {
      this.sendErrors(response)
    } else {
      this.sendSystems(response)
    }
  },
  sendErrors: function(response) {
    this.view.errors(response)
  },
  sendSystems: function(response) {
    this.view.appendSystem(response)
  }
}