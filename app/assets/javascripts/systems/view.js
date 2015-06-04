var View = function() {}

View.prototype = {
  appendForm: function(data) {
    $('.content').prepend(data)
  },
  hideFormLink: function() {
    $('.newSystem').hide()
  },
  appendSystem: function(data){
    console.log()
    $('.content').append("<h3><a href='systems/" + data.id + "'>" + data.name + "</a></h3>")
    $('.content').append("<p>" + data.description + "</p>")
  }
}