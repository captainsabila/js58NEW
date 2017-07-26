/*Create a Checklist: Independent Practice

You'll add the ability to complete tasks in the list. Your program must complete the following rules:

- Through jQuery add a "complete task" link at the end of each to-do item.
- When clicked, the link will cross out the current task (hint: add a class to the list that sets the text-decoration to strikeout).
- Each new task added by the user needs to also have the "complete task" link akt the end.
- Bonus: when user completes task, remove the task from the current list and add it to a completed list below. Do not show this list unless the there are completed items.
- Bonus 2: add the ability to restore items from the completed list to the first list.

*/
$(function() {
  var yourName = prompt('What is your name?');

  $('#name').html(yourName);

  var $thingList = $('#fav-list');
  var $favThing = $('.fav-thing');

  //var MyApp = {};

  var $addComplete = ('<a href="#" class="complete-link">Unfavorite</a>');

  $thingList.children().append(" " + $addComplete);

  var checkItOff = function(event) {
    event.preventDefault();

    $(this).parent().find('span').addClass('strikeout');
    $(this).parent().clone().appendTo('#completed ul');
    $(this).remove();

      if ( $('#completed ul').children().length > 0 ) {
      $('#completed').addClass('show').removeClass('hide');
      $('#completed span').removeClass('strikeout')
      $('#completed .complete-link').remove();
    }
  };


  $('.complete-link').on('click', checkItOff);

  var $button = $('#new-thing-button');
  // button.onclick = function(event) {
  $button.on('click', function(event) {
    event.preventDefault();

    var $newLi = $('<li class="fav-thing">');
    var $newFavThing = $('#new-thing');

    $newLi.html( $newFavThing.val() );

    if ($newLi.html() !== '') {
      $newLi = $newLi.wrapInner('<span>').append(' ' + $addComplete);
      $thingList.append($newLi);
      $newFavThing.val('');

      $('.complete-link').on('click', checkItOff);

    }

  })
});
