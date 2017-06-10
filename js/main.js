//(function() {
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
var subtitle = document.getElementById('subtitle');

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

//////////////////////////////////////////////////////////////////////////////

var formatTimestamps = function(selector, format) {
  var titleTimestamps = document.querySelectorAll(selector);
  if (titleTimestamps.length > 0) {
    Array.prototype.forEach.call(titleTimestamps, function(el, i) {
      var dateStr = el.innerHTML;
      dateStr = dateStr.substr(1, dateStr.length - 2);
      var mom = moment(dateStr, 'YYYY-MM-DD ddd');
      el.innerHTML = mom.format(format);
    });
  }
};

formatTimestamps('.title .timestamp', 'MMMM Do YYYY');
formatTimestamps('.post-list .timestamp', 'MMM DD');

//////////////////////////////////////////////////////////////////////////////

var randomSubtitile = () => {
  var potentials = ['foo', 'bar', 'baz', 'javascript, clojure, things between'];
  var msg = potentials[Math.floor(Math.random() * potentials.length)];
  subtitle.innerHTML = msg;
};

subtitle && randomSubtitile();

setTimeout(() => {
  preamble.style.display = 'block';
}, 0);

setTimeout(() => {
  content.style.display = 'block';
}, 0);

setTimeout(() => {
  postamble.style.display = 'block';
}, 0);

//////////////////////////////////////////////////////////////////////////////
//})();
