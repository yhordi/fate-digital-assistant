var Controller = function(model, view) {
  this.view = view
  this.model = model
}

Controller.prototype = {
  bindListeners: function(event) {
    var controller = this
    $(document).on('click', function(){
      controller.view.removeErrors()
    })
    $('.newSystem').on('click', function(e){
      e.preventDefault()
      controller.view.hideFormLink()
      var url = $(this).attr('href')
      controller.getForm(url)
    });
    $('#createFormContainer').on('submit', '#new_system', function(e) {
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
      var id = url.slice([-1])
      controller.getSystem(url, id)
      controller.bindEdit(e, controller, id)
    });
  },
  bindEdit: function(e, controller, id, url) {
    $('#system' + id).on('click', 'button', function(e) {
      e.preventDefault()
      var url = $(this).attr('href')
      var id = url[9]
      controller.getEdit(url, id)
      controller.bindUpdate(e, controller, id, url)
    });
  },
  bindUpdate: function(e, controller, id, url) {
    $('#system'+ id +'Update').on('submit', function(e) {
      e.preventDefault()
      var url = $(this).children(1).attr('action')
      var data = $(this).children().serialize()
      controller.update(url, data, id)
    })
  },
  getEdit: function(url, id){
    this.model.getRequest(url, this.sendEditForm.bind(this), id)
  },
  create: function(url, data) {
    this.model.create(url, data, this.checkResponse.bind(this))
  },
  update: function(url, data, id) {
    this.model.update(url, data, this.sendUpdate.bind(this), id)
  },
  getForm: function(url) {
    this.model.getRequest(url, this.sendForm.bind(this))
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
    this.view.hideSystems()
    this.view.showBackLink()
  },
  checkResponse: function(response){
    if(response.id == undefined) {
      this.sendErrors(response)
    } else {
      this.sendSystems(response)
    }
  },
  sendUpdate: function(response, id) {
    this.view.showUpdate(response, id)
  },
  sendForm: function(response) {
    this.view.appendForm(response)
  },
  sendErrors: function(response) {
    this.view.errors(response)
  },
  sendSystems: function(response) {
    this.view.appendSystem(response)
  },
  sendEditForm: function(response, id) {
    this.view.editForm(response, id)
  },
}