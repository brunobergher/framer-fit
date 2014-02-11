/*
 * Framer.Fit 0.1 (2014-02-11)
 * © 2014 Bruno Bergher
 * Free to use under terms of MIT license
 */

utils.resizeToFit = function() {
  var root = document.getElementById("FramerRoot");

  var resizer = function() {
    var content, available, scales, scale;

    scales = { x: 1, y: 1 }

    content = {
      height: root.firstChild.clientHeight,
      width: root.firstChild.clientWidth
    }

    available = {
      height: window.innerHeight,
      width: window.innerWidth
    }

    if(content.width > available.width) scales.x = available.width/content.width;
    if(content.height > available.height) scales.y = available.height/content.height;
    scale = Math.min(scales.x, scales.y);

    if(scale < 1) {
      document.body.style['-webkit-transform'] = "scale(" + scale + ")";
      document.body.style['-moz-transform'] = "scale(" + scale + ")";
      document.body.style['-ms-transform'] = "scale(" + scale + ")";
      document.body.style['-o-transform'] = "scale(" + scale + ")";
      document.body.style['transform'] = "scale(" + scale + ")";

      document.body.style['-webkit-transform-origin'] = "0 0";
      document.body.style['-moz-transform-origin'] = "0 0";
      document.body.style['-ms-transform-origin'] = "0 0";
      document.body.style['-o-transform-origin'] = "0 0";
      document.body.style['transform-origin'] = "0 0";

      document.body.style.overflow = "hidden";
    }
  }

  if(root) {
    resizer();
  } else {
    utils.delay(50, utils.resizeToFit);
  }
}