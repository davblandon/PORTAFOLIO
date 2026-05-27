const initRevealStagger = () => {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((section, index) => {
    // set a CSS delay variable and mark the element to animate
    section.style.setProperty("--reveal-delay", `${index * 0.08}s`);
    section.setAttribute("data-reveal", "true");
  });
};

const initRippleButtons = () => {
  document.addEventListener("click", (event) => {
    const target = event.target.closest(".btn");
    if (!target) {
      return;
    }

    const ripple = document.createElement("span");
    ripple.className = "ripple";
    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

    const existing = target.querySelector(".ripple");
    if (existing) {
      existing.remove();
    }

    target.appendChild(ripple);
  });
};

const initParallax = () => {
  const body = document.body;
  const update = () => {
    const offset = Math.min(window.scrollY / 6, 120);
    body.style.setProperty("--bg-offset", `${offset}px`);
  };

  update();
  window.addEventListener("scroll", () => {
    window.requestAnimationFrame(update);
  });
};

const initCounters = () => {
  const counters = document.querySelectorAll(".metric-value");
  if (!counters.length) {
    return;
  }

  const animate = (element) => {
    const target = Number(element.dataset.target || 0);
    const duration = 1200;
    const start = performance.now();

    const step = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const value = Math.floor(progress * target);
      element.textContent = value.toString();
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );

  counters.forEach((counter) => observer.observe(counter));
};

const initSkillBars = () => {
  const bars = document.querySelectorAll(".skill-bar");
  if (!bars.length) {
    return;
  }

  const setLevel = (bar) => {
    const level = Number(bar.dataset.level || 0);
    const fill = bar.querySelector(".skill-fill");
    if (fill) {
      fill.style.width = `${level}%`;
      fill.style.opacity = "1";
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLevel(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  bars.forEach((bar) => {
    setLevel(bar);
    observer.observe(bar);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initRevealStagger();
  initRippleButtons();
  initParallax();
  initCounters();
  initSkillBars();
});
