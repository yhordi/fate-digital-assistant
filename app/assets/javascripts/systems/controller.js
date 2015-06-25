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
      controller.view.hideForm('.newSystem')
      var url = $(this).attr('href')
      controller.getForm(url)
    });
    $('#createFormContainer').on('submit', '#new_system', function(e) {
      e.preventDefault()
      controller.view.showFormLink()
      var url = this.action
      var data = $(this).serialize()
      controller.create(url, data)
    });
    $('.system').on('click', function(e) {
      e.preventDefault()
      var url = $(this).attr('href')
      var id = url.match(/\+?\d+/)
      controller.view.hideForm('.new_system')
      controller.getSystem(url, id)
      controller.bindEdit(e, controller, id)
      controller.bindDelete(e, controller, id)
    });
  },
  bindEdit: function(e, controller, id, url) {
    $('#system' + id).on('click', '.editSystem', function(e) {
      e.preventDefault()
      var url = $(this).attr('href')
      var id = url.match(/\+?\d+/)
      controller.getEdit(url, id)
      controller.bindUpdate(e, controller, id, url)
    });
  },
  bindDelete: function(e, controller, id, url) {
    $('#system' + id).on('click', '.deleteSystem', function(e) {
      var url = $(this).attr('href')
      var id = url[9]
      controller.delete(url, id)
    })
  },
  bindUpdate: function(e, controller, id, url) {
    $('#system'+ id +'Update').on('submit', function(e) {
      e.preventDefault()
      var url = $(this).children(1).attr('action')
      var data = $(this).children().serialize()
      controller.view.hideForm('.edit_system')
      controller.update(url, data, id)
    })
  },
  bindNewSystem: function(controller) {
    $('.system:first-child').on('click', function(e){
      e.preventDefault()
      var url = $(this).attr('href')
      var id = url.match(/\+?\d+/)
      controller.view.hideForm('.new_system')
      controller.getSystem(url, id)
      controller.bindEdit(e, controller, id)
      controller.bindDelete(e, controller, id)
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
  delete: function(url) {
    this.model.delete(url, this.sendDelete.bind(this))
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
    this.view.hideSystems()
    this.view.showSystem(response, id)
  },
  checkResponse: function(response){
    if(response.id == undefined) {
      this.sendErrors(response)
    } else {
      this.sendSystems(response, response.id)
    }
  },
  sendDelete: function(response, id) {
    this.view.deleteMessage(response, id)
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
  sendSystems: function(response, id) {
    this.view.appendSystem(response)
    this.view.newSystemDiv(id)
    this.bindNewSystem(this)
  },
  sendEditForm: function(response, id) {
    this.view.editForm(response, id)
  },
}