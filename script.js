// ナビゲーション開閉と軽い演出のみを担当する最小スクリプト

(() => {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.global-nav');
  const navLinks = document.querySelectorAll('.global-nav a');

  // モバイルメニュー開閉
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // メニュー項目を押したら閉じる
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // セクションのフェードイン
  const revealTargets = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealTargets.forEach((el) => observer.observe(el));
})();
