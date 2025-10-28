// Menu items array
const menu_items = [
  // Soups
  {
    id: "1",
    name: "Cream of Mushroom Soup",
    category: "Soup",
    price: 119,
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
    description: "5 pieces of Crunchy rolls packed with vegetables and authentic Vietnamese flavors.",
    image: "https://images.unsplash.com/photo-1693494869603-09f1981f28e0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000"
  },
  {
    id: "4",
    name: "Tandoori Paneer Momos",
    category: "Starter",
    price: 129,
    description: "Smoky tandoori momos stuffed with soft paneer and aromatic Indian spices. 5 pieces a plate.",
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
    description: "Crunchy on the outside, tender inside — perfect for spicy snack lovers. 8 pieces a plate.",
    image: "https://images.unsplash.com/photo-1690519315565-c31ce99f8d58?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000"
  },

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
    price: 109,
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
    price: 119,
    description: "Warm, gooey brownie served with a scoop of vanilla ice cream.",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000"
  }
];

// --------- Cart management ----------
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// --------- Slot management ----------
const SLOTS = [
  // { id: 'slot1', label: '8:00 PM - 8:45 PM', number: 4 },
  // { id: 'slot2', label: '8:45 PM - 9:30 PM', number: 1 },
  { id: 'slot3', label: '9:30 PM - 10:15 PM', number: 1 },
  { id: 'slot4', label: '10:15 PM - 11:00 PM', number: 1 }
];

// Render slot options with available counts
const refreshSlotOptions = () => {
  const select = document.getElementById('slot_select');
  if (!select) return;
  select.innerHTML = ''; // clear
  SLOTS.forEach(slot => {
    const option = document.createElement('option');
    option.value = slot.id;
    option.textContent = `${slot.label} — ${slot.number} tables available`;
    select.appendChild(option);
  });
};

// Functions (cart operations)
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

// Update cart UI
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
  const sidebar = document.querySelector('.cart-sidebar');
  const overlay = document.querySelector('.overlay');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('active');
};

// Quantity modal
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

// Render menu into the active tab's grid
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

// Switch tab
const switchTab = (tab) => {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  const btn = document.querySelector(`.tab-btn[data-tab="${tab}"]`);
  if (btn) btn.classList.add('active');
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  const content = document.querySelector(`.tab-content[data-tab="${tab}"]`);
  if (content) content.classList.add('active');
  renderMenu();
};

// File upload preview and controls
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

// Checkout form handling
const APPS_SCRIPT_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbyB8eH8YFAfGDAu1g_DNcjOOoXADuo3iwJTUzlaaOjMbCPt_f-P_bxwtLkQHR4Td_1Z/exec';

let isSubmitting = false;

const handleCheckoutForm = () => {
  if (isSubmitting) return;
  isSubmitting = true;

  const btn = document.querySelector('.confirm-btn');
  const originalBtnHtml = btn ? btn.innerHTML : null;

  const disableButtonUI = () => {
    if (!btn) return;
    btn.disabled = true;
    btn.setAttribute('aria-disabled', 'true');
    btn.classList.add('loading');
    btn.innerHTML = `
      <svg class="btn-spinner" width="18" height="18" viewBox="0 0 50 50" aria-hidden="true">
        <circle cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
      </svg>
      <span style="margin-left:8px;">Processing…</span>
    `;
  };

  const reenableButtonUI = () => {
    if (!btn) return;
    btn.disabled = false;
    btn.removeAttribute('aria-disabled');
    btn.classList.remove('loading');
    btn.innerHTML = originalBtnHtml || 'Confirm Order';
  };

  disableButtonUI();

  const nameEl = document.getElementById('customer_name');
  const emailEl = document.getElementById('customer_email');
  const phoneEl = document.getElementById('customer_phone');
  const slotSelect = document.getElementById('slot_select');
  const screenshotInput = document.getElementById('payment_screenshot');

  const name = nameEl ? nameEl.value.trim() : '';
  const email = emailEl ? emailEl.value.trim() : '';
  const phone = phoneEl ? phoneEl.value.trim() : '';
  const slot = slotSelect ? slotSelect.value : '';

  if (!name || !email || !phone) {
    alert('Please fill all details');
    isSubmitting = false;
    reenableButtonUI();
    return;
  }
  if (!screenshotInput || !screenshotInput.files || screenshotInput.files.length === 0) {
    alert('Please upload payment screenshot');
    isSubmitting = false;
    reenableButtonUI();
    return;
  }

  const people = getCartCount();
  const tablesNeeded = Math.max(1, Math.ceil(people / 2));
  const orderItems = cart.map(i => `${i.name} x${i.quantity}`).join('; ');
  const orderSummary = `Items: ${orderItems} | People: ${people} | Tables: ${tablesNeeded} | Total: ₹${getCartTotal()}`;

  const file = screenshotInput.files[0];
  const reader = new FileReader();

  let submitTimeout = setTimeout(() => {
    if (isSubmitting) {
      isSubmitting = false;
      const leftoverForm = document.getElementById('apps-script-temp-form');
      if (leftoverForm) leftoverForm.remove();
      reenableButtonUI();
      alert('Submission is taking longer than expected. Please try again. If the problem persists, contact support at 7067466990.');
    }
  }, 20000);

  reader.onload = function(evt) {
    try {
      const dataUrl = evt.target.result;
      const parts = dataUrl.split(',');
      const base64 = parts[1] || '';
      const mime = (parts[0].match(/data:(.*);base64/) || [])[1] || 'image/png';

      const form = document.createElement('form');
      form.method = 'POST';
      form.enctype = 'multipart/form-data';
      form.action = APPS_SCRIPT_WEBAPP_URL;
      form.style.display = 'none';
      form.id = 'apps-script-temp-form';

      const addInput = (k, v) => {
        const i = document.createElement('input');
        i.type = 'hidden';
        i.name = k;
        i.value = v || '';
        form.appendChild(i);
      };
      addInput('name', name);
      addInput('email', email);
      addInput('phone', phone);
      addInput('slot', slot);
      addInput('order', orderSummary);
      addInput('base64_image', base64);
      addInput('filename', file.name);
      addInput('mimetype', mime);

      let iframe = document.getElementById('apps-script-iframe');
      if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = 'apps-script-iframe';
        iframe.name = 'apps-script-iframe';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
      }

      form.target = iframe.name;
      document.body.appendChild(form);

      const onIFrameLoad = () => {
        try {
          clearTimeout(submitTimeout);
          iframe.removeEventListener('load', onIFrameLoad);
          const temp = document.getElementById('apps-script-temp-form');
          if (temp) temp.remove();
          clearCart();
          window.location.href = 'success.html';
        } catch (err) {
          isSubmitting = false;
          reenableButtonUI();
          alert('An unexpected error occurred. Please try again.');
        }
      };

      iframe.addEventListener('load', onIFrameLoad);
      form.submit();
    } catch (err) {
      clearTimeout(submitTimeout);
      isSubmitting = false;
      reenableButtonUI();
      alert('Failed to read the file or submit. Please try again.');
    }
  };

  reader.readAsDataURL(file);
};

// DOMContentLoaded initialization
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();

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

  refreshSlotOptions();

  document.querySelectorAll('.overlay').forEach(ov => {
    ov.addEventListener('click', () => {
      closeCart();
      closeQuantityModal();
    });
  });

  // Countdown Timer (only on menu.html)
  if (document.querySelector('.menu-container')) {
    const endTime = new Date('2025-10-28T23:59:00').getTime(); // End: 11:59 AM, Oct 28, 2025
    const startTime = new Date('2025-10-27T12:01:00').getTime(); // Start: 12:01 PM, Oct 27, 2025 (for reference, but timer starts from now)
    const now = new Date().getTime();
    if (now < startTime) {
      // If before start, show "Opens Soon" or similar
      document.getElementById('countdown').innerHTML = 'Opens Soon';
      return;
    }
    const updateCountdown = () => {
      const currentTime = new Date().getTime();
      const distance = endTime - currentTime;
      const countdownEl = document.getElementById('countdown');
      if (!countdownEl) return;
      if (distance < 0) {
        countdownEl.innerHTML = 'EXPIRED';
        return;
      }
      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      countdownEl.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
    updateCountdown(); // Initial update
    setInterval(updateCountdown, 1000); // Update every second
  }
});