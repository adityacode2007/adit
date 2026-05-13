// ============================================
        // DATA
        // ============================================
        const PRODUCTS = [
            { id: 0, name: 'Premium Leather Tote Bag', brand: 'Luxe Studio', price: 449, oldPrice: 599, discount: 25, rating: 4.9, reviews: 248, category: 'Fashion', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80', badge: 'Bestseller', badgeType: 'accent' },
            { id: 1, name: 'Minimalist Swiss Watch', brand: 'Timepiece Co.', price: 299, oldPrice: 399, discount: 25, rating: 4.8, reviews: 184, category: 'Accessories', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80', badge: 'New', badgeType: 'green' },
            { id: 2, name: 'Air Performance Sneakers', brand: 'StrideX', price: 179, oldPrice: 229, discount: 22, rating: 4.7, reviews: 432, category: 'Fashion', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80', badge: 'Trending', badgeType: 'accent' },
            { id: 3, name: 'Wireless Noise-Cancelling Headphones', brand: 'SoundLux', price: 389, oldPrice: 499, discount: 22, rating: 4.9, reviews: 891, category: 'Electronics', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80', badge: 'Hot 🔥', badgeType: 'red' },
            { id: 4, name: 'Cashmere Oversized Sweater', brand: 'Softwear', price: 249, oldPrice: 349, discount: 29, rating: 4.6, reviews: 127, category: 'Fashion', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80' },
            { id: 5, name: 'Scented Soy Candle Set', brand: 'Lumière', price: 89, oldPrice: null, discount: 0, rating: 4.8, reviews: 203, category: 'Home', image: 'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?w=400&q=80', badge: 'New', badgeType: 'green' },
            { id: 6, name: '4K Action Camera', brand: 'ViewPro', price: 329, oldPrice: 399, discount: 18, rating: 4.5, reviews: 318, category: 'Electronics', image: 'https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=400&q=80' },
            { id: 7, name: 'Silk Evening Blouse', brand: 'Atelier X', price: 189, oldPrice: 259, discount: 27, rating: 4.7, reviews: 93, category: 'Fashion', image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&q=80' },
            { id: 8, name: 'Marble Desk Accessories Set', brand: 'WorkLux', price: 149, oldPrice: null, discount: 0, rating: 4.4, reviews: 61, category: 'Home', image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80' },
            { id: 9, name: 'Polarized Aviator Sunglasses', brand: 'SunCraft', price: 129, oldPrice: 179, discount: 28, rating: 4.6, reviews: 274, category: 'Accessories', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80' },
            { id: 10, name: 'Smart Fitness Tracker', brand: 'FitTech', price: 199, oldPrice: 249, discount: 20, rating: 4.3, reviews: 567, category: 'Electronics', image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&q=80' },
            { id: 11, name: 'Linen Jogger Pants', brand: 'EasyWear', price: 79, oldPrice: 99, discount: 20, rating: 4.5, reviews: 341, category: 'Fashion', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&q=80' },
        ];

        const CATEGORIES = [
            { icon: '👗', name: 'Fashion', count: '2,480 items' },
            { icon: '⌚', name: 'Accessories', count: '1,130 items' },
            { icon: '📱', name: 'Electronics', count: '890 items' },
            { icon: '🏠', name: 'Home & Living', count: '740 items' },
            { icon: '👟', name: 'Footwear', count: '560 items' },
            { icon: '💄', name: 'Beauty', count: '980 items' },
        ];

        const REVIEWS = [
            { name: 'Sarah L.', handle: '@sarahlooks', avatar: 'https://i.pravatar.cc/80?img=47', stars: '★★★★★', text: 'Absolutely exceptional quality! The leather tote I ordered exceeded every expectation — the craftsmanship is impeccable and the service was swift.' },
            { name: 'Marcus T.', handle: '@marcust', avatar: 'https://i.pravatar.cc/80?img=12', stars: '★★★★★', text: 'I\'ve ordered from many luxury online stores, but LuxeShop stands apart. Everything arrived beautifully packaged with a personal note.' },
            { name: 'Priya R.', handle: '@priyaralux', avatar: 'https://i.pravatar.cc/80?img=31', stars: '★★★★★', text: 'The curation on this platform is incredible. Each piece feels like it was handpicked. Already on my third order and completely obsessed.' },
        ];

        const TICKER_ITEMS = ['Free shipping on orders over $100', 'New arrivals every Friday', 'Exclusive member discounts up to 40%', 'Handcrafted with certified materials', '30-day hassle-free returns', 'Over 50,000 happy customers worldwide'];

        // ============================================
        // STATE
        // ============================================
        let cart = [];
        let wishlist = [];
        let currentPage = 'home';
        let pdQty = 1;
        let filteredProducts = [...PRODUCTS];

        // ============================================
        // NAVIGATION
        // ============================================
        function navigate(page) {
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            const el = document.getElementById('page-' + page);
            if (!el) return;
            el.classList.add('active');
            currentPage = page;
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (page === 'cart') renderFullCart();
            if (page === 'checkout') renderCheckout();
            if (page === 'wishlist') renderWishlist();
            if (page === 'admin') renderAdmin();
            // Update nav active state
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        }

        // ============================================
        // THEME
        // ============================================
        function toggleTheme() {
            const html = document.documentElement;
            const isDark = html.dataset.theme === 'dark';
            html.dataset.theme = isDark ? 'light' : 'dark';
            document.getElementById('theme-btn').textContent = isDark ? '🌙' : '☀️';
        }

        // ============================================
        // MOBILE MENU
        // ============================================
        function toggleMobileMenu() {
            document.getElementById('mobile-menu').classList.toggle('open');
        }

        // ============================================
        // CART
        // ============================================
        function toggleCart() {
            const overlay = document.getElementById('cart-overlay');
            const sidebar = document.getElementById('cart-sidebar');
            overlay.classList.toggle('open');
            sidebar.classList.toggle('open');
            renderCartSidebar();
        }

        function addToCart(productId, qty = 1) {
            const product = PRODUCTS[productId];
            const existing = cart.find(i => i.id === productId);
            if (existing) {
                existing.qty += qty;
            } else {
                cart.push({ ...product, qty });
            }
            updateCartBadge();
            renderCartSidebar();
            showToast(`"${product.name}" added to cart`, 'success');
        }

        function removeFromCart(productId) {
            cart = cart.filter(i => i.id !== productId);
            updateCartBadge();
            renderCartSidebar();
            if (currentPage === 'cart') renderFullCart();
            if (currentPage === 'checkout') renderCheckout();
        }

        function updateCartQty(productId, delta) {
            const item = cart.find(i => i.id === productId);
            if (!item) return;
            item.qty += delta;
            if (item.qty <= 0) removeFromCart(productId);
            updateCartBadge();
            renderCartSidebar();
            if (currentPage === 'cart') renderFullCart();
        }

        function clearCart() {
            cart = [];
            updateCartBadge();
            renderCartSidebar();
            renderFullCart();
            showToast('Cart cleared', 'info');
        }

        function updateCartBadge() {
            const total = cart.reduce((s, i) => s + i.qty, 0);
            document.getElementById('cart-count').textContent = total;
        }

        function getCartTotal() {
            return cart.reduce((s, i) => s + i.price * i.qty, 0);
        }

        function renderCartSidebar() {
            const container = document.getElementById('cart-items-container');
            if (cart.length === 0) {
                container.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🛒</div><p>Your cart is empty</p><p style="font-size:13px;margin-top:8px;color:var(--text3)">Start shopping to add items</p></div>`;
            } else {
                container.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img class="cart-item-img" src="${item.image}" alt="${item.name}">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-variant">${item.brand}</div>
          <div class="cart-item-price">$${item.price}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="updateCartQty(${item.id},-1)">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQty(${item.id},1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Remove">✕</button>
      </div>
    `).join('');
            }
            const subtotal = getCartTotal();
            document.getElementById('cart-subtotal').textContent = '$' + subtotal.toFixed(2);
            document.getElementById('cart-total').textContent = '$' + subtotal.toFixed(2);
        }

        function renderFullCart() {
            const container = document.getElementById('full-cart-items');
            if (cart.length === 0) {
                container.innerHTML = `<div style="text-align:center;padding:60px 20px;color:var(--text2)"><div style="font-size:56px;opacity:0.3;margin-bottom:16px">🛒</div><p>Your cart is empty.</p><button class="btn btn-primary" style="margin-top:20px" onclick="navigate('listing')">Start Shopping</button></div>`;
            } else {
                container.innerHTML = cart.map(item => `
      <div class="cart-table-row">
        <div class="cart-product-cell">
          <img class="cart-product-img" src="${item.image}" alt="${item.name}">
          <div>
            <div class="cart-product-name">${item.name}</div>
            <div class="cart-product-variant">${item.brand}</div>
          </div>
        </div>
        <div class="cell-center cell-price">$${item.price}</div>
        <div class="cell-center">
          <div style="display:inline-flex;align-items:center;gap:6px;border:1px solid var(--border);border-radius:8px;padding:2px">
            <button class="qty-btn" onclick="updateCartQty(${item.id},-1)">−</button>
            <span style="min-width:28px;text-align:center;font-size:14px;font-weight:600">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQty(${item.id},1)">+</button>
          </div>
        </div>
        <div class="cell-center cell-total">$${(item.price * item.qty).toFixed(2)}</div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
      </div>
    `).join('');
            }
            const sub = getCartTotal();
            const tax = sub * 0.08;
            const total = sub + tax;
            document.getElementById('cart-page-subtotal').textContent = '$' + sub.toFixed(2);
            document.getElementById('cart-page-tax').textContent = '$' + tax.toFixed(2);
            document.getElementById('cart-page-total').textContent = '$' + total.toFixed(2);
        }

        function renderCheckout() {
            const sub = getCartTotal();
            const tax = sub * 0.08;
            const total = sub + tax;
            document.getElementById('co-subtotal').textContent = '$' + sub.toFixed(2);
            document.getElementById('co-tax').textContent = '$' + tax.toFixed(2);
            document.getElementById('co-total').textContent = '$' + total.toFixed(2);
            document.getElementById('checkout-total').textContent = '$' + total.toFixed(2);
            const items = document.getElementById('checkout-items');
            items.innerHTML = cart.slice(0, 3).map(item => `
    <div style="display:flex;gap:12px;padding:10px 0;border-bottom:1px solid var(--border);font-size:13px">
      <img src="${item.image}" style="width:52px;height:52px;border-radius:8px;object-fit:cover">
      <div style="flex:1"><div style="font-weight:500;line-height:1.3">${item.name}</div><div style="color:var(--text2);margin-top:2px">Qty: ${item.qty}</div></div>
      <div style="font-weight:600">$${(item.price * item.qty).toFixed(2)}</div>
    </div>
  `).join('');
            if (cart.length > 3) items.innerHTML += `<div style="font-size:13px;color:var(--text2);padding:8px 0">+ ${cart.length - 3} more items</div>`;
        }

        function applyCoupon() {
            const input = document.querySelector('.coupon-input');
            const code = input.value.trim().toUpperCase();
            if (code === 'LUXE20') {
                document.getElementById('discount-row').style.display = 'flex';
                document.getElementById('discount-val').textContent = '-$' + (getCartTotal() * 0.2).toFixed(0);
                showToast('Coupon LUXE20 applied! 20% off', 'success');
            } else {
                showToast('Invalid coupon code', 'error');
            }
        }

        function placeOrder() {
            if (cart.length === 0) { showToast('Your cart is empty!', 'error'); return; }
            const btn = event.target.closest('button');
            btn.textContent = '⏳ Processing...';
            btn.disabled = true;
            setTimeout(() => {
                cart = [];
                updateCartBadge();
                navigate('success');
                showToast('Order placed successfully! 🎉', 'success');
            }, 2000);
        }

        // ============================================
        // WISHLIST
        // ============================================
        function toggleWishlistItem(productId) {
            const idx = wishlist.indexOf(productId);
            if (idx === -1) {
                wishlist.push(productId);
                showToast('Added to wishlist ♥', 'success');
            } else {
                wishlist.splice(idx, 1);
                showToast('Removed from wishlist', 'info');
            }
            document.getElementById('wishlist-count').textContent = wishlist.length;
            if (currentPage === 'wishlist') renderWishlist();
            // Update all wish buttons
            document.querySelectorAll('.product-wish-btn').forEach(btn => {
                const id = parseInt(btn.dataset.id);
                btn.classList.toggle('active', wishlist.includes(id));
                btn.textContent = wishlist.includes(id) ? '♥' : '♡';
            });
        }

        function renderWishlist() {
            const grid = document.getElementById('wishlist-grid');
            const sub = document.getElementById('wishlist-subtitle');
            if (wishlist.length === 0) {
                grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:80px 20px;color:var(--text2)"><div style="font-size:64px;opacity:0.2;margin-bottom:16px">♡</div><p style="font-size:18px;font-weight:500;margin-bottom:8px">Your wishlist is empty</p><p style="font-size:14px">Save items you love and find them here</p><button class="btn btn-primary" style="margin-top:24px" onclick="navigate('listing')">Browse Products</button></div>`;
                sub.textContent = '0 saved items';
                return;
            }
            sub.textContent = wishlist.length + ' saved items';
            grid.innerHTML = wishlist.map(id => productCard(PRODUCTS[id])).join('');
            initCardAnimations();
        }

        // ============================================
        // PRODUCTS
        // ============================================
        function productCard(p) {
            const isWished = wishlist.includes(p.id);
            const badgeColors = { accent: 'var(--accent)', green: 'var(--green)', red: 'var(--red)' };
            return `
    <div class="product-card" onclick="navigate('product')">
      <div class="product-img-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <div class="product-badges">
          ${p.badge ? `<span class="tag" style="background:${badgeColors[p.badgeType] || 'var(--accent)'};color:#fff">${p.badge}</span>` : ''}
          ${p.discount ? `<span class="tag tag-red">${p.discount}%</span>` : ''}
        </div>
        <div class="product-actions">
          <button class="product-add-btn" onclick="event.stopPropagation();addToCart(${p.id})">Add to Cart</button>
          <button class="product-wish-btn ${isWished ? 'active' : ''}" data-id="${p.id}" onclick="event.stopPropagation();toggleWishlistItem(${p.id})">${isWished ? '♥' : '♡'}</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          <span class="stars">★★★★${p.rating >= 4.8 ? '★' : '☆'}</span>
          <span style="font-size:12px;font-weight:600">${p.rating}</span>
          <span class="rating-count">(${p.reviews})</span>
        </div>
        <div class="product-price-row">
          <span class="product-price">$${p.price}</span>
          ${p.oldPrice ? `<span class="product-price-old">$${p.oldPrice}</span>` : ''}
          ${p.discount ? `<span class="product-discount">-${p.discount}%</span>` : ''}
        </div>
      </div>
    </div>
  `;
        }

        function renderProductsGrid(containerId, products, skeletonFirst = false) {
            const container = document.getElementById(containerId);
            if (skeletonFirst) {
                // Show skeletons
                container.innerHTML = Array(8).fill(0).map(() => `
      <div class="skeleton-card">
        <div class="skel-img skeleton"></div>
        <div class="skel-body">
          <div class="skel-line w-40 skeleton"></div>
          <div class="skel-line w-80 skeleton" style="margin-top:8px"></div>
          <div class="skel-line w-60 skeleton"></div>
        </div>
      </div>
    `).join('');
                setTimeout(() => {
                    container.innerHTML = products.map(p => productCard(p)).join('');
                    initCardAnimations();
                }, 600);
            } else {
                container.innerHTML = products.map(p => productCard(p)).join('');
                initCardAnimations();
            }
        }

        function initCardAnimations() {
            const cards = document.querySelectorAll('.product-card, .cat-card');
            const observer = new IntersectionObserver(entries => {
                entries.forEach((e, i) => {
                    if (e.isIntersecting) {
                        setTimeout(() => e.target.style.opacity = '1', i * 60);
                        observer.unobserve(e.target);
                    }
                });
            }, { threshold: 0.1 });
            cards.forEach(card => {
                card.style.opacity = '0';
                card.style.transition = 'opacity 0.4s ease, transform 0.3s ease, box-shadow 0.3s ease';
                observer.observe(card);
            });
        }

        function filterProducts(category, btn) {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            if (btn) btn.classList.add('active');
            filteredProducts = category === 'All' ? [...PRODUCTS] : PRODUCTS.filter(p => p.category === category);
            renderProductsGrid('home-products-grid', filteredProducts.slice(0, 8));
            renderProductsGrid('listing-products-grid', filteredProducts);
            const el = document.getElementById('listing-count');
            if (el) el.textContent = `Showing ${filteredProducts.length} products`;
        }

        function sortProducts(val) {
            let sorted = [...filteredProducts];
            if (val === 'price-low') sorted.sort((a, b) => a.price - b.price);
            else if (val === 'price-high') sorted.sort((a, b) => b.price - a.price);
            else if (val === 'rating') sorted.sort((a, b) => b.rating - a.rating);
            else if (val === 'newest') sorted.reverse();
            renderProductsGrid('home-products-grid', sorted.slice(0, 8));
            renderProductsGrid('listing-products-grid', sorted);
        }

        // ============================================
        // PRODUCT DETAIL
        // ============================================
        function switchGallery(thumb, src) {
            document.getElementById('gallery-main-img').src = src;
            document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        }

        function changeQty(delta) {
            pdQty = Math.max(1, pdQty + delta);
            document.getElementById('pd-qty').textContent = pdQty;
        }

        function addCurrentToCart() {
            addToCart(0, pdQty);
        }

        function switchTab(tab, contentId) {
            document.querySelectorAll('.pd-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.pd-tab-content').forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(contentId).classList.add('active');
        }

        function selectSize(el) {
            document.querySelectorAll('.size-opt').forEach(s => s.classList.remove('active'));
            el.classList.add('active');
        }

        function selectPayMethod(el) {
            document.querySelectorAll('.pay-method').forEach(m => m.classList.remove('active'));
            el.classList.add('active');
        }

        // ============================================
        // AUTH
        // ============================================
        function handleLogin() {
            const btn = event.target;
            btn.textContent = '⏳ Signing in...';
            btn.disabled = true;
            setTimeout(() => {
                showToast('Welcome back! 👋', 'success');
                navigate('home');
                btn.textContent = 'Sign In';
                btn.disabled = false;
            }, 1500);
        }

        function handleSignup() {
            const btn = event.target;
            btn.textContent = '⏳ Creating account...';
            btn.disabled = true;
            setTimeout(() => {
                showToast('Account created! Welcome to LuxeShop 🎉', 'success');
                navigate('home');
                btn.textContent = 'Create Account';
                btn.disabled = false;
            }, 1500);
        }

        function togglePass(id, btn) {
            const input = document.getElementById(id);
            input.type = input.type === 'password' ? 'text' : 'password';
            btn.textContent = input.type === 'password' ? '👁' : '🙈';
        }

        // ============================================
        // SEARCH
        // ============================================
        function handleSearch(val) {
            if (val.length > 2) {
                const results = PRODUCTS.filter(p => p.name.toLowerCase().includes(val.toLowerCase()) || p.brand.toLowerCase().includes(val.toLowerCase()));
                if (results.length > 0) {
                    filteredProducts = results;
                    renderProductsGrid('listing-products-grid', results);
                    const el = document.getElementById('listing-count');
                    if (el) el.textContent = `${results.length} results for "${val}"`;
                }
            }
        }

        // ============================================
        // TRACKING
        // ============================================
        function trackOrder() {
            const val = document.getElementById('tracking-input').value;
            if (!val) { showToast('Please enter an order ID', 'error'); return; }
            showToast('Order found! LS-2025-48291', 'success');
            document.getElementById('tracking-card').style.display = 'block';
        }

        // ============================================
        // NEWSLETTER
        // ============================================
        function subscribeNewsletter() {
            showToast('You\'re subscribed! Welcome to the inner circle ✉️', 'success');
        }

        // ============================================
        // TOAST
        // ============================================
        function showToast(message, type = 'info', duration = 3500) {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            toast.className = `toast ${type}`;
            toast.innerHTML = `<span>${message}</span>`;
            container.appendChild(toast);
            setTimeout(() => {
                toast.classList.add('toast-out');
                setTimeout(() => toast.remove(), 300);
            }, duration);
        }

        // ============================================
        // ADMIN
        // ============================================
        function renderAdmin() {
            // Chart
            const chartData = [60, 82, 54, 90, 72, 95, 88];
            const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            const maxVal = Math.max(...chartData);
            const chart = document.getElementById('admin-chart');
            if (chart) {
                chart.innerHTML = chartData.map((v, i) => `
      <div class="chart-bar-wrap">
        <div class="chart-bar" style="height:${(v / maxVal) * 100}%" title="$${v * 1000}"></div>
        <div class="chart-bar-label">${labels[i]}</div>
      </div>
    `).join('');
            }
            // Top Products
            const topContainer = document.getElementById('admin-top-products');
            if (topContainer) {
                topContainer.innerHTML = PRODUCTS.slice(0, 5).map((p, i) => `
      <div style="display:flex;align-items:center;gap:16px;padding:12px 0;border-bottom:1px solid var(--border)">
        <span style="font-size:13px;font-weight:700;color:var(--text3);width:16px">${i + 1}</span>
        <img src="${p.image}" style="width:44px;height:44px;border-radius:8px;object-fit:cover">
        <div style="flex:1"><div style="font-size:14px;font-weight:500">${p.name}</div><div style="font-size:12px;color:var(--text2)">${p.brand}</div></div>
        <div style="text-align:right"><div style="font-size:14px;font-weight:600">$${p.price}</div><div style="font-size:12px;color:var(--text2)">${p.reviews} sold</div></div>
      </div>
    `).join('');
            }
        }

        // ============================================
        // REVIEWS (Product Detail)
        // ============================================
        function renderProductReviews() {
            const sampleReviews = [
                { name: 'Emily R.', avatar: 'https://i.pravatar.cc/60?img=5', stars: '★★★★★', date: 'May 2, 2025', text: 'Beautiful bag, exactly as described. The leather quality is outstanding and the hardware feels very premium.' },
                { name: 'James K.', avatar: 'https://i.pravatar.cc/60?img=8', stars: '★★★★★', date: 'Apr 28, 2025', text: 'Shipped super fast and beautifully packaged. The tote is stunning in person — photos don\'t do it justice.' },
                { name: 'Amara O.', avatar: 'https://i.pravatar.cc/60?img=25', stars: '★★★★☆', date: 'Apr 20, 2025', text: 'Gorgeous craftsmanship. Minus one star only because the strap took a bit of adjustment. Overall very happy!' },
            ];
            const container = document.getElementById('reviews-section');
            if (container) {
                container.innerHTML = sampleReviews.map(r => `
      <div style="background:var(--bg2);border-radius:16px;padding:24px">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
          <img src="${r.avatar}" style="width:44px;height:44px;border-radius:50%" alt="">
          <div><div style="font-size:14px;font-weight:600">${r.name}</div><div style="font-size:12px;color:var(--text2)">${r.date}</div></div>
          <div style="margin-left:auto;color:#f59e0b">${r.stars}</div>
        </div>
        <p style="font-size:14px;line-height:1.7;color:var(--text2)">${r.text}</p>
      </div>
    `).join('');
            }
        }

        // ============================================
        // SCROLL NAV
        // ============================================
        window.addEventListener('scroll', () => {
            document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 20);
        });

        // ============================================
        // INIT
        // ============================================
        function init() {
            // Ticker
            const tickerEl = document.getElementById('ticker-inner');
            if (tickerEl) {
                const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
                tickerEl.innerHTML = items.map(t => `<span class="ticker-item">${t}</span>`).join('');
            }

            // Categories
            const catGrid = document.getElementById('categories-grid');
            if (catGrid) {
                catGrid.innerHTML = CATEGORIES.map(c => `
      <div class="cat-card" onclick="filterProducts('${c.name}',null);navigate('listing')">
        <span class="cat-icon">${c.icon}</span>
        <div class="cat-name">${c.name}</div>
        <div class="cat-count">${c.count}</div>
      </div>
    `).join('');
            }

            // Home products
            renderProductsGrid('home-products-grid', PRODUCTS.slice(0, 8), true);

            // Listing products
            renderProductsGrid('listing-products-grid', PRODUCTS, true);

            // Related products
            renderProductsGrid('related-products', PRODUCTS.slice(4, 8));

            // Reviews
            const reviewsGrid = document.getElementById('reviews-grid');
            if (reviewsGrid) {
                reviewsGrid.innerHTML = REVIEWS.map(r => `
      <div class="review-card">
        <div class="review-stars">${r.stars}</div>
        <p class="review-text">"${r.text}"</p>
        <div class="reviewer">
          <img class="reviewer-avatar" src="${r.avatar}" alt="${r.name}">
          <div>
            <div class="reviewer-name">${r.name}</div>
            <div class="reviewer-handle">${r.handle}</div>
          </div>
        </div>
      </div>
    `).join('');
            }

            // Product reviews
            renderProductReviews();

            // Loading screen
            setTimeout(() => {
                document.getElementById('loading-screen').classList.add('hidden');
            }, 1600);

            // Color swatches click
            document.querySelectorAll('.swatch').forEach(s => {
                s.addEventListener('click', function () {
                    this.closest('.color-swatches').querySelectorAll('.swatch').forEach(sw => sw.classList.remove('active'));
                    this.classList.add('active');
                });
            });
        }

        document.addEventListener('DOMContentLoaded', init);
