/* ============================
   ZENDRAVI — Luxury Fragrance House
   Premium Edition — Vanilla JavaScript
   ============================ */

// ===================== DATA =====================

const products = [
  {
    id: 'zendravi-1.0', name: 'Zendravi 1.0', tagline: 'Presence, refined.',
    description: 'Our debut fragrance—an unforgettable signature built on warm woods, deep amber, and a soft golden trail. Zendravi 1.0 is crafted for those who move with quiet confidence.',
    notes: { top: ['Bergamot', 'Saffron', 'Pink Pepper'], middle: ['Turkish Rose', 'Jasmine', 'Iris'], base: ['Oud', 'Amber', 'Sandalwood', 'Musk'] },
    price: 1999, volume: '50ml', image: 'images/himurja%20product%201.jpeg', category: 'Signature', longevity: '8-10 hours', projection: 'Moderate', rating: 4.9, originalPrice: 1499
  },
  {
    id: 'coming-soon', name: 'Coming Soon', tagline: 'A new chapter is unfolding',
    description: 'Our next creation is in progress—more depth, more intrigue, and a new signature priced at Rs. 1,899. Stay connected for launch updates.',
    notes: { top: ['TBA'], middle: ['TBA'], base: ['TBA'] },
    price: 1899, volume: '50ml', image: 'images/brand%20logo.jpeg', category: 'Launching Soon', longevity: 'TBA', projection: 'TBA', rating: 5
  }
];

const featuredProducts = products.slice(0, 1);

const testimonials = [
  { name: 'Priya Sharma', title: 'Fragrance Enthusiast, Kathmandu', quote: 'Zendravi 1.0 feels like presence you can wear. As a new brand, the attention to detail and scent depth is remarkable for a launch.', rating: 5 },
  { name: 'Rahul Verma', title: 'Early Customer, Kathmandu', quote: 'The packaging and fragrance quality exceeded my expectations. Great value at the launch price.', rating: 5 },
  { name: 'Aarav Khadka', title: 'Fragrance Reviewer, Kathmandu', quote: 'A confident debut. Zendravi is bringing something fresh to luxury fragrances in Nepal.', rating: 5 },
  { name: 'Sneika Thapa', title: 'Style Blogger, Kathmandu', quote: 'Warm, refined, and long-lasting. Zendravi 1.0 has become my everyday signature.', rating: 5 }
];

const timelineEvents = [
  { year: '2025', title: 'Brand Registered', description: 'Zendravi was officially registered in July 2025, marking the beginning of our journey to redefine luxury presence.' },
  { year: '2025', title: 'Launch Fragrance', description: 'We launched Zendravi 1.0—our debut Eau de Parfum—with an exclusive introductory price for our first community.' },
  { year: '2025', title: 'Coming Soon', description: 'Our second fragrance is in development and will be released soon at Rs. 1,899.' }
];

// ===================== HELPERS =====================

function formatINR(amount) {
  return 'Rs. ' + amount.toLocaleString('en-IN');
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove('visible'), 3200);
}

// ===================== PRODUCT GRID =====================

function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  grid.innerHTML = products.map((product, i) => {
    const totalNotes = product.notes.top.length + product.notes.middle.length + product.notes.base.length;
    const noteTags = product.notes.top.slice(0, 2).map(n => `<span class="product-note-tag">${n}</span>`).join('');
    const displayPrice = product.id === 'zendravi-1.0' && product.originalPrice
      ? `${formatINR(product.originalPrice)} <span class="product-price-was">${formatINR(product.price)}</span><span class="product-volume">/ ${product.volume}</span>`
      : `${formatINR(product.price)}<span class="product-volume">/ ${product.volume}</span>`;
    return `
      <div class="product-card reveal" data-delay="${(i * 0.1).toFixed(2)}" data-product-id="${product.id}">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <div class="product-overlay"></div>
          <span class="product-category">${product.category}</span>
          <button class="product-view-btn" type="button" data-view="${product.id}">View Details</button>
        </div>
        <div class="product-info">
          <h3 class="product-name">${product.name}</h3>
          <p class="product-tagline">${product.tagline}</p>
          <div class="product-notes">
            ${noteTags}
            <span class="product-note-more">+${totalNotes - 2} notes</span>
          </div>
          <div class="product-footer">
            <span class="product-price">${displayPrice}</span>
            <div class="product-rating"><span class="star">★</span><span class="value">${product.rating}</span></div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('[data-view]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openProductModal(btn.dataset.view);
    });
  });
  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => openProductModal(card.dataset.productId));
  });

  observeReveal(grid.querySelectorAll('.reveal'));
}

// ===================== FEATURED COLLECTION =====================

function renderFeatured() {
  const list = document.getElementById('featuredList');
  if (!list) return;

  list.innerHTML = featuredProducts.map((product, i) => {
    const alignRight = i % 2 === 1;
    const displayPrice = product.id === 'zendravi-1.0' && product.originalPrice
      ? `${formatINR(product.originalPrice)} / ${product.volume} <span class="product-price-was">${formatINR(product.price)}</span>`
      : `${formatINR(product.price)} / ${product.volume}`;
    return `
      <div class="featured-item reveal">
        <div class="${alignRight ? 'order-2' : ''}">
          <div class="featured-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
          </div>
        </div>
        <div class="${alignRight ? 'order-1' : ''}" style="${alignRight ? 'text-align:right' : ''}">
          <p class="featured-label">${product.category}</p>
          <h3 class="featured-name">${product.name}</h3>
          <p class="featured-tagline">"${product.tagline}"</p>
          <div class="featured-divider" style="${alignRight ? 'margin-left:auto' : ''}"></div>
          <p class="featured-desc">${product.description}</p>
          <div class="featured-meta" style="${alignRight ? 'justify-content:flex-end' : ''}">
            <div class="featured-meta-item">
              <label>Longevity</label>
              <span>${product.longevity}</span>
            </div>
            <div class="featured-meta-item">
              <label>Projection</label>
              <span>${product.projection}</span>
            </div>
            <div class="featured-meta-item">
              <label>Price</label>
              <span>${displayPrice}</span>
            </div>
          </div>
          <button class="btn btn-gold" type="button" data-view="${product.id}"><span>Discover ${product.name}</span></button>
        </div>
      </div>
    `;
  }).join('');

  list.querySelectorAll('[data-view]').forEach(btn => {
    btn.addEventListener('click', () => openProductModal(btn.dataset.view));
  });

  observeReveal(list.querySelectorAll('.reveal'));
}

// ===================== PRODUCT MODAL =====================

function openProductModal(id) {
  const product = products.find(p => p.id === id);
  const modal = document.getElementById('productModal');
  if (!product || !modal) return;

  document.getElementById('modalImage').src = product.image;
  document.getElementById('modalImage').alt = product.name;
  document.getElementById('modalCategory').textContent = product.category;
  document.getElementById('modalName').textContent = product.name;
  document.getElementById('modalTagline').textContent = product.tagline;
  document.getElementById('modalDesc').textContent = product.description;

  const allNotes = [...product.notes.top, ...product.notes.middle, ...product.notes.base];
  document.getElementById('modalNotes').innerHTML = allNotes.map(n => `<span>${n}</span>`).join('');

  document.getElementById('modalMeta').innerHTML = `
    <div><label>Volume</label><span>${product.volume}</span></div>
    <div><label>Longevity</label><span>${product.longevity}</span></div>
    <div><label>Projection</label><span>${product.projection}</span></div>
  `;

  const priceHtml = product.id === 'zendravi-1.0' && product.originalPrice
    ? `${formatINR(product.originalPrice)} <span class="product-price-was">${formatINR(product.price)}</span>`
    : formatINR(product.price);
  document.getElementById('modalPrice').innerHTML = priceHtml;

  modal.hidden = false;
  document.body.classList.add('modal-open');
  requestAnimationFrame(() => modal.querySelector('.modal-close')?.focus());
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (!modal) return;
  modal.hidden = true;
  document.body.classList.remove('modal-open');
}

document.addEventListener('click', (e) => {
  if (e.target.closest('[data-close-modal]')) closeProductModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeProductModal();
});

// ===================== "COMING SOON" NOTICES =====================

document.addEventListener('click', (e) => {
  const trigger = e.target.closest('[data-soon]');
  if (trigger) {
    e.preventDefault();
    showToast(trigger.dataset.soon);
  }
});

// ===================== TESTIMONIAL CAROUSEL =====================

let currentTestimonial = 0;
let testimonialTimer = null;

function renderTestimonial(index) {
  const t = testimonials[index];
  const slide = document.getElementById('testimonialSlide');
  document.getElementById('testimonialText').textContent = t.quote;
  document.getElementById('testimonialName').textContent = t.name;
  document.getElementById('testimonialTitle').textContent = t.title;

  const stars = '★'.repeat(t.rating);
  document.getElementById('testimonialStars').innerHTML = `<span class="star">${stars.split('').join('</span><span class="star">')}</span>`;

  const dots = document.getElementById('navDots');
  dots.innerHTML = testimonials.map((_, i) =>
    `<button class="nav-dot${i === index ? ' active' : ''}" data-goto="${i}" aria-label="Testimonial ${i + 1}"></button>`
  ).join('');

  if (slide) {
    slide.classList.remove('switching');
    void slide.offsetWidth;
    slide.classList.add('switching');
  }
}

function goToTestimonial(index) {
  currentTestimonial = index;
  renderTestimonial(currentTestimonial);
  restartTestimonialTimer();
}

function restartTestimonialTimer() {
  clearInterval(testimonialTimer);
  testimonialTimer = setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    renderTestimonial(currentTestimonial);
  }, 6500);
}

document.getElementById('navDots')?.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-goto]');
  if (btn) goToTestimonial(Number(btn.dataset.goto));
});

document.getElementById('prevTestimonial')?.addEventListener('click', () => {
  goToTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length);
});

document.getElementById('nextTestimonial')?.addEventListener('click', () => {
  goToTestimonial((currentTestimonial + 1) % testimonials.length);
});

// ===================== TIMELINE =====================

function renderTimeline() {
  const timeline = document.getElementById('timeline');
  if (!timeline) return;

  timeline.innerHTML = `
    <div class="timeline-line"></div>
    ${timelineEvents.map((event, i) => `
      <div class="timeline-event reveal" data-delay="${(i * 0.12).toFixed(2)}">
        <div class="timeline-year">${event.year}</div>
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h3 class="timeline-title">${event.title}</h3>
          <p class="timeline-desc">${event.description}</p>
        </div>
      </div>
    `).join('')}
  `;

  observeReveal(timeline.querySelectorAll('.reveal'));
}

// ===================== NEWSLETTER =====================

document.getElementById('newsletterForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const input = document.getElementById('newsletterEmail');
  const msg = document.getElementById('newsletterMsg');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!input || !msg) return;

  if (!emailPattern.test(input.value)) {
    msg.textContent = 'Please enter a valid email address.';
    msg.classList.add('visible', 'error');
    setTimeout(() => msg.classList.remove('visible', 'error'), 3500);
    return;
  }

  msg.classList.remove('error');
  msg.textContent = 'Thank you for subscribing. Welcome to Zendravi.';
  msg.classList.add('visible');
  input.value = '';
  setTimeout(() => msg.classList.remove('visible'), 4500);
});

// ===================== HERO TITLE SPLIT =====================

function splitHeroTitle() {
  const el = document.querySelector('[data-split]');
  if (!el) return;
  const words = el.textContent.trim().split(/\s+/);
  el.innerHTML = words.map((word, i) => {
    const isGold = word.toLowerCase() === 'presence';
    const delay = 0.55 + i * 0.12;
    return `<span class="word${isGold ? ' gold-text' : ''}" style="animation-delay:${delay}s"><span style="animation-delay:${delay}s">${word}</span></span> `;
  }).join('');
}

// ===================== SCROLL EFFECTS =====================

let lastKnownScroll = 0;
let scrollTicking = false;

function onScroll() {
  const header = document.getElementById('header');
  const scrollY = window.scrollY;

  if (header) {
    if (scrollY > 60) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }

  const heroBg = document.getElementById('heroBg');
  if (heroBg) {
    const img = heroBg.querySelector('img');
    if (img) img.style.transform = `translateY(${scrollY * 0.28}px)`;
  }

  const progressBar = document.getElementById('progressBar');
  if (progressBar) {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
  }

  scrollTicking = false;
}

window.addEventListener('scroll', () => {
  lastKnownScroll = window.scrollY;
  if (!scrollTicking) {
    requestAnimationFrame(onScroll);
    scrollTicking = true;
  }
}, { passive: true });

// ===================== SCROLL ANIMATIONS =====================

let revealObserver = null;

function getRevealObserver() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  }
  return revealObserver;
}

function observeReveal(elements) {
  const observer = getRevealObserver();
  elements.forEach(el => {
    if (el.dataset.delay) el.style.transitionDelay = el.dataset.delay + 's';
    observer.observe(el);
  });
}

// ===================== MAGNETIC BUTTONS =====================

function initMagneticButtons() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  document.querySelectorAll('[data-magnetic]').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      btn.style.setProperty('--btn-x', x + 'px');
      btn.style.setProperty('--btn-y', y + 'px');
    });
  });
}

// ===================== MOBILE MENU =====================

const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle?.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  menuToggle.classList.toggle('active', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

mobileMenu?.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ===================== FOOTER YEAR =====================

function setFooterYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// ===================== PRELOADER =====================

function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;
  window.addEventListener('load', () => {
    setTimeout(() => preloader.classList.add('done'), 400);
  });
  setTimeout(() => preloader.classList.add('done'), 2500);
}

// ===================== INIT =====================

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  splitHeroTitle();
  renderProducts();
  renderFeatured();
  renderTestimonial(0);
  restartTestimonialTimer();
  renderTimeline();
  observeReveal(document.querySelectorAll('.reveal:not([data-delay])'));
  observeReveal(document.querySelectorAll('.section-header.reveal, .split-image.reveal, .split-content.reveal, .newsletter-inner.reveal'));
  initMagneticButtons();
  setFooterYear();
  onScroll();
});
