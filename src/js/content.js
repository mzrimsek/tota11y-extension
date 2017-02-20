window.onload = function(){
  var tota11yToolbar = document.getElementById('tota11y-toolbar');
  tota11yToolbar.classList.add('hidden');
};

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  var tota11yToolbar = document.getElementById('tota11y-toolbar');
  tota11yToolbar.classList.toggle('hidden');
});