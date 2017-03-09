'use strict';

(function () {
  'use strict';

  var text = "<h2>Hello World!!66666</h2>";

  console.log('mod.js  is loads, nice and good!!');

  document.getElementById("example").innerHTML = text;

  var f = function f(v) {
    return v + 50;
  };
  console.log(f(20));
})();