const inputId = 'notes';

document.addEventListener('DOMContentLoaded', function() {
  const textarea = document.getElementById(inputId)
  chrome.storage.sync.get(inputId, function(items) {
    textarea.textContent = items[inputId] || ''
  })

  textarea.addEventListener('keyup', function(event) {
    saveChanges(event.target.textContent)
  })
});

function saveChanges() {
  const textarea = document.getElementById(inputId);
  // Get a value saved in a form.
  var theValue = textarea.textContent;
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
