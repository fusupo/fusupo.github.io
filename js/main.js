(function() {

  var addClass = function(elm, cls) {
    for (var i = 0; i < cls.length; i++) {
      elm.classList.add(cls[i]);
    }
  };

  var mkDiv = function(cls) {
    var div = document.createElement('DIV');
    addClass(div, cls);
    return div;
  };

  var left = ['col-md-3'];
  var middle = ['col-md-6'];
  var right = ['col-md-3'];

  var container = mkDiv(['container-fluid']);

  var preamble = document.getElementById('preamble');
  var content = document.getElementById('content');
  var postamble = document.getElementById('postamble');

  var postamblerow = mkDiv(['row']);
  var contentrow = mkDiv(['row']);
  var preamblerow = mkDiv(['row']);

  document.body.appendChild(container); // Append <button> to <body>

  container.appendChild(preamblerow);
  container.appendChild(contentrow);
  container.appendChild(postamblerow);

  preamblerow.appendChild(mkDiv(left));
  preamblerow.appendChild(preamble);
  preamblerow.appendChild(mkDiv(right));

  contentrow.appendChild(mkDiv(left));
  contentrow.appendChild(content);
  contentrow.appendChild(mkDiv(right));

  postamblerow.appendChild(mkDiv(left));
  postamblerow.appendChild(postamble);
  postamblerow.appendChild(mkDiv(right));
  
  addClass(preamble, middle);
  addClass(content, middle);
  addClass(postamble, middle);

})();
