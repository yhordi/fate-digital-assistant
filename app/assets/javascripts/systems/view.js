var View = function() {}

View.prototype = {
  appendForm: function(data) {
    $('.content').append(data)
  },
  hideFormLink: function() {
    $('.newSystem').hide()
  }
}