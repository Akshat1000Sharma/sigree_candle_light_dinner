// Menu items array
const menu_items = [
  // Appetizers
  {"id": "1", "name": "Vietnamese Spring Roll", "category": "Appetizer", "price": 149, "description": "(5 pieces) Fresh, crunchy, and bursting with vibrant flavors wrapped in delicate rice paper.", "image": "https://images.unsplash.com/photo-1594007728872-fde0fdb3c677?w=500"},
  {"id": "2", "name": "Cream of Mushroom Soup", "category": "Appetizer", "price": 149, "description": "A silky, creamy blend of mushrooms and herbs that warms the soul.", "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500"},
  {"id": "3", "name": "Chicken Kurkure", "category": "Appetizer", "price": 199, "description": "Crispy on the outside, tender inside — a perfect fusion of spice and crunch", "image": "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=500"},
  // Main Course
  {"id": "4", "name": "Caramelized Onion and Chili Oil Pasta", "category": "Main Course", "price": 249, "description": "Sweet, spicy, and perfectly balanced — pasta with a bold twist.", "image": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500"},
  {"id": "5", "name": "Green Thai Curry with Jasmine Rice (Veg)", "category": "Main Course", "price": 239, "description": "A creamy, aromatic blend of vegetables simmered in rich Thai spices, served with fragrant Jasmine rice.", "image": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=500"},
  {"id": "6", "name": "Green Thai Curry with Jasmine Rice (Non-Veg)", "category": "Main Course", "price": 279, "description": "Tender chicken simmered in a rich coconut curry, bursting with authentic Thai flavors.", "image": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=500"},
  {"id": "7", "name": "Peri Peri Chicken with Yellow Rice", "category": "Main Course", "price": 279, "description": "Juicy chicken tossed in fiery peri peri, paired with fragrant golden rice.", "image": "https://images.unsplash.com/photo-1633504581786-316c8002b1b2?w=500"},
];

// Cart management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Functions
const addToCart = (item, quantity = 1) => {
  const existingItem = cart.find((i) => i.id === item.id);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ ...item, quantity });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
};

const removeFromCart = (itemId) => {
  cart = cart.filter((i) => i.id !== itemId);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
};

const updateQuantity = (itemId, quantity) => {
  if (quantity <= 0) {
    removeFromCart(itemId);
    return;
  }
  const item = cart.find((i) => i.id === itemId);
  if (item) {
    item.quantity = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
  }
};

const clearCart = () => {
  cart = [];
  localStorage.removeItem('cart');
  updateCartUI();
};

const getCartTotal = () => {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

const getCartCount = () => {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
};

// Update cart UI (common function)
const updateCartUI = () => {
  const cartCountEl = document.querySelector('.cart-count');
  const cartItemsEl = document.querySelector('.cart-items');
  const cartTotalEl = document.querySelector('.cart-total-amount');
  const proceedBtn = document.querySelector('.proceed-btn');
  const cartEmptyEl = document.querySelector('.cart-empty');

  if (cartCountEl) cartCountEl.textContent = getCartCount();
  if (cartCountEl && getCartCount() === 0) cartCountEl.style.display = 'none';
  else if (cartCountEl) cartCountEl.style.display = 'flex';

  if (cartItemsEl) {
    cartItemsEl.innerHTML = '';
    if (cart.length === 0) {
      if (cartEmptyEl) cartEmptyEl.style.display = 'block';
      if (proceedBtn) proceedBtn.style.display = 'none';
    } else {
      if (cartEmptyEl) cartEmptyEl.style.display = 'none';
      if (proceedBtn) proceedBtn.style.display = 'block';
      cart.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
          <div>
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">₹${item.price}</div>
          </div>
          <button class="remove-item" onclick="removeFromCart('${item.id}')">&times;</button>
          <div class="qty-controls">
            <button class="qty-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
            <span class="qty-display">${item.quantity}</span>
            <button class="qty-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
          </div>
          <div class="cart-item-total">₹${item.price * item.quantity}</div>
        `;
        cartItemsEl.appendChild(itemEl);
      });
    }
  }

  if (cartTotalEl) cartTotalEl.textContent = `₹${getCartTotal()}`;
};

// Cart sidebar toggle
const toggleCart = () => {
  const sidebar = document.querySelector('.cart-sidebar');
  const overlay = document.querySelector('.overlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('active');
  if (sidebar.classList.contains('open')) {
    updateCartUI();
  }
};

const closeCart = () => {
  document.querySelector('.cart-sidebar').classList.remove('open');
  document.querySelector('.overlay').classList.remove('active');
};

// Quantity modal
let selectedItem = null;
let selectedQuantity = 1;

const openQuantityModal = (item) => {
  selectedItem = item;
  selectedQuantity = 1;
  document.querySelector('.modal-item-name').textContent = item.name;
  document.querySelector('.modal-price').textContent = `₹${item.price} per item`;
  updateModalTotal();
  document.querySelector('.quantity-modal').classList.add('active');
  document.querySelector('.overlay').classList.add('active');
};

const closeQuantityModal = () => {
  document.querySelector('.quantity-modal').classList.remove('active');
  document.querySelector('.overlay').classList.remove('active');
  selectedItem = null;
};

const updateModalQuantity = (delta) => {
  selectedQuantity = Math.max(1, selectedQuantity + delta);
  document.querySelector('.qty-input').value = selectedQuantity;
  updateModalTotal();
};

const updateModalTotal = () => {
  const total = selectedItem ? selectedItem.price * selectedQuantity : 0;
  document.querySelector('.modal-total').textContent = `Total: ₹${total}`;
};

const confirmAddToCart = () => {
  if (selectedItem) {
    addToCart(selectedItem, selectedQuantity);
    closeQuantityModal();
  }
};

// Render menu into the active tab's grid
const renderMenu = () => {
  // Find the active tab-content and its .menu-grid
  const activeTabContent = document.querySelector('.tab-content.active');
  if (!activeTabContent) return;

  const container = activeTabContent.querySelector('.menu-grid');
  if (!container) return;

  // Map data-tab value to category string used in menu_items
  const dataTab = activeTabContent.dataset.tab; // 'appetizer' or 'main-course'
  const category = dataTab === 'appetizer' ? 'Appetizer' : 'Main Course';

  const filteredItems = menu_items.filter(item => item.category === category);
  container.innerHTML = filteredItems.map((item, index) => `
    <div class="menu-card glass-dark animate-fade-in" style="animation-delay: ${index * 0.1}s">
      <div class="relative overflow-hidden">
        <img src="${item.image}" alt="${item.name}" />
        <div class="overlay"></div>
      </div>
      <div class="menu-info">
        <h3 class="menu-title">${item.name}</h3>
        <p class="menu-desc">${item.description}</p>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span class="menu-price">₹${item.price}</span>
          <button class="add-btn" onclick="openQuantityModal(${JSON.stringify(item).replace(/"/g, '&quot;')})">
            <span>+</span> Add
          </button>
        </div>
      </div>
    </div>
  `).join('');
};

// Switch tab by data-tab (no reliance on global `event`)
const switchTab = (tab) => {
  // Update tab button active state
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  const btn = document.querySelector(`.tab-btn[data-tab="${tab}"]`);
  if (btn) btn.classList.add('active');

  // Update tab content active state
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  const content = document.querySelector(`[data-tab="${tab}"]`);
  if (content) content.classList.add('active');

  // Render menu into the now-active tab's grid
  renderMenu();
};


// Checkout form handling
const handleCheckoutForm = () => {
  const formData = {
    name: document.getElementById('customer_name').value,
    email: document.getElementById('customer_email').value,
    phone: document.getElementById('customer_phone').value,
  };
  const screenshot = document.getElementById('payment_screenshot').files[0];

  if (!formData.name || !formData.email || !formData.phone) {
    alert('Please fill all details');
    return;
  }
  if (!screenshot) {
    alert('Please upload payment screenshot');
    return;
  }

  // Simulate order placement
  clearCart();
  window.location.href = 'success.html'; // Or show success inline
};

// File upload preview
const handleFileUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    if (file.size > 5 * 1024 * 1024) {
      alert('File size should be less than 5MB');
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      const preview = document.getElementById('screenshot-preview');
      preview.src = ev.target.result;
      preview.parentElement.style.display = 'block';
      document.querySelector('.upload-area').style.display = 'none';
    };
    reader.readAsDataURL(file);
  }
};

// Init
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();

  // Page-specific init
  if (document.querySelector('.menu-grid')) {
    renderMenu('Appetizer');
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => switchTab(e.target.dataset.tab));
    });
  }

  if (document.querySelector('.qty-input')) {
    document.querySelector('.qty-input').addEventListener('input', (e) => {
      selectedQuantity = Math.max(1, parseInt(e.target.value) || 1);
      updateModalTotal();
    });
  }

  // Close on overlay click
  document.querySelectorAll('.overlay').forEach(ov => {
    ov.addEventListener('click', () => {
      closeCart();
      closeQuantityModal();
    });
  });

  // Qty buttons in modal
  // const decBtn = document.querySelector('.qty-decrease');
  // const incBtn = document.querySelector('.qty-increase');
  // if (decBtn) decBtn.addEventListener('click', () => updateModalQuantity(-1));
  // if (incBtn) incBtn.addEventListener('click', () => updateModalQuantity(1));
});