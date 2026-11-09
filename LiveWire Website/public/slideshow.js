(() => {
  const carousel = document.querySelector('.slideshow');
  if (!carousel) return;
  const slides = [...carousel.querySelectorAll('.slide-stage img')];
  const toggle = carousel.querySelector('.slide-toggle');
  const count = carousel.querySelector('.slide-count');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0;
  let paused = motion.matches;
  let timer;
  function show(next) {
    slides[index].classList.remove('active');
    slides[index].setAttribute('aria-hidden', 'true');
    index = (next + slides.length) % slides.length;
    slides[index].loading = 'eager';
    slides[index].classList.add('active');
    slides[index].removeAttribute('aria-hidden');
    slides[(index + 1) % slides.length].loading = 'eager';
    count.textContent = `${index + 1} / ${slides.length}`;
  }
  function schedule() {
    clearInterval(timer);
    toggle.textContent = paused ? 'Play slideshow' : 'Pause slideshow';
    if (!paused && !document.hidden && !carousel.matches(':hover') && !carousel.contains(document.activeElement)) {
      timer = setInterval(() => show(index + 1), 5000);
    }
  }
  carousel.querySelector('.slide-prev').addEventListener('click', () => { show(index - 1); schedule(); });
  carousel.querySelector('.slide-next').addEventListener('click', () => { show(index + 1); schedule(); });
  toggle.addEventListener('click', () => { paused = !paused; schedule(); });
  carousel.addEventListener('mouseenter', schedule);
  carousel.addEventListener('mouseleave', schedule);
  carousel.addEventListener('focusin', schedule);
  carousel.addEventListener('focusout', () => setTimeout(schedule, 0));
  document.addEventListener('visibilitychange', schedule);
  motion.addEventListener('change', () => { paused = motion.matches; schedule(); });
  slides[1].loading = 'eager';
  schedule();
})();
