var s = document.createElement('script');
s.src = chrome.extension.getURL('src/js/tota11y.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);