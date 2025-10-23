// Menu items array
const menu_items = [
  // Soups
  {
    id: "1",
    name: "Cream of Mushroom Soup",
    category: "Soup",
    price: 129,
    description: "A creamy, velvety soup made with fresh mushrooms and herbs — comforting and delicious.",
    image: "https://plus.unsplash.com/premium_photo-1671377665515-38e39a4de0b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000"
  },
  {
    id: "2",
    name: "Chicken Soup",
    category: "Soup",
    price: 109,
    description: "A hearty, flavorful soup with tender chicken chunks simmered in savory broth.",
    image: "https://plus.unsplash.com/premium_photo-1664472752075-d5b2b3de0a88?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000"
  },

  // Starters
  {
    id: "3",
    name: "Vietnamese Spring Roll",
    category: "Starter",
    price: 129,
    description: "Crunchy rolls packed with vegetables and authentic Vietnamese flavors.",
    image: "https://images.unsplash.com/photo-1693494869603-09f1981f28e0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000"
  },
  {
    id: "4",
    name: "Tandoori Paneer Momos",
    category: "Starter",
    price: 129,
    description: "Smoky tandoori momos stuffed with soft paneer and aromatic Indian spices.",
    image: "https://images.unsplash.com/photo-1694923450868-b432a8ee52aa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000"
  },
  {
    id: "5",
    name: "Loaded Nachos",
    category: "Starter",
    price: 109,
    description: "Crispy nachos layered with melted cheese, beans, jalapeños, and tangy salsa.",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=500"
  },
  {
    id: "6",
    name: "Chicken Kurkure",
    category: "Starter",
    price: 149,
    description: "Crunchy on the outside, tender inside — perfect for spicy snack lovers.",
    image: "https://images.unsplash.com/photo-1690519315565-c31ce99f8d58?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000"
  },
  // {
  //   id: "7",
  //   name: "Greekish Chicken",
  //   category: "Starter",
  //   price: 249,
  //   description: "Juicy grilled chicken marinated in Mediterranean herbs and spices.",
  //   image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=500"
  // },

  // Main Course
  {
    id: "8",
    name: "Caramelized Onion and Chilli Oil Pasta",
    category: "Main Course",
    price: 249,
    description: "Rich pasta tossed in a bold mix of caramelized onions, garlic, and spicy chilli oil.",
    image: "https://images.unsplash.com/photo-1574636573716-062c8c8c6179?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000"
  },
  {
    id: "9",
    name: "Green Thai Curry (Veg) with Jasmine Rice",
    category: "Main Course",
    price: 239,
    description: "A creamy, fragrant green curry with vegetables, paired perfectly with jasmine rice.",
    image: "https://sigree-candle-light-dinner.vercel.app/static/thai_curry(veg).jpg"
  },
  {
    id: "10",
    name: "Green Thai Curry (Non-Veg) with Jasmine Rice",
    category: "Main Course",
    price: 279,
    description: "Tender chicken simmered in rich green Thai curry, served with jasmine rice.",
    image: "https://sigree-candle-light-dinner.vercel.app/static/thai_curry(non-veg).jpg"
  },
  {
    id: "11",
    name: "Peri Peri Chicken with Yellow Rice",
    category: "Main Course",
    price: 279,
    description: "Fiery peri peri chicken served with fragrant yellow rice — spicy and satisfying.",
    image: "https://images.unsplash.com/photo-1679735386220-e8888925676e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000"
  },

  // Drinks
  {
    id: "12",
    name: "Virgin Mojito",
    category: "Drink",
    price: 89,
    description: "A refreshing blend of mint, lime, and soda — the perfect thirst quencher.",
    image: "https://images.unsplash.com/photo-1634496064950-02f043806b09?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000"
  },
  {
    id: "13",
    name: "Hazelnut Cold Coffee",
    category: "Drink",
    price: 109,
    description: "Smooth, chilled coffee infused with rich hazelnut flavor.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500"
  },
  {
    id: "14",
    name: "Choco Brownie Shake",
    category: "Drink",
    price: 129,
    description: "Thick, indulgent chocolate shake topped with brownie bits.",
    image: "https://plus.unsplash.com/premium_photo-1695750678153-e7148811673e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000"
  },

  // Desserts
  {
    id: "15",
    name: "Red Velvet Cake",
    category: "Dessert",
    price: 79,
    description: "Soft, moist red velvet cake layered with smooth cream cheese frosting.",
    image: "https://images.unsplash.com/photo-1714386148315-2f0e3eebcd5a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000"
  },
  // {
  //   id: "16",
  //   name: "Blueberry Cheesecake",
  //   category: "Dessert",
  //   price: 99,
  //   description: "Creamy cheesecake topped with luscious blueberry compote.",
  //   image: "https://images.unsplash.com/photo-1642423974120-32a7a2cc393f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000"
  // },
  {
    id: "17",
    name: "Truffle Cake",
    category: "Dessert",
    price: 59,
    description: "Decadent chocolate truffle cake with rich, fudgy layers.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000"
  },
  {
    id: "18",
    name: "Brownie with Ice Cream",
    category: "Dessert",
    price: 149,
    description: "Warm, gooey brownie served with a scoop of vanilla ice cream.",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000"
  }
];

// --------- Cart management ----------
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// --------- Slot management ----------
// Four slots, each max 20 tables. Persisted in localStorage under 'slotAvailability'.
// Slot keys: slot1, slot2, slot3, slot4
const SLOTS = [
  { id: 'slot1', label: '8:00 PM - 8:45 PM' },
  { id: 'slot2', label: '8:45 PM - 9:30 PM' },
  { id: 'slot3', label: '9:30 PM - 10:15 PM' },
  { id: 'slot4', label: '10:15 PM - 11:00 PM' }
];
const MAX_TABLES_PER_SLOT = 20;

const getSlotAvailability = () => {
  const raw = localStorage.getItem('slotAvailability');
  if (raw) {
    try {
      return JSON.parse(raw);
    } catch (e) { /* fallback */ }
  }
  // initialize
  const initial = {};
  SLOTS.forEach(s => initial[s.id] = MAX_TABLES_PER_SLOT);
  localStorage.setItem('slotAvailability', JSON.stringify(initial));
  return initial;
};

const setSlotAvailability = (obj) => {
  localStorage.setItem('slotAvailability', JSON.stringify(obj));
};

const decrementSlot = (slotId, tables) => {
  const av = getSlotAvailability();
  av[slotId] = Math.max(0, (av[slotId] || 0) - tables);
  setSlotAvailability(av);
};

// Render slot options with remaining counts
const refreshSlotOptions = () => {
  const select = document.getElementById('slot_select');
  if (!select) return;
  const av = getSlotAvailability();
  // compute tables needed for this checkout (1 table per 2 individuals)
  const people = getCartCount();
  const tablesNeeded = Math.max(1, Math.ceil(people / 2)); // at least 1
  select.innerHTML = ''; // clear
  SLOTS.forEach(slot => {
    const left = av[slot.id] != null ? av[slot.id] : MAX_TABLES_PER_SLOT;
    const option = document.createElement('option');
    option.value = slot.id;
    option.textContent = `${slot.label} — ${left} tables left`;
    if (left < tablesNeeded) {
      option.disabled = true;
      option.textContent += ' (not enough tables)';
    }
    select.appendChild(option);
  });
  // If the current selected option is disabled/empty, try to select first valid
  if (!select.value || select.selectedOptions[0].disabled) {
    const firstValid = Array.from(select.options).find(o => !o.disabled);
    if (firstValid) select.value = firstValid.value;
  }
};

// Functions (cart operations) — unchanged except we call refreshSlotOptions
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
  // keep slot options updated whenever cart changes
  refreshSlotOptions();
};

// Cart sidebar toggle (unchanged)
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
  const sidebar = document.querySelector('.cart-sidebar');
  const overlay = document.querySelector('.overlay');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('active');
};

// Quantity modal (unchanged)
let selectedItem = null;
let selectedQuantity = 1;

const openQuantityModal = (item) => {
  selectedItem = item;
  selectedQuantity = 1;
  const nameEl = document.querySelector('.modal-item-name');
  const priceEl = document.querySelector('.modal-price');
  if (nameEl) nameEl.textContent = item.name;
  if (priceEl) priceEl.textContent = `₹${item.price} per item`;
  updateModalTotal();
  const modal = document.querySelector('.quantity-modal');
  if (modal) modal.classList.add('active');
  const overlay = document.querySelector('.overlay');
  if (overlay) overlay.classList.add('active');
};

const closeQuantityModal = () => {
  const modal = document.querySelector('.quantity-modal');
  if (modal) modal.classList.remove('active');
  const overlay = document.querySelector('.overlay');
  if (overlay) overlay.classList.remove('active');
  selectedItem = null;
};

const updateModalQuantity = (delta) => {
  selectedQuantity = Math.max(1, selectedQuantity + delta);
  const input = document.querySelector('.qty-input');
  if (input) input.value = selectedQuantity;
  updateModalTotal();
};

const updateModalTotal = () => {
  const total = selectedItem ? selectedItem.price * selectedQuantity : 0;
  const el = document.querySelector('.modal-total');
  if (el) el.textContent = `Total: ₹${total}`;
};

const confirmAddToCart = () => {
  if (selectedItem) {
    addToCart(selectedItem, selectedQuantity);
    closeQuantityModal();
  }
};

// Render menu into the active tab's grid (unchanged)
const renderMenu = () => {
  const activeTabContent = document.querySelector('.tab-content.active');
  if (!activeTabContent) return;
  const container = activeTabContent.querySelector('.menu-grid');
  if (!container) return;
  const dataTab = activeTabContent.dataset.tab;
  const categoryMap = {
    'soup': 'Soup',
    'starter': 'Starter',
    'main-course': 'Main Course',
    'drink': 'Drink',
    'dessert': 'Dessert'
  };
  const category = categoryMap[dataTab];
  if (!category) return;
  const filteredItems = menu_items.filter(item => item.category === category);
  container.innerHTML = filteredItems.map((item, index) => `
    <div class="menu-card glass-dark animate-fade-in" style="animation-delay: ${index * 0.1}s">
      <div class="menu-image-wrapper">
        <img src="${item.image}" alt="${item.name}" />
        <div class="overlay"></div>
      </div>

      <div class="menu-info">
        <div>
          <h3 class="menu-title">${item.name}</h3>
          <p class="menu-desc">${item.description}</p>
        </div>

        <div class="menu-footer">
          <span class="menu-price">₹${item.price}</span>
          <button class="add-btn" onclick="openQuantityModal(${JSON.stringify(item).replace(/"/g, '&quot;')})">
            <span>+</span> Add
          </button>
        </div>
      </div>
    </div>
  `).join('');
};

// Switch tab (unchanged)
const switchTab = (tab) => {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  const btn = document.querySelector(`.tab-btn[data-tab="${tab}"]`);
  if (btn) btn.classList.add('active');
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  const content = document.querySelector(`.tab-content[data-tab="${tab}"]`);
  if (content) content.classList.add('active');
  renderMenu();
};

// --------- File upload preview and controls (improved) ----------
const handleFileUpload = (e) => {
  const file = e.target.files[0];
  const previewDiv = document.getElementById('upload-preview');
  const uploadArea = document.getElementById('upload-area');
  const uploadText = document.getElementById('upload-text');
  const filenameEl = document.getElementById('uploaded-filename');

  if (file) {
    if (file.size > 5 * 1024 * 1024) {
      alert('File size should be less than 5MB');
      e.target.value = '';
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      const preview = document.getElementById('screenshot-preview');
      preview.src = ev.target.result;
      if (previewDiv) previewDiv.style.display = 'block';
      if (uploadArea) uploadArea.style.display = 'none';
      if (filenameEl) filenameEl.textContent = file.name;
      if (uploadText) uploadText.textContent = 'Screenshot ready';
    };
    reader.readAsDataURL(file);
  }
};

const resetUpload = () => {
  const input = document.getElementById('payment_screenshot');
  const previewDiv = document.getElementById('upload-preview');
  const uploadArea = document.getElementById('upload-area');
  const previewImg = document.getElementById('screenshot-preview');
  const filenameEl = document.getElementById('uploaded-filename');
  const uploadText = document.getElementById('upload-text');

  if (input) input.value = '';
  if (previewImg) previewImg.src = '';
  if (filenameEl) filenameEl.textContent = '';
  if (previewDiv) previewDiv.style.display = 'none';
  if (uploadArea) uploadArea.style.display = 'block';
  if (uploadText) uploadText.textContent = 'Click to upload payment screenshot';
};

// Checkout form handling (updated to check slot availability)
const handleCheckoutForm = () => {
  const formData = {
    name: document.getElementById('customer_name').value.trim(),
    email: document.getElementById('customer_email').value.trim(),
    phone: document.getElementById('customer_phone').value.trim(),
  };
  const screenshotInput = document.getElementById('payment_screenshot');
  const screenshot = screenshotInput && screenshotInput.files ? screenshotInput.files[0] : null;
  const slotSelect = document.getElementById('slot_select');

  if (!formData.name || !formData.email || !formData.phone) {
    alert('Please fill all details');
    return;
  }
  if (!screenshot) {
    alert('Please upload payment screenshot');
    return;
  }
  if (!slotSelect || !slotSelect.value) {
    alert('Please choose a slot');
    return;
  }

  // compute tables required: 1 table per 2 individuals, at least 1
  const people = getCartCount();
  const tablesNeeded = Math.max(1, Math.ceil(people / 2));

  const av = getSlotAvailability();
  const chosen = slotSelect.value;
  const left = av[chosen] != null ? av[chosen] : MAX_TABLES_PER_SLOT;
  if (left < tablesNeeded) {
    alert('Selected slot does not have enough tables available. Please choose another slot.');
    refreshSlotOptions();
    return;
  }

  // Simulate order placement: decrement availability, clear cart, redirect to success.
  decrementSlot(chosen, tablesNeeded);

  // Optionally, you could store order details in localStorage / send to server.
  // For now we just clear cart and redirect.
  clearCart();

  // Show small success (could be replaced by your success page)
  window.location.href = 'success.html';
};

// DOMContentLoaded initialization
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();

  // Page-specific init
  if (document.querySelector('.menu-grid')) {
    renderMenu();
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = e.currentTarget.dataset.tab;
        switchTab(tab);
      });
    });
  }

  if (document.querySelector('.qty-input')) {
    document.querySelector('.qty-input').addEventListener('input', (e) => {
      selectedQuantity = Math.max(1, parseInt(e.target.value) || 1);
      updateModalTotal();
    });
  }

  // populate slot select
  refreshSlotOptions();

  // Close on overlay click
  document.querySelectorAll('.overlay').forEach(ov => {
    ov.addEventListener('click', () => {
      closeCart();
      closeQuantityModal();
    });
  });

  // connect reset upload button(s) if present in checkout.html via event listeners are setup in that file
});
