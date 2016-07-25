const ARTICLE_50_DELAY = 63113852000;
const BRITISH_DAWDLING_DELAY = 31556926000;
var GB = document.querySelector('script[src$=brexit.js]');
var EU = GB.parentNode;
setTimeout(function() {
  EU.removeChild(GB);
}, ARTICLE_50_DELAY + BRITISH_DAWDLING_DELAY);