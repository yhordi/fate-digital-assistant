var Controller = function(model, view) {}

Controller.prototype = {
  bindListeners: function(event) {
    var controller = this
    $('li a:first-child').on('click', function(e){
      e.preventDefault()
      var url = $(this).attr('href')
      controller.getSystems(url)
    })
  },
  getSystems: function(url){
    $.ajax({
      url: url,
      method: 'GET',
      dataType: 'json'
    }).done(function(data){
      console.log('hello')
    })
  }
}