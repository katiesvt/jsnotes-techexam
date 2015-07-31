$(document).ready(function() {
  $('textarea').val(localStorage.getItem('noteValue'));
  updateLastSavedText();

  $('textarea').on('change keyup', saveToLocalStorage);
});

saveToLocalStorage = function() {
  localStorage.setItem('noteValue', $('textarea').val());
  localStorage.setItem('lastSaveOffset', Date.now());

  updateLastSavedText();
};

updateLastSavedText = function() {
  var saveOffset = parseInt(localStorage.getItem('lastSaveOffset'));

  if (isNaN(saveOffset)) saveOffset = 0;

  $('.last-save').text(moment(saveOffset).fromNow());
};
