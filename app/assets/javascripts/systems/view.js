var View = function() {}

View.prototype = {
  appendForm: function(data) {
    $('#createFormContainer').prepend(data)
  },
  hideFormLink: function() {
    $('.newSystem').hide()
  },
  showFormLink: function() {
    $('.newSystem').show()
  },
  hideForm: function() {
    $('.new_system').hide()
  },
  appendSystem: function(data){
    $('.container').append("<h3><a class='system' href='systems/" + data.id + "'>" + data.name + "</a></h3>")
  },
  errors: function(data) {
    for(var i = 0 in data ) {
      $('.container').prepend('<h3 class="error">' + data[i] +'</h3>')
    }
  },
  removeErrors: function(data) {
    $('.error').remove()
  },
  showSystem: function(data, id) {
    $('#system' + id).prepend(data)
  },
  editForm: function(data) {
    $('.editSystem').hide()
    $('#system1Update').append(data)
  }
}