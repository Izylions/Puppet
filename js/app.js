// js/app.js[cite: 2]

const PRODUCTS = [
    { id: 1, name: 'AeroStride Tee', price: 199, brand: 'IZYLIONS' },
    { id: 2, name: 'PowerFlex Bra', price: 119, brand: 'IZYLIONS' }
];

function renderProducts() {
    const container = document.getElementById('products-grid');
    if(!container) return;

    container.innerHTML = PRODUCTS.map(p => `
        <div class="product-card" onclick="addToCart('${p.name}')">
            <h3>${p.brand}</h3>
            <h2>${p.name}</h2>
            <p>RM ${p.price}</p>
            <button>Add to Bag</button>
        </div>
    `).join('');
}

function addToCart(name) {
    showToast(`✓ ${name} added to bag`);
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
}

// Puppet-style Scroll Reveal logic
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    document.querySelectorAll('.section-title').forEach(el => observer.observe(el));
});
