// Sticky Naviagtion using scrolls

const initialCoords = section1.getBoundingClientRect();

// Scroll is availbale on window object
window.addEventListener('scroll', function (e) {
  if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, // 90 is the height of naviagtion
});

headerObserver.observe(header);