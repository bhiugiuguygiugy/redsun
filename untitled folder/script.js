document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('searchInput');
    const items = document.querySelectorAll('.item');
  
    input.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      items.forEach(el => {
        if (!q) {
          el.classList.remove('hidden');
          return;
        }
        const tags = (el.dataset.tags || '').toLowerCase();
        const src = (el.querySelector('video')?.src || '').toLowerCase();
        if (tags.includes(q) || src.includes(q)) {
          el.classList.remove('hidden');
        } else {
          el.classList.add('hidden');
        }
      });
    });
  });