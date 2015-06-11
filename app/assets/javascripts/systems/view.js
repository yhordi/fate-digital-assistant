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
    $('.notice').remove()
  },
  showSystem: function(data, id) {
    $('#system' + id).prepend(data)
    $('.newSystem').hide()
  },
  editForm: function(data, id) {
    $('.editSystem').hide()
    $('.newSystem').hide()
    $('#system'+ id +'Update').append(data)
  },
  hideSystems: function() {
    $('.system').hide()
  },
  showBackLink: function(){
    $('.container').append('<a href="/systems">Back</a>')
  },
  showUpdate: function(data) {
    $('.systemContent').html("")
    $('.systemContent').append("<h4>About " + data.name + ":</h4><p>"+ data.description + "</p>")
    $('.systemContent').append('<div class="notice dark">System updated successfully!</div>')
  }
}