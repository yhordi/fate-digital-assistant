var View = function() {}

View.prototype = {
  appendForm: function(data) {
    $('.content').prepend(data)
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
    $('.container').append("<h3><a href='systems/" + data.id + "'>" + data.name + "</a></h3>")
    $('.container').append("<p>" + data.description + "</p>")
  },
  errors: function(data) {
    for(var i = 0 in data ) {
      $('.container').prepend('<h3 class="error">' + data[i] +'</h3>')
    }
  },
  removeErrors: function(data) {
    $('.error').remove()
  }
}