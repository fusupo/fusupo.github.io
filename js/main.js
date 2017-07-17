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

var left = ['col-md-3', 'col-sm-2'];
var middle = ['col-md-6', 'col-sm-8'];
var right = ['col-md-3', 'col-sm-2'];

var container = mkDiv(['container-fluid']);

var preamble = document.getElementById('preamble');
var content = document.getElementById('content');
var postamble = document.getElementById('postamble');
var subtitle = document.getElementById('subtitle');

var nav_index = document.querySelector('#nav.nav-index');
var nav_about = document.querySelector('#nav.nav-about');
var nav_post = document.querySelector('#nav.nav-post');

var header_lrg = document.querySelector('#header.lrg');
var header_sml = document.querySelector('#header.sml');

var mainrow = mkDiv(['row']);
var centerrow = mkDiv(['row']);
var postamblerow = mkDiv(['row']);
var contentrow = mkDiv(['row']);
var preamblerow = mkDiv(['row']);

document.body.appendChild(container); // Append <button> to <body>

container.appendChild(mainrow);

mainrow.appendChild(mkDiv(left));
mainrow.appendChild(centerrow);
mainrow.appendChild(mkDiv(right));

centerrow.appendChild(preamble);
centerrow.appendChild(content);
centerrow.appendChild(postamble);

// preamblerow.appendChild(mkDiv(left));
// preamblerow.appendChild(preamble);
// preamblerow.appendChild(mkDiv(right));

// contentrow.appendChild(mkDiv(left));
// contentrow.appendChild(content);
// contentrow.appendChild(mkDiv(right));

// postamblerow.appendChild(mkDiv(left));
// postamblerow.appendChild(postamble);
// postamblerow.appendChild(mkDiv(right));

// addClass(preamble, middle);
// addClass(content, middle);
// addClass(postamble, middle);

addClass(centerrow, middle);

nav_post && addClass(nav_post, ['col-md-2', 'col-sm-3']);
header_sml && addClass(header_sml, ['col-md-10', 'col-sm-9']);

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

// formatTimestamps('.title .timestamp', 'MMMM Do YYYY');
// formatTimestamps('.post-list .timestamp', 'MMM DD');

//////////////////////////////////////////////////////////////////////////////

var randomSubtitile = () => {
  var potentials = ['foo', 'bar', 'baz', 'javascript, clojure, things between'];
  var msg = potentials[Math.floor(Math.random() * potentials.length)];
  subtitle.innerHTML = msg;
};

subtitle && randomSubtitile();

setTimeout(() => {
  preamble.style.display = 'inline-block';
}, 0);

setTimeout(() => {
  content.style.display = 'block';
}, 0);

setTimeout(() => {
  postamble.style.display = 'block';
}, 0);

//////////////////////////////////////////////////////////////////////////////
//})();

var title = document.querySelector('h1.title').firstChild || null;
var ts = document.querySelector('h1.title span.timestamp').firstChild || null;
title &&
  ts &&
  (document.querySelector('head title').innerHTML =
    title.textContent + ts.textContent);
