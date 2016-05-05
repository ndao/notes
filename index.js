var MediumEditor = require('medium-editor');
require('medium-editor/dist/css/medium-editor.css');

const inputId = 'notes';

document.addEventListener('DOMContentLoaded', function() {
  var editor = new MediumEditor('#notes');

  const textarea = document.getElementById(inputId)
  chrome.storage.sync.get(inputId, function(items) {
    textarea.innerHTML = items[inputId] || ''
  })

  textarea.addEventListener('input', function(event) {
    saveChanges(event.target.innerHTML)
  })
});

function saveChanges() {
  const textarea = document.getElementById(inputId);
  // Get a value saved in a form.
  var theValue = textarea.innerHTML;
  // Check that there's some code there.
  if (!theValue) {
    // console.log('Error: No value specified');
    return;
  }
  // Save it using the Chrome extension storage API.
  chrome.storage.sync.set({'notes': theValue}, function() {
    // Notify that we saved.
    // message('Settings saved');
  });
}
