// Menu items array
const menu_items = [
  // Soups
  {
    id: "1",
    name: "Cream of Mushroom Soup",
    category: "Soup",
    price: 129,
    description: "A creamy, velvety soup made with fresh mushrooms and herbs — comforting and delicious.",
    image: "https://plus.unsplash.com/premium_photo-1671377377502-37bf7369f92d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000"
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
    description: "Fresh, crunchy rolls packed with vegetables and authentic Vietnamese flavors.",
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
  {
    id: "7",
    name: "Greekish Chicken",
    category: "Starter",
    price: 249,
    description: "Juicy grilled chicken marinated in Mediterranean herbs and spices.",
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=500"
  },

  // Main Course
  {
    id: "8",
    name: "Caramelized Onion and Chilli Oil Pasta",
    category: "Main Course",
    price: 249,
    description: "Rich pasta tossed in a bold mix of caramelized onions, garlic, and spicy chilli oil.",
    image: "https://images.unsplash.com/photo-1613145993483-1a1f0e0b3d5c?w=500"
  },
  {
    id: "9",
    name: "Green Thai Curry (Veg) with Jasmine Rice",
    category: "Main Course",
    price: 239,
    description: "A creamy, fragrant green curry with vegetables, paired perfectly with jasmine rice.",
    image: "https://images.unsplash.com/photo-1579880645070-282f4bacc30b?w=500"
  },
  {
    id: "10",
    name: "Green Thai Curry (Non-Veg) with Jasmine Rice",
    category: "Main Course",
    price: 279,
    description: "Tender chicken simmered in rich green Thai curry, served with jasmine rice.",
    image: "https://images.unsplash.com/photo-1604908554169-937f3b91a940?w=500"
  },
  {
    id: "11",
    name: "Peri Peri Chicken with Yellow Rice",
    category: "Main Course",
    price: 279,
    description: "Fiery peri peri chicken served with fragrant yellow rice — spicy and satisfying.",
    image: "https://images.unsplash.com/photo-1625944277540-3ed8a6eac42e?w=500"
  },

  // Drinks
  {
    id: "12",
    name: "Virgin Mojito",
    category: "Drink",
    price: 89,
    description: "A refreshing blend of mint, lime, and soda — the perfect thirst quencher.",
    image: "https://images.unsplash.com/photo-1562059390-a761a084768e?w=500"
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
    image: "https://images.unsplash.com/photo-1601924582971-df6b86a20f9b?w=500"
  },

  // Desserts
  {
    id: "15",
    name: "Red Velvet Cake",
    category: "Dessert",
    price: 79,
    description: "Soft, moist red velvet cake layered with smooth cream cheese frosting.",
    image: "https://images.unsplash.com/photo-1599785209798-9b0b91a1c03d?w=500"
  },
  {
    id: "16",
    name: "Blueberry Cheesecake",
    category: "Dessert",
    price: 99,
    description: "Creamy cheesecake topped with luscious blueberry compote.",
    image: "https://images.unsplash.com/photo-1601972599720-b1e4e1a9f5c4?w=500"
  },
  {
    id: "17",
    name: "Truffle Cake",
    category: "Dessert",
    price: 59,
    description: "Decadent chocolate truffle cake with rich, fudgy layers.",
    image: "https://images.unsplash.com/photo-1606312616070-9afc7a1a1b5c?w=500"
  },
  {
    id: "18",
    name: "Brownie with Ice Cream",
    category: "Dessert",
    price: 149,
    description: "Warm, gooey brownie served with a scoop of vanilla ice cream.",
    image: "https://images.unsplash.com/photo-1621259182978-40f2e3c4c43e?w=500"
  }
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
  const dataTab = activeTabContent.dataset.tab;
  const categoryMap = {
    'soup': 'Soup',
    'starter': 'Starter',
    'main-course': 'Main Course',
    'drink': 'Drink',
    'dessert': 'Dessert'
  };
  const category = categoryMap[dataTab];
  if (!category) return; // Invalid tab, bail out

  const filteredItems = menu_items.filter(item => item.category === category);
  // inside renderMenu() when generating each card
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

        <!-- Footer pinned to bottom -->
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

// Switch tab by data-tab (explicit selectors for button and content)
const switchTab = (tab) => {
  // tab is expected to be 'appetizer' or 'main-course'

  // Update tab button active state (explicit .tab-btn selector)
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  const btn = document.querySelector(`.tab-btn[data-tab="${tab}"]`);
  if (btn) btn.classList.add('active');

  // Update tab content active state (explicit .tab-content selector)
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  const content = document.querySelector(`.tab-content[data-tab="${tab}"]`);
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

document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();

  // Page-specific init
  if (document.querySelector('.menu-grid')) {
    // Render initial tab based on which tab button/content is active in HTML (appetizer by default)
    renderMenu();

    // Attach tab click handlers
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

  // Close on overlay click
  document.querySelectorAll('.overlay').forEach(ov => {
    ov.addEventListener('click', () => {
      closeCart();
      closeQuantityModal();
    });
  });

});
