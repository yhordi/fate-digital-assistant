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
    console.log()
    $('.container').append("<h3><a href='systems/" + data.id + "'>" + data.name + "</a></h3>")
    $('.container').append("<p>" + data.description + "</p>")
  }
}