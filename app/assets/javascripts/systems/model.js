var Model = function() {}

Model.prototype = {
  getSystems: function(url, callback) {
    var request = $.ajax({
      url: url,
      type: 'get'
    })
    request.done(function(response){
      callback(response)
    });
  }
}