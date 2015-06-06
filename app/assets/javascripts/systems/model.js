var Model = function() {}

Model.prototype = {
  getSystems: function(url, callback) {
    var request = $.ajax({
      url: url,
      type: 'get',
      dataType: 'html'
    })
    request.done(function(response){
      callback(response)
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

  }
}