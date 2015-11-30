$(function() {
  var $cellectors = $(".cellector");
  var $cellectables = $(".cellectable");
  $cellectors.on("click", function() {
    var activateCells = $(this).data("activateCells").split(",");
    var activateCellColor = $(this).data("activateColor");
    $cellectables.removeClass("active success warning danger info");
    for ( var i=0; i<activateCells.length; i++ ) {
      $cellectables.filter(
        function(){
          return $(this).hasClass("plan-"+activateCells[i]);
        }
      ).addClass(activateCellColor);
    }
  });
});
