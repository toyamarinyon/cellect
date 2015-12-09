import $ from 'jquery'

$( () => {
  const $tickets = $('.ticket');
  const $schedules = $('.schedule--row')
  const scheduleOffClass = 'schedule--row__status-off'
  $tickets.on("click", (event) => {
    const activateEvents = $(event.currentTarget).data('activateEvents').split(',')
    $schedules.addClass(scheduleOffClass)
    for ( var i=0; i<activateEvents.length; i++ ) {
      $schedules
        .filter(`.${activateEvents[i]}`)
        .removeClass(scheduleOffClass)
    }
  })
})
