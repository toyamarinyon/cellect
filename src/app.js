import $ from 'jquery'
$( () => {
  const $cellectors = $(".cellector")
  const $cellectables = $(".cellectable")
  $cellectors.on("click", (event) => {
    const activateCells = $(event.currentTarget).data("activateCells").split(",")
    const activateCellColor = $(event.currentTarget).data("activateColor")
    $cellectables.removeClass("active success warning danger info")
    for ( var i=0; i<activateCells.length; i++ ) {
      $cellectables
        .filter(".plan-"+activateCells[i])
        .addClass(activateCellColor)
    }
  })
})
