window.onload = function(){
  var tota11yToolbar = document.getElementById('tota11y-toolbar');
  tota11yToolbar.classList.add('hidden');
};

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  var tota11yToolbar = document.getElementById('tota11y-toolbar');
  var classList = tota11yToolbar.classList;

  if(classList.contains("hidden")){
    classList.remove("hidden");
    classList.add("shown");
  }
  else {
    classList.remove("shown");
    classList.add("hidden");
  }
});