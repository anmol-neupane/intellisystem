{
  const items = document.querySelectorAll('.faq-item');
  const fill = document.getElementById('progressFill');
  const label = document.getElementById('progressLabel');
  const total = items.length;
  const opened = new Set();

  items.forEach(item => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all others
      items.forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        opened.add(item);
      }

      // Update progress
      const pct = Math.round((opened.size / total) * 100);
      fill.style.width = pct + '%';
      label.textContent = `${opened.size} / ${total} answered`;
    });
  });
}
