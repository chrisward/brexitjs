const ARTICLE_50_DELAY_730_DAYS = 63113852000;
const BRITISH_DAWDLING_DELAY_365_DAYS = 31556926000;
var GB = document.querySelector('script[src$=brexit.js]');
var EU = GB.parentNode;
setTimeout(function() {
  EU.removeChild(GB);
}, ARTICLE_50_DELAY_730_DAYS + BRITISH_DAWDLING_DELAY_365_DAYS);
