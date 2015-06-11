var Model = function() {}

Model.prototype = {
  getRequest: function(url, callback, id) {
    var request = $.ajax({
      url: url,
      type: 'get',
      dataType: 'html'
    })
    request.done(function(response){
      callback(response, id)
    });
  },
  create: function(url, data, callback) {
    var request = $.ajax({
      url: url,
      type: 'post',
      data, data
    })
    request.done(function(response){
      callback(response)
    });
  },
  update: function(url, data, callback, id) {
    var request = $.ajax({
      url: url,
      type: 'patch',
      data, data
    })
    request.done(function(response){
      callback(response)
    });
  }
}