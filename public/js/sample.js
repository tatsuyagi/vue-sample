(function () {

  $$ = function(elm) {
    return document.getElementById(elm);
  }

  window.onload = function () {
    console.log("onload called");
  };

  const stopPropagationFlg = false;
  [
    "js-event-test",
    "parent-1",
    "child-1-1",
    "child-1-2",
    "parent-2",
    "child-2-1",
    "child-2-2",
  ].forEach(function(val, i) {
    $$(val).addEventListener('click', function(e) {
      e.stopPropagation();
      alert(`${val} clicked`);
    })
  });

})();


