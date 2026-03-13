// モバイルナビ / 画像フォールバック / フェード / 岩片エフェクト
(() => {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.global-nav');
  const navLinks = document.querySelectorAll('.global-nav a');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const imageShells = document.querySelectorAll('.image-shell');
  imageShells.forEach((shell) => {
    const img = shell.querySelector('img');
    if (!img) return;

    img.addEventListener('load', () => {
      shell.classList.add('has-image');
      img.style.display = 'block';
    });
    img.addEventListener('error', () => {
      shell.classList.remove('has-image');
      img.style.display = 'none';
    });

    if (img.complete && img.naturalWidth > 0) {
      shell.classList.add('has-image');
    }
  });

  const revealTargets = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  revealTargets.forEach((el) => observer.observe(el));

  // 岩片を自動生成して背景に流す
  const shardRoot = document.querySelector('.rock-shards');
  if (shardRoot && window.matchMedia('(prefers-reduced-motion: reduce)').matches === false) {
    const count = 22;
    for (let i = 0; i < count; i += 1) {
      const shard = document.createElement('span');
      shard.className = 'rock-shard';
      shard.style.setProperty('--size', `${8 + Math.random() * 18}px`);
      shard.style.setProperty('--dur', `${8 + Math.random() * 14}s`);
      shard.style.setProperty('--delay', `${-Math.random() * 12}s`);
      shard.style.left = `${Math.random() * 100}%`;
      shard.style.top = `${-10 - Math.random() * 90}px`;
      shardRoot.appendChild(shard);
    }
  }
})();
