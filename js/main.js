/* ============================
   ZENDRAVI — Luxury Fragrance House
   Vanilla JavaScript
   ============================ */

// ===================== DATA =====================

const products = [
  {
    id: 'noir-velours', name: 'Noir Velours', tagline: 'Dark elegance captured in a bottle',
    description: 'A sophisticated composition that unfolds like velvet in moonlight. Noir Velours is our signature scent—a masterful blend of rare dark florals and precious woods that lingers on the skin like a whispered secret.',
    notes: { top: ['Black Currant', 'Saffron', 'Pink Pepper'], middle: ['Turkish Rose', 'Jasmine Absolute', 'Iris'], base: ['Oud', 'Sandalwood', 'Amber', 'Musk'] },
    price: 295, volume: '50ml', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80', category: 'Signature', longevity: '8-10 hours', projection: 'Moderate', rating: 4.9
  },
  {
    id: 'lumiere-doree', name: 'Lumière Dorée', tagline: 'Golden light captured in fragrance',
    description: 'Inspired by the first light of dawn over the Mediterranean, Lumière Dorée is a radiant composition of sun-kissed citrus, white florals, and warm amber.',
    notes: { top: ['Bergamot', 'Neroli', 'Lemon'], middle: ['Orange Blossom', 'Jasmine', 'Ylang-Ylang'], base: ['Vanilla', 'Amber', 'White Musk', 'Cedar'] },
    price: 275, volume: '50ml', image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&q=80', category: 'Signature', longevity: '6-8 hours', projection: 'Soft to Moderate', rating: 4.8
  },
  {
    id: 'cuir-sauvage', name: 'Cuir Sauvage', tagline: 'Untamed leather for the modern spirit',
    description: 'A bold reinterpretation of classic leather fragrances. Cuir Sauvage combines rare Tuscan leather with smoky birch and the warmth of labdanum.',
    notes: { top: ['Bergamot', 'Cypress', 'Black Pepper'], middle: ['Leather', 'Birch', 'Juniper'], base: ['Labdanum', 'Patchouli', 'Vetiver', 'Incense'] },
    price: 320, volume: '50ml', image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80', category: 'Signature', longevity: '10-12 hours', projection: 'Strong', rating: 4.7
  },
  {
    id: 'rose-absolue', name: 'Rose Absolue', tagline: 'The essence of timeless romance',
    description: 'A thousand petals captured in a single drop. Rose Absolue is our tribute to the queen of flowers—a deep, honeyed rose absolute.',
    notes: { top: ['Lychee', 'Raspberry', 'Pink Pepper'], middle: ['Damask Rose', 'Rose Absolute', 'Honey'], base: ['Oud', 'Sandalwood', 'Patchouli', 'Vanilla'] },
    price: 310, volume: '50ml', image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800&q=80', category: 'Floral', longevity: '8-10 hours', projection: 'Moderate', rating: 4.9
  },
  {
    id: 'bois-dencens', name: 'Bois d\'Encens', tagline: 'Sacred woods for the contemplative soul',
    description: 'A meditative journey through ancient forests and sacred temples. Bois d\'Encens weaves together rare frankincense, myrrh, and the darkest woods.',
    notes: { top: ['Frankincense', 'Myrrh', 'Cardamom'], middle: ['Cedar', 'Guaiac Wood', 'Cypriol'], base: ['Agarwood', 'Leather', 'Amber', 'Musk'] },
    price: 345, volume: '50ml', image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80', category: 'Woody', longevity: '10-12 hours', projection: 'Moderate to Strong', rating: 4.8
  },
  {
    id: 'ambre-nuit', name: 'Ambre Nuit', tagline: 'The warmth of night embraced',
    description: 'As the sun sets and the world grows quiet, Ambre Nuit awakens. A sensual blend of golden amber, dark vanilla, and exotic spices.',
    notes: { top: ['Cinnamon', 'Cardamom', 'Saffron'], middle: ['Amber', 'Benzoin', 'Labdanum'], base: ['Vanilla', 'Tonka', 'Musk', 'Sandalwood'] },
    price: 285, volume: '50ml', image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80', category: 'Oriental', longevity: '8-10 hours', projection: 'Moderate', rating: 4.7
  }
];

const featuredProducts = products.slice(0, 3);

const testimonials = [
  { name: 'Isabella Rossi', title: 'Fragrance Collector, Milan', quote: 'Zendravi has redefined what luxury fragrance means. Each scent tells a story, crafted with an attention to detail that I have not encountered elsewhere. This is perfumery as art.', rating: 5 },
  { name: 'James Whitfield', title: 'Creative Director, London', quote: 'I have worn many fragrances, but nothing compares to the depth and sophistication of Zendravi. Noir Velours has become my signature—it is simply unforgettable.', rating: 5 },
  { name: 'Aiko Tanaka', title: 'Perfume Critic, Tokyo', quote: 'The craftsmanship behind each Zendravi creation is evident from the first spray. Rare ingredients, masterful blending, and a philosophy of restraint that speaks volumes.', rating: 5 },
  { name: 'Sophie Moreau', title: 'Lifestyle Editor, Paris', quote: 'Zendravi embodies everything I love about modern luxury: timeless elegance, impeccable quality, and an understated confidence that needs no validation.', rating: 5 }
];

const timelineEvents = [
  { year: '2018', title: 'The Vision', description: 'Zendravi was born from a desire to create fragrances that transcend trends—scents that become part of one\'s identity.' },
  { year: '2019', title: 'First Atelier', description: 'Our perfumery opened in the heart of Paris, where master perfumers began crafting the first Zendravi compositions.' },
  { year: '2020', title: 'Noir Velours', description: 'The launch of our signature fragrance marked Zendravi\'s arrival on the global luxury stage, earning acclaim from connoisseurs worldwide.' },
  { year: '2022', title: 'Expansion', description: 'With six fragrances in our collection, we opened boutiques in London, Tokyo, and New York.' },
  { year: '2024', title: 'Sustainable Luxury', description: 'We committed to fully sustainable sourcing, partnering with ethical farms and distilleries.' },
  { year: '2026', title: 'The Future', description: 'Continuing our journey of olfactory excellence, with new creations that push the boundaries of what fragrance can be.' }
];

// ===================== PRODUCT GRID =====================

function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  grid.innerHTML = products.map(product => {
    const totalNotes = product.notes.top.length + product.notes.middle.length + product.notes.base.length;
    const noteTags = product.notes.top.slice(0, 2).map(n => `<span class="product-note-tag">${n}</span>`).join('');
    return `
      <div class="product-card fade-up">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <div class="product-overlay"></div>
          <span class="product-category">${product.category}</span>
          <button class="product-view-btn" onclick="alert('${product.name} — View details coming soon.')">View Details</button>
        </div>
        <div class="product-info">
          <h3 class="product-name">${product.name}</h3>
          <p class="product-tagline">${product.tagline}</p>
          <div class="product-notes">
            ${noteTags}
            <span class="product-note-more">+${totalNotes - 2} notes</span>
          </div>
          <div class="product-footer">
            <span class="product-price">$${product.price}<span class="product-volume">/ ${product.volume}</span></span>
            <div class="product-rating"><span class="star">★</span><span class="value">${product.rating}</span></div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ===================== FEATURED COLLECTION =====================

function renderFeatured() {
  const list = document.getElementById('featuredList');
  if (!list) return;

  list.innerHTML = featuredProducts.map((product, i) => {
    const alignRight = i % 2 === 1;
    return `
      <div class="featured-item fade-up">
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
              <span>$${product.price} / ${product.volume}</span>
            </div>
          </div>
          <button class="btn-primary" onclick="alert('Discover ${product.name} coming soon.')">Discover ${product.name}</button>
        </div>
      </div>
    `;
  }).join('');
}

// ===================== TESTIMONIAL CAROUSEL =====================

let currentTestimonial = 0;

function renderTestimonial(index) {
  const t = testimonials[index];
  document.getElementById('testimonialText').textContent = t.quote;
  document.getElementById('testimonialName').textContent = t.name;
  document.getElementById('testimonialTitle').textContent = t.title;

  const stars = '★'.repeat(t.rating);
  document.getElementById('testimonialStars').innerHTML = `<span class="star">${stars.split('').join('</span><span class="star">')}</span>`;

  const dots = document.getElementById('navDots');
  dots.innerHTML = testimonials.map((_, i) =>
    `<button class="nav-dot${i === index ? ' active' : ''}" onclick="goToTestimonial(${i})" aria-label="Testimonial ${i + 1}"></button>`
  ).join('');
}

function goToTestimonial(index) {
  currentTestimonial = index;
  renderTestimonial(currentTestimonial);
}

document.getElementById('prevTestimonial')?.addEventListener('click', () => {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  renderTestimonial(currentTestimonial);
});

document.getElementById('nextTestimonial')?.addEventListener('click', () => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  renderTestimonial(currentTestimonial);
});

// Auto-rotate testimonials
setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  renderTestimonial(currentTestimonial);
}, 6000);

// ===================== TIMELINE =====================

function renderTimeline() {
  const timeline = document.getElementById('timeline');
  if (!timeline) return;

  timeline.innerHTML = `
    <div class="timeline-line"></div>
    ${timelineEvents.map((event, i) => `
      <div class="timeline-event fade-up">
        <div class="timeline-year">${event.year}</div>
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h3 class="timeline-title">${event.title}</h3>
          <p class="timeline-desc">${event.description}</p>
        </div>
      </div>
    `).join('')}
  `;
}

// ===================== NEWSLETTER =====================

document.getElementById('newsletterForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const input = this.querySelector('.newsletter-input');
  const success = document.getElementById('newsletterSuccess');
  if (input && input.value) {
    success.classList.add('visible');
    input.value = '';
    setTimeout(() => success.classList.remove('visible'), 4000);
  }
});

// ===================== SCROLL EFFECTS =====================

// Header background on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  const scrollY = window.scrollY;

  if (scrollY > 80) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // Hero parallax
  const heroBg = document.getElementById('heroBg');
  if (heroBg) {
    const img = heroBg.querySelector('img');
    if (img) {
      img.style.transform = `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0002})`;
    }
  }

  lastScroll = scrollY;
}, { passive: true });

// ===================== SCROLL ANIMATIONS (Intersection Observer) =====================

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(el => {
    if (el.dataset.delay) {
      el.style.transitionDelay = el.dataset.delay + 's';
    }
    observer.observe(el);
  });
}

// ===================== MOBILE MENU =====================

const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle?.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

mobileMenu?.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ===================== INIT =====================

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderFeatured();
  renderTestimonial(0);
  renderTimeline();
  initScrollAnimations();
});