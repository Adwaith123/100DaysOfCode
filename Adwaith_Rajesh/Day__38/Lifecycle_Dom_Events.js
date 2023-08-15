// lifecycle dom events

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
}); // To check weathe rthe DOM is loaded

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});