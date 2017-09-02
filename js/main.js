const addClass = (elm, cls) => {
  for (let i = 0; i < cls.length; i++) {
    elm.classList.add(cls[i]);
  }
};

const mkDiv = cls => {
  const div = document.createElement('DIV');
  addClass(div, cls);
  return div;
};

const left = ['col-md-3', 'col-sm-2', 'col-xs-1'];
const middle = ['col-md-6', 'col-sm-8', 'col-xs-10'];
const right = ['col-md-3', 'col-sm-2', 'col-xs-1'];

const container = mkDiv(['container-fluid']);

const preamble = document.getElementById('preamble');
const content = document.getElementById('content');
const postamble = document.getElementById('postamble');
const subtitle = document.getElementById('subtitle');

// const nav_index = document.querySelector('#nav.nav-index');
// const nav_about = document.querySelector('#nav.nav-about');
const nav_post = document.querySelector('#nav.nav-post');

// const header_lrg = document.querySelector('#header.lrg');
const header_sml = document.querySelector('#header.sml');

const mainrow = mkDiv(['row']);
const centerrow = mkDiv(['col']);
// const postamblerow = mkDiv(['row']);
// const contentrow = mkDiv(['row']);
// const preamblerow = mkDiv(['row']);

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

// nav_post && addClass(nav_post, ['col-md-2', 'col-sm-3']);
// header_sml && addClass(header_sml, ['col-md-10', 'col-sm-9']);

//////////////////////////////////////////////////////////////////////////////

const formatTimestamps = (selector, format) => {
  const titleTimestamps = document.querySelectorAll(selector);
  if (titleTimestamps.length > 0) {
    Array.prototype.forEach.call(titleTimestamps, el => {
      let dateStr = el.innerHTML;
      dateStr = dateStr.substr(1, dateStr.length - 2);
      const mom = moment(dateStr, 'YYYY-MM-DD ddd');
      el.innerHTML = mom.format(format);
    });
  }
};

// formatTimestamps('.title .timestamp', 'MMMM Do YYYY');
// formatTimestamps('.post-list .timestamp', 'MMM DD');

//////////////////////////////////////////////////////////////////////////////

const randomSubtitile = () => {
  const potentials = ['Guerra Todos', 'javascript, clojure, things between'];
  const msg = potentials[Math.floor(Math.random() * potentials.length)];
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
const tqs = 'h1.title'; // Title Query String
const tsqs = 'h1.title span.timestamp'; // Timestamp Query String
const title = document.querySelector(tqs) !== null
  ? document.querySelector(tqs).firstChild
  : null;
const ts = document.querySelector(tsqs) !== null
  ? document.querySelector(tsqs).firstChild
  : null;
title &&
  ts &&
  (document.querySelector('head title').innerHTML =
    title.textContent + ts.textContent);
