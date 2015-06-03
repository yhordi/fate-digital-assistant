var View = function() {}

View.prototype = {
  appendSystem: function(data) {
    for (var i = 0; i < data.length; i++) {
      $('#target').append('<h1>'+ data[i].name + '</h1>');
      $('#target').append('<p>' + data[i].description + '</p>')
    }
  }
}