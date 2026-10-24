const sidebar = document.getElementById('stickySidebar');

    // Use IntersectionObserver to highlight sidebar when stuck
    const observer = new IntersectionObserver(
      ([e]) => {
        // Toggle class if top edge hits offset threshold
        sidebar.classList.toggle('is-stuck', e.intersectionRatio < 1);
      },
      { threshold: [1] }
    );

    // Track position relative to top offset
    observer.observe(sidebar);