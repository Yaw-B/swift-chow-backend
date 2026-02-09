/* ============================================
   FAFO FOOD - Complete JavaScript
   Ghana's Favorite Fast Food
   © 2026 FAFO FOOD. Designed by Ayensu Edwin Yaw Boadi
   ============================================ */

// ============================================
// FOOD MENU DATA
// ============================================
const menuData = [
    // Burgers
    { id: 1, name: "Classic Beef Burger", category: "Burgers", price: 45, oldPrice: null, description: "Juicy beef patty with fresh lettuce, tomato, and our special sauce", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Beef+Burger", badge: "Popular" },
    { id: 2, name: "Cheese Burger Deluxe", category: "Burgers", price: 55, oldPrice: 65, description: "Double cheese melt with premium beef and caramelized onions", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Cheese+Burger", badge: "Best Seller" },
    { id: 3, name: "Chicken Burger", category: "Burgers", price: 50, oldPrice: null, description: "Crispy fried chicken fillet with mayo and fresh vegetables", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Chicken+Burger", badge: null },
    { id: 4, name: "Double Stack Burger", category: "Burgers", price: 75, oldPrice: 85, description: "Two beef patties stacked high with double cheese", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Double+Stack", badge: "New" },
    { id: 5, name: "BBQ Bacon Burger", category: "Burgers", price: 65, oldPrice: null, description: "Smoky BBQ sauce with crispy bacon and cheddar", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=BBQ+Bacon", badge: null },
    { id: 6, name: "Veggie Burger", category: "Burgers", price: 40, oldPrice: null, description: "Plant-based patty with avocado and fresh greens", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Veggie+Burger", badge: "Healthy" },
    { id: 7, name: "Spicy Jerk Burger", category: "Burgers", price: 60, oldPrice: null, description: "Caribbean-inspired jerk seasoned beef with pepper sauce", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Jerk+Burger", badge: "Spicy" },
    { id: 8, name: "Mushroom Swiss Burger", category: "Burgers", price: 58, oldPrice: null, description: "Sautéed mushrooms with melted Swiss cheese", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Mushroom+Swiss", badge: null },
    
    // Pizza
    { id: 9, name: "Margherita Pizza", category: "Pizza", price: 80, oldPrice: null, description: "Classic tomato sauce, mozzarella, and fresh basil", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Margherita", badge: "Classic" },
    { id: 10, name: "Pepperoni Pizza", category: "Pizza", price: 95, oldPrice: null, description: "Loaded with spicy pepperoni and extra cheese", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Pepperoni", badge: "Popular" },
    { id: 11, name: "BBQ Chicken Pizza", category: "Pizza", price: 100, oldPrice: 120, description: "Grilled chicken, BBQ sauce, onions, and cilantro", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=BBQ+Chicken", badge: "Best Seller" },
    { id: 12, name: "Veggie Supreme Pizza", category: "Pizza", price: 85, oldPrice: null, description: "Bell peppers, mushrooms, olives, onions, and tomatoes", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Veggie+Supreme", badge: "Healthy" },
    { id: 13, name: "Meat Lovers Pizza", category: "Pizza", price: 110, oldPrice: null, description: "Pepperoni, sausage, ham, bacon, and beef", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Meat+Lovers", badge: "New" },
    { id: 14, name: "Hawaiian Pizza", category: "Pizza", price: 90, oldPrice: null, description: "Ham and pineapple with mozzarella cheese", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Hawaiian", badge: null },
    { id: 15, name: "Four Cheese Pizza", category: "Pizza", price: 95, oldPrice: null, description: "Mozzarella, cheddar, parmesan, and gorgonzola", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Four+Cheese", badge: null },
    
    // Sandwiches
    { id: 16, name: "Club Sandwich", category: "Sandwiches", price: 40, oldPrice: null, description: "Triple-decker with turkey, bacon, lettuce, and tomato", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Club+Sandwich", badge: "Popular" },
    { id: 17, name: "Grilled Chicken Sandwich", category: "Sandwiches", price: 45, oldPrice: null, description: "Marinated grilled chicken with honey mustard", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Grilled+Chicken", badge: null },
    { id: 18, name: "Tuna Melt", category: "Sandwiches", price: 42, oldPrice: null, description: "Creamy tuna salad with melted cheddar on toast", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Tuna+Melt", badge: null },
    { id: 19, name: "BLT Sandwich", category: "Sandwiches", price: 38, oldPrice: null, description: "Crispy bacon, fresh lettuce, and ripe tomatoes", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=BLT", badge: "Classic" },
    { id: 20, name: "Veggie Wrap", category: "Sandwiches", price: 35, oldPrice: null, description: "Grilled vegetables with hummus in a soft tortilla", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Veggie+Wrap", badge: "Healthy" },
    
    // Shakes
    { id: 21, name: "Chocolate Shake", category: "Shakes", price: 30, oldPrice: null, description: "Rich and creamy chocolate milkshake", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Chocolate+Shake", badge: "Popular" },
    { id: 22, name: "Vanilla Shake", category: "Shakes", price: 28, oldPrice: null, description: "Classic vanilla bean milkshake", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Vanilla+Shake", badge: null },
    { id: 23, name: "Strawberry Shake", category: "Shakes", price: 30, oldPrice: null, description: "Fresh strawberry blended to perfection", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Strawberry+Shake", badge: null },
    { id: 24, name: "Oreo Shake", category: "Shakes", price: 35, oldPrice: null, description: "Crushed Oreo cookies blended with vanilla ice cream", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Oreo+Shake", badge: "Best Seller" },
    { id: 25, name: "Caramel Shake", category: "Shakes", price: 32, oldPrice: null, description: "Sweet caramel swirled with creamy vanilla", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Caramel+Shake", badge: null },
    
    // Ice Cream
    { id: 26, name: "Vanilla Scoop", category: "Ice Cream", price: 15, oldPrice: null, description: "Creamy vanilla ice cream scoop", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Vanilla+Scoop", badge: null },
    { id: 27, name: "Chocolate Sundae", category: "Ice Cream", price: 25, oldPrice: null, description: "Chocolate ice cream with hot fudge and whipped cream", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Chocolate+Sundae", badge: "Popular" },
    { id: 28, name: "Strawberry Delight", category: "Ice Cream", price: 22, oldPrice: null, description: "Strawberry ice cream topped with fresh berries", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Strawberry+Delight", badge: null },
    { id: 29, name: "Banana Split", category: "Ice Cream", price: 35, oldPrice: 42, description: "Three scoops with banana, toppings, and whipped cream", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Banana+Split", badge: "Best Seller" },
    { id: 30, name: "Cookie Dough Cup", category: "Ice Cream", price: 28, oldPrice: null, description: "Vanilla ice cream loaded with cookie dough chunks", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Cookie+Dough", badge: "New" },
    
    // Desserts
    { id: 31, name: "Chocolate Brownie", category: "Desserts", price: 20, oldPrice: null, description: "Warm fudgy brownie served with vanilla ice cream", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Brownie", badge: "Popular" },
    { id: 32, name: "Cheesecake Slice", category: "Desserts", price: 30, oldPrice: null, description: "New York style cheesecake with berry compote", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Cheesecake", badge: null },
    { id: 33, name: "Apple Pie", category: "Desserts", price: 25, oldPrice: null, description: "Warm apple pie with cinnamon and vanilla sauce", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Apple+Pie", badge: "Classic" },
    { id: 34, name: "Tiramisu", category: "Desserts", price: 35, oldPrice: null, description: "Italian coffee-flavored layered dessert", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Tiramisu", badge: null },
    { id: 35, name: "Fruit Salad", category: "Desserts", price: 18, oldPrice: null, description: "Fresh seasonal fruits with honey drizzle", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Fruit+Salad", badge: "Healthy" },
    
    // Pastries
    { id: 36, name: "Croissant", category: "Pastries", price: 15, oldPrice: null, description: "Buttery, flaky French pastry", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Croissant", badge: null },
    { id: 37, name: "Meat Pie", category: "Pastries", price: 12, oldPrice: null, description: "Savory pie filled with seasoned minced meat", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Meat+Pie", badge: "Local Favorite" },
    { id: 38, name: "Chicken Pie", category: "Pastries", price: 14, oldPrice: null, description: "Flaky pastry with creamy chicken filling", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Chicken+Pie", badge: "Popular" },
    { id: 39, name: "Sausage Roll", category: "Pastries", price: 10, oldPrice: null, description: "Seasoned sausage wrapped in puff pastry", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Sausage+Roll", badge: null },
    { id: 40, name: "Doughnut", category: "Pastries", price: 8, oldPrice: null, description: "Soft glazed doughnut with your choice of topping", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Doughnut", badge: null },
    
    // Cakes
    { id: 41, name: "Chocolate Cake Slice", category: "Cakes", price: 35, oldPrice: null, description: "Rich chocolate layer cake with ganache frosting", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Chocolate+Cake", badge: "Best Seller" },
    { id: 42, name: "Red Velvet Slice", category: "Cakes", price: 38, oldPrice: null, description: "Classic red velvet with cream cheese frosting", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Red+Velvet", badge: "Popular" },
    { id: 43, name: "Carrot Cake Slice", category: "Cakes", price: 32, oldPrice: null, description: "Moist carrot cake with walnuts and cream cheese", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Carrot+Cake", badge: null },
    { id: 44, name: "Black Forest Slice", category: "Cakes", price: 40, oldPrice: null, description: "Chocolate sponge with cherries and whipped cream", image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Black+Forest", badge: null }
];

// Deals Data
const dealsData = [
    { id: 1, title: "3 Burgers + Fries + Drink", price: 150, originalPrice: 185, description: "Perfect for sharing with friends!" },
    { id: 2, title: "Burger + Ice Cream Combo", price: 85, originalPrice: 100, description: "Sweet treat after your meal" },
    { id: 3, title: "Family Pizza Deal", price: 200, originalPrice: 250, description: "Large pizza + 4 drinks + dessert" },
    { id: 4, title: "Shake & Cake Combo", price: 55, originalPrice: 68, description: "Any shake with cake slice" },
    { id: 5, title: "Sandwich Lunch Special", price: 60, originalPrice: 75, description: "Sandwich + drink + chips" }
];

// Blog Data
const blogData = [
    { id: 1, title: "The History of Burgers: From Hamburg to Ghana", category: "Food History", date: "January 15, 2026", author: "Edwin Boadi", excerpt: "Discover how the humble burger traveled from Germany to become Ghana's favorite fast food...", image: "https://placehold.co/600x400/DC2626/FFFFFF?text=Burger+History" },
    { id: 2, title: "Why Pizza Became Africa's Favorite Fast Food", category: "Trends", date: "January 12, 2026", author: "Ama Mensah", excerpt: "Pizza has taken Africa by storm. Learn why this Italian dish resonates with African taste buds...", image: "https://placehold.co/600x400/DC2626/FFFFFF?text=Pizza+Africa" },
    { id: 3, title: "5 Must-Try Street Foods in Accra", category: "Local Guide", date: "January 10, 2026", author: "Kofi Asante", excerpt: "From kelewele to waakye, explore the vibrant street food scene in Ghana's capital city...", image: "https://placehold.co/600x400/DC2626/FFFFFF?text=Accra+Street+Food" },
    { id: 4, title: "The Perfect Milkshake: Our Secret Recipe", category: "Recipes", date: "January 8, 2026", author: "Edwin Boadi", excerpt: "Ever wondered what makes FAFO shakes so creamy? We're revealing some of our secrets...", image: "https://placehold.co/600x400/DC2626/FFFFFF?text=Milkshake+Recipe" },
    { id: 5, title: "Fast Food and Family: Creating Memories at FAFO", category: "Stories", date: "January 5, 2026", author: "Ama Mensah", excerpt: "Heartwarming stories from families who've made FAFO Food their gathering spot...", image: "https://placehold.co/600x400/DC2626/FFFFFF?text=Family+Memories" },
    { id: 6, title: "How We Source Our Ingredients Locally", category: "Behind the Scenes", date: "January 3, 2026", author: "Kofi Asante", excerpt: "Meet the local farmers and suppliers who help us bring fresh food to your table...", image: "https://placehold.co/600x400/DC2626/FFFFFF?text=Local+Sourcing" },
    { id: 7, title: "Healthy Choices at Fast Food Restaurants", category: "Health", date: "December 30, 2025", author: "Dr. Akua Owusu", excerpt: "Tips for making healthier choices when dining at fast food restaurants...", image: "https://placehold.co/600x400/DC2626/FFFFFF?text=Healthy+Choices" },
    { id: 8, title: "The Rise of Food Delivery in Ghana", category: "Industry", date: "December 28, 2025", author: "Edwin Boadi", excerpt: "How technology is changing the way Ghanaians order and enjoy their favorite foods...", image: "https://placehold.co/600x400/DC2626/FFFFFF?text=Food+Delivery" },
    { id: 9, title: "Behind the Scenes: A Day at FAFO Kitchen", category: "Behind the Scenes", date: "December 25, 2025", author: "Ama Mensah", excerpt: "Join us for an exclusive look at how we prepare your favorite meals every day...", image: "https://placehold.co/600x400/DC2626/FFFFFF?text=FAFO+Kitchen" },
    { id: 10, title: "Customer Spotlight: Your Favorite Orders", category: "Community", date: "December 22, 2025", author: "Kofi Asante", excerpt: "We asked our customers about their go-to orders. The results might surprise you...", image: "https://placehold.co/600x400/DC2626/FFFFFF?text=Customer+Spotlight" }
];

// Reviews Data
const reviewsData = [
    { id: 1, name: "Kwame Asante", date: "January 14, 2026", rating: 5, comment: "The best burgers in Accra! I've been a loyal customer for 2 years now. The Cheese Burger Deluxe is absolutely amazing. Fast delivery and always hot!", avatar: "KA" },
    { id: 2, name: "Ama Serwaa", date: "January 12, 2026", rating: 5, comment: "Love the Family Pizza Deal! Perfect for our Sunday family dinners. Great value for money and the pizza is always fresh and delicious.", avatar: "AS" },
    { id: 3, name: "Kofi Mensah", date: "January 10, 2026", rating: 4, comment: "Good food and reasonable prices. The only reason I'm giving 4 stars is because sometimes delivery takes a bit longer during peak hours.", avatar: "KM" },
    { id: 4, name: "Abena Osei", date: "January 8, 2026", rating: 5, comment: "Their milkshakes are to die for! The Oreo Shake is my absolute favorite. And the staff are always so friendly and helpful.", avatar: "AO" },
    { id: 5, name: "Yaw Boateng", date: "January 6, 2026", rating: 5, comment: "FAFO Food has become my go-to spot for lunch. The meat pies are just like my grandmother used to make. Authentic taste!", avatar: "YB" },
    { id: 6, name: "Efua Darko", date: "January 4, 2026", rating: 4, comment: "Great variety on the menu. I love that they have healthy options too. The Veggie Burger is surprisingly delicious!", avatar: "ED" },
    { id: 7, name: "Nana Adu", date: "January 2, 2026", rating: 5, comment: "Ordered for my office party and everyone loved it! The catering service was professional and the food was excellent.", avatar: "NA" },
    { id: 8, name: "Akosua Frimpong", date: "December 30, 2025", rating: 5, comment: "The Black Forest cake is heavenly! Perfect for celebrations. I've ordered it for three birthdays now.", avatar: "AF" }
];

// Ghana Cities
const ghanaCities = [
    "Accra", "Kumasi", "Tema", "Tamale", "Takoradi", 
    "Cape Coast", "Koforidua", "Sunyani", "Ho", "Obuasi"
];

// ============================================
// CART FUNCTIONALITY
// ============================================
let cart = JSON.parse(localStorage.getItem('fafoCart')) || [];

function saveCart() {
    localStorage.setItem('fafoCart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cartCountElements = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElements.forEach(el => {
        el.textContent = totalItems;
        el.style.display = totalItems > 0 ? 'flex' : 'none';
    });
}

function addToCart(productId) {
    const product = menuData.find(item => item.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCart();
    showToast(`${product.name} added to cart!`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        renderCart();
    }
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function clearCart() {
    cart = [];
    saveCart();
    renderCart();
}

// ============================================
// DARK MODE FUNCTIONALITY
// ============================================
function initDarkMode() {
    const savedTheme = localStorage.getItem('fafoTheme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateDarkModeIcon(savedTheme);
}

function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('fafoTheme', newTheme);
    updateDarkModeIcon(newTheme);
}

function updateDarkModeIcon(theme) {
    const icons = document.querySelectorAll('.dark-mode-toggle i');
    icons.forEach(icon => {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    });
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================
function showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="toast-icon ${type === 'success' ? 'fas fa-check-circle success' : 'fas fa-exclamation-circle error'}"></i>
        <span class="toast-message">${message}</span>
        <button class="toast-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('hiding');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ============================================
// MOBILE MENU FUNCTIONALITY
// ============================================
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuBtn.contains(e.target) && !mobileNav.contains(e.target)) {
                menuBtn.classList.remove('active');
                mobileNav.classList.remove('active');
            }
        });
        
        // Close menu when clicking a link
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });
    }
}

// ============================================
// DEALS CAROUSEL
// ============================================
let currentDealIndex = 0;
let carouselInterval;

function initDealsCarousel() {
    const track = document.querySelector('.deals-track');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    if (!track) return;
    
    // Render deals
    track.innerHTML = dealsData.map(deal => `
        <div class="deal-card">
            <h3>${deal.title}</h3>
            <p>${deal.description}</p>
            <div class="deal-price">GHS ${deal.price}</div>
            <p style="opacity: 0.7; text-decoration: line-through;">Was GHS ${deal.originalPrice}</p>
        </div>
    `).join('');
    
    // Update dots
    const dotsContainer = document.querySelector('.carousel-dots');
    if (dotsContainer) {
        dotsContainer.innerHTML = dealsData.map((_, i) => `
            <div class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>
        `).join('');
        
        dotsContainer.querySelectorAll('.carousel-dot').forEach(dot => {
            dot.addEventListener('click', () => {
                goToDeal(parseInt(dot.dataset.index));
            });
        });
    }
    
    if (prevBtn) prevBtn.addEventListener('click', () => goToDeal(currentDealIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goToDeal(currentDealIndex + 1));
    
    // Auto-slide
    startCarouselAutoPlay();
}

function goToDeal(index) {
    const track = document.querySelector('.deals-track');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (!track) return;
    
    if (index < 0) index = dealsData.length - 1;
    if (index >= dealsData.length) index = 0;
    
    currentDealIndex = index;
    track.style.transform = `translateX(-${index * 100}%)`;
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    
    // Reset autoplay
    stopCarouselAutoPlay();
    startCarouselAutoPlay();
}

function startCarouselAutoPlay() {
    carouselInterval = setInterval(() => {
        goToDeal(currentDealIndex + 1);
    }, 4000);
}

function stopCarouselAutoPlay() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
    }
}

// ============================================
// RENDER MENU ITEMS
// ============================================
function renderMenuItems(items, container) {
    if (!container) return;
    
    container.innerHTML = items.map(item => `
        <div class="food-card" data-category="${item.category}">
            <div class="food-card-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                ${item.badge ? `<span class="food-card-badge">${item.badge}</span>` : ''}
                <div class="food-card-wishlist">
                    <i class="far fa-heart"></i>
                </div>
            </div>
            <div class="food-card-content">
                <span class="food-card-category">${item.category}</span>
                <h3 class="food-card-title">${item.name}</h3>
                <p class="food-card-desc">${item.description}</p>
                <div class="food-card-footer">
                    <div class="food-card-price">
                        GHS ${item.price}
                        ${item.oldPrice ? `<span>GHS ${item.oldPrice}</span>` : ''}
                    </div>
                    <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ============================================
// CATEGORY FILTER
// ============================================
function initCategoryFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn, .category-card');
    const productsGrid = document.querySelector('.products-grid');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            filterMenuByCategory(category);
        });
    });
}

function filterMenuByCategory(category) {
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid) return;
    
    let filteredItems = menuData;
    if (category && category !== 'All') {
        filteredItems = menuData.filter(item => item.category === category);
    }
    
    renderMenuItems(filteredItems, productsGrid);
}

// ============================================
// SEARCH FUNCTIONALITY
// ============================================
function initSearch() {
    const searchInputs = document.querySelectorAll('.menu-search input, .search-input');
    
    searchInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            searchMenu(query);
        });
    });
}

function searchMenu(query) {
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid) return;
    
    let filteredItems = menuData;
    if (query) {
        filteredItems = menuData.filter(item => 
            item.name.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
        );
    }
    
    renderMenuItems(filteredItems, productsGrid);
}

// ============================================
// RENDER CART PAGE
// ============================================
function renderCart() {
    const cartItemsContainer = document.querySelector('.cart-items-list');
    const cartSummary = document.querySelector('.cart-summary');
    const emptyCart = document.querySelector('.empty-cart');
    const cartContent = document.querySelector('.cart-content');
    
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        if (emptyCart) emptyCart.style.display = 'block';
        if (cartContent) cartContent.style.display = 'none';
        return;
    }
    
    if (emptyCart) emptyCart.style.display = 'none';
    if (cartContent) cartContent.style.display = 'grid';
    
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>${item.category}</p>
                <div class="cart-item-price">GHS ${item.price}</div>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i> Remove
                </button>
            </div>
        </div>
    `).join('');
    
    // Update summary
    const subtotal = getCartTotal();
    const deliveryFee = subtotal > 100 ? 0 : 15;
    const total = subtotal + deliveryFee;
    
    const subtotalEl = document.querySelector('.summary-subtotal');
    const deliveryEl = document.querySelector('.summary-delivery');
    const totalEl = document.querySelector('.summary-total');
    
    if (subtotalEl) subtotalEl.textContent = `GHS ${subtotal.toFixed(2)}`;
    if (deliveryEl) deliveryEl.textContent = deliveryFee === 0 ? 'FREE' : `GHS ${deliveryFee.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `GHS ${total.toFixed(2)}`;
}

// ============================================
// RENDER CHECKOUT PAGE
// ============================================
function renderCheckout() {
    const orderItemsContainer = document.querySelector('.order-items');
    if (!orderItemsContainer) return;
    
    orderItemsContainer.innerHTML = cart.map(item => `
        <div class="order-item">
            <div class="order-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="order-item-details">
                <h4>${item.name}</h4>
                <p>Qty: ${item.quantity}</p>
            </div>
            <div class="order-item-price">GHS ${(item.price * item.quantity).toFixed(2)}</div>
        </div>
    `).join('');
    
    // Update summary
    const subtotal = getCartTotal();
    const deliveryFee = subtotal > 100 ? 0 : 15;
    const total = subtotal + deliveryFee;
    
    const subtotalEl = document.querySelector('.checkout-subtotal');
    const deliveryEl = document.querySelector('.checkout-delivery');
    const totalEl = document.querySelector('.checkout-total');
    
    if (subtotalEl) subtotalEl.textContent = `GHS ${subtotal.toFixed(2)}`;
    if (deliveryEl) deliveryEl.textContent = deliveryFee === 0 ? 'FREE' : `GHS ${deliveryFee.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `GHS ${total.toFixed(2)}`;
    
    // Populate cities dropdown
    const citySelect = document.querySelector('select[name="city"]');
    if (citySelect) {
        citySelect.innerHTML = '<option value="">Select City</option>' +
            ghanaCities.map(city => `<option value="${city}">${city}</option>`).join('');
    }
}

// ============================================
// FORM VALIDATION
// ============================================
function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        const errorMsg = field.parentElement.querySelector('.error-message');
        if (errorMsg) errorMsg.remove();
        
        field.classList.remove('error');
        
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
            const error = document.createElement('span');
            error.className = 'error-message';
            error.textContent = 'This field is required';
            error.style.color = '#DC2626';
            error.style.fontSize = '0.75rem';
            field.parentElement.appendChild(error);
        }
        
        // Email validation
        if (field.type === 'email' && field.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                isValid = false;
                field.classList.add('error');
                const error = document.createElement('span');
                error.className = 'error-message';
                error.textContent = 'Please enter a valid email';
                error.style.color = '#DC2626';
                error.style.fontSize = '0.75rem';
                field.parentElement.appendChild(error);
            }
        }
        
        // Phone validation
        if (field.type === 'tel' && field.value) {
            const phoneRegex = /^[\d\s+()-]{10,}$/;
            if (!phoneRegex.test(field.value)) {
                isValid = false;
                field.classList.add('error');
            }
        }
    });
    
    return isValid;
}

// ============================================
// CHECKOUT FORM SUBMISSION
// ============================================
function initCheckoutForm() {
    const form = document.querySelector('.checkout-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (!validateForm(form)) {
            showToast('Please fill in all required fields', 'error');
            return;
        }
        
        if (cart.length === 0) {
            showToast('Your cart is empty', 'error');
            return;
        }
        
        // Generate order ID
        const orderId = 'FAFO-' + Date.now().toString(36).toUpperCase();
        
        // Show success modal
        showOrderConfirmation(orderId);
        
        // Clear cart
        clearCart();
    });
    
    // Payment method selection
    const paymentMethods = document.querySelectorAll('.payment-method');
    paymentMethods.forEach(method => {
        method.addEventListener('click', () => {
            paymentMethods.forEach(m => m.classList.remove('selected'));
            method.classList.add('selected');
            method.querySelector('input').checked = true;
        });
    });
}

function showOrderConfirmation(orderId) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal">
            <div class="modal-icon">
                <i class="fas fa-check"></i>
            </div>
            <h2>Order Confirmed!</h2>
            <p>Thank you for your order. We're preparing your delicious food!</p>
            <div class="modal-order-id">
                Order ID: <span>${orderId}</span>
            </div>
            <a href="tracking.html?order=${orderId}" class="btn btn-primary">Track Order</a>
            <a href="index.html" class="btn btn-secondary" style="margin-top: 0.5rem;">Back to Home</a>
        </div>
    `;
    document.body.appendChild(modal);
    
    setTimeout(() => modal.classList.add('active'), 10);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        }
    });
}

// ============================================
// NEWSLETTER FORM
// ============================================
function initNewsletterForm() {
    const form = document.querySelector('.newsletter-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        
        if (!email) {
            showToast('Please enter your email', 'error');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showToast('Please enter a valid email', 'error');
            return;
        }
        
        showToast('Thank you for subscribing!', 'success');
        form.reset();
    });
}

// ============================================
// CONTACT FORM
// ============================================
function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (!validateForm(form)) {
            showToast('Please fill in all required fields', 'error');
            return;
        }
        
        showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
        form.reset();
    });
}

// ============================================
// AUTH FORMS
// ============================================
function initAuthForms() {
    const loginForm = document.querySelector('.login-form');
    const signupForm = document.querySelector('.signup-form');
    const forgotForm = document.querySelector('.forgot-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!validateForm(loginForm)) return;
            
            // Simulate login
            const email = loginForm.querySelector('input[type="email"]').value;
            localStorage.setItem('fafoUser', JSON.stringify({ email, name: 'User' }));
            showToast('Login successful!', 'success');
            setTimeout(() => window.location.href = 'account.html', 1000);
        });
    }
    
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!validateForm(signupForm)) return;
            
            const password = signupForm.querySelector('input[name="password"]').value;
            const confirmPassword = signupForm.querySelector('input[name="confirmPassword"]').value;
            
            if (password !== confirmPassword) {
                showToast('Passwords do not match', 'error');
                return;
            }
            
            showToast('Account created successfully!', 'success');
            setTimeout(() => window.location.href = 'login.html', 1000);
        });
    }
    
    if (forgotForm) {
        forgotForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!validateForm(forgotForm)) return;
            
            showToast('Password reset link sent to your email!', 'success');
            forgotForm.reset();
        });
    }
}

// ============================================
// ACCOUNT PAGE
// ============================================
function initAccountPage() {
    const menuLinks = document.querySelectorAll('.account-menu a');
    const sections = document.querySelectorAll('.account-section');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.dataset.section;
            
            menuLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            sections.forEach(section => {
                section.classList.toggle('active', section.id === targetSection);
            });
        });
    });
    
    // Check if user is logged in
    const user = JSON.parse(localStorage.getItem('fafoUser'));
    if (!user) {
        window.location.href = 'login.html';
        return;
    }
    
    // Update user info
    const userNameEl = document.querySelector('.account-user h3');
    const userEmailEl = document.querySelector('.account-user p');
    const avatarEl = document.querySelector('.account-avatar');
    
    if (userNameEl) userNameEl.textContent = user.name || 'User';
    if (userEmailEl) userEmailEl.textContent = user.email;
    if (avatarEl) avatarEl.textContent = (user.name || 'U').charAt(0).toUpperCase();
}

// ============================================
// ORDER TRACKING
// ============================================
function initOrderTracking() {
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get('order');
    
    if (orderId) {
        const orderIdEl = document.querySelector('.tracking-id');
        if (orderIdEl) orderIdEl.textContent = orderId;
        
        // Simulate order status (random step)
        const step = Math.floor(Math.random() * 4) + 1;
        const timeline = document.querySelector('.tracking-timeline');
        if (timeline) {
            timeline.className = `tracking-timeline step-${step}`;
            
            const steps = timeline.querySelectorAll('.tracking-step');
            steps.forEach((s, i) => {
                if (i < step) {
                    s.classList.add('completed');
                } else if (i === step - 1) {
                    s.classList.add('current');
                }
            });
        }
    }
    
    // Track order form
    const trackForm = document.querySelector('.track-order-form');
    if (trackForm) {
        trackForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = trackForm.querySelector('input');
            if (input.value) {
                window.location.href = `tracking.html?order=${input.value}`;
            }
        });
    }
}

// ============================================
// REVIEWS PAGE
// ============================================
function renderReviews() {
    const reviewsGrid = document.querySelector('.reviews-grid');
    if (!reviewsGrid) return;
    
    reviewsGrid.innerHTML = reviewsData.map(review => `
        <div class="review-card">
            <div class="review-header">
                <div class="review-user">
                    <div class="review-avatar">${review.avatar}</div>
                    <div class="review-user-info">
                        <h4>${review.name}</h4>
                        <p>${review.date}</p>
                    </div>
                </div>
                <div class="review-rating">
                    ${'<i class="fas fa-star"></i>'.repeat(review.rating)}
                    ${'<i class="far fa-star"></i>'.repeat(5 - review.rating)}
                </div>
            </div>
            <p class="review-content">${review.comment}</p>
        </div>
    `).join('');
}

function initReviewForm() {
    const starInputs = document.querySelectorAll('.star-rating-input i');
    let selectedRating = 0;
    
    starInputs.forEach((star, index) => {
        star.addEventListener('click', () => {
            selectedRating = index + 1;
            starInputs.forEach((s, i) => {
                s.classList.toggle('active', i < selectedRating);
                s.classList.toggle('fas', i < selectedRating);
                s.classList.toggle('far', i >= selectedRating);
            });
        });
        
        star.addEventListener('mouseenter', () => {
            starInputs.forEach((s, i) => {
                s.classList.toggle('fas', i <= index);
                s.classList.toggle('far', i > index);
            });
        });
        
        star.addEventListener('mouseleave', () => {
            starInputs.forEach((s, i) => {
                s.classList.toggle('fas', i < selectedRating);
                s.classList.toggle('far', i >= selectedRating);
            });
        });
    });
    
    const reviewForm = document.querySelector('.review-form form');
    if (reviewForm) {
        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (selectedRating === 0) {
                showToast('Please select a rating', 'error');
                return;
            }
            
            if (!validateForm(reviewForm)) return;
            
            showToast('Thank you for your review!', 'success');
            reviewForm.reset();
            selectedRating = 0;
            starInputs.forEach(s => {
                s.classList.remove('active', 'fas');
                s.classList.add('far');
            });
        });
    }
}

// ============================================
// BLOG FUNCTIONALITY
// ============================================
function renderBlogPosts(container, limit = null) {
    if (!container) return;
    
    const posts = limit ? blogData.slice(0, limit) : blogData;
    
    container.innerHTML = posts.map(post => `
        <article class="blog-card">
            <div class="blog-card-image">
                <img src="${post.image}" alt="${post.title}" loading="lazy">
            </div>
            <div class="blog-card-content">
                <div class="blog-card-meta">
                    <span><i class="far fa-calendar"></i> ${post.date}</span>
                    <span><i class="far fa-folder"></i> ${post.category}</span>
                </div>
                <h3 class="blog-card-title">${post.title}</h3>
                <p class="blog-card-excerpt">${post.excerpt}</p>
                <a href="blog-post.html?id=${post.id}" class="blog-card-link">
                    Read More <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </article>
    `).join('');
}

function initBlogSearch() {
    const searchInput = document.querySelector('.blog-search input');
    const categoryBtns = document.querySelectorAll('.blog-category-btn');
    const blogGrid = document.querySelector('.blog-grid');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            filterBlogPosts(query, null);
        });
    }
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            filterBlogPosts(null, category);
        });
    });
}

function filterBlogPosts(query, category) {
    const blogGrid = document.querySelector('.blog-grid');
    if (!blogGrid) return;
    
    let filtered = blogData;
    
    if (query) {
        filtered = filtered.filter(post => 
            post.title.toLowerCase().includes(query) ||
            post.excerpt.toLowerCase().includes(query) ||
            post.category.toLowerCase().includes(query)
        );
    }
    
    if (category && category !== 'All') {
        filtered = filtered.filter(post => post.category === category);
    }
    
    renderBlogPosts(blogGrid);
    blogGrid.innerHTML = filtered.map(post => `
        <article class="blog-card">
            <div class="blog-card-image">
                <img src="${post.image}" alt="${post.title}" loading="lazy">
            </div>
            <div class="blog-card-content">
                <div class="blog-card-meta">
                    <span><i class="far fa-calendar"></i> ${post.date}</span>
                    <span><i class="far fa-folder"></i> ${post.category}</span>
                </div>
                <h3 class="blog-card-title">${post.title}</h3>
                <p class="blog-card-excerpt">${post.excerpt}</p>
                <a href="blog-post.html?id=${post.id}" class="blog-card-link">
                    Read More <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </article>
    `).join('');
}

function renderBlogPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id')) || 1;
    
    const post = blogData.find(p => p.id === postId) || blogData[0];
    
    const titleEl = document.querySelector('.blog-post-title');
    const dateEl = document.querySelector('.blog-post-date');
    const categoryEl = document.querySelector('.blog-post-category');
    const authorEl = document.querySelector('.blog-post-author-name');
    const imageEl = document.querySelector('.blog-post-image img');
    
    if (titleEl) titleEl.textContent = post.title;
    if (dateEl) dateEl.textContent = post.date;
    if (categoryEl) categoryEl.textContent = post.category;
    if (authorEl) authorEl.textContent = post.author;
    if (imageEl) imageEl.src = post.image;
    
    // Render related posts
    const relatedGrid = document.querySelector('.related-posts .blog-grid');
    if (relatedGrid) {
        const relatedPosts = blogData.filter(p => p.id !== postId).slice(0, 3);
        renderBlogPosts(relatedGrid);
    }
}

// ============================================
// POPULAR ITEMS (Homepage)
// ============================================
function renderPopularItems() {
    const container = document.querySelector('.popular-items-grid');
    if (!container) return;
    
    const popularItems = menuData.filter(item => 
        item.badge === 'Popular' || item.badge === 'Best Seller'
    ).slice(0, 8);
    
    renderMenuItems(popularItems, container);
}

// ============================================
// CATEGORIES SECTION (Homepage)
// ============================================
function initCategories() {
    const categories = [
        { name: 'Burgers', icon: '🍔' },
        { name: 'Pizza', icon: '🍕' },
        { name: 'Sandwiches', icon: '🥪' },
        { name: 'Shakes', icon: '🥤' },
        { name: 'Ice Cream', icon: '🍦' },
        { name: 'Desserts', icon: '🍰' },
        { name: 'Pastries', icon: '🥐' },
        { name: 'Cakes', icon: '🎂' }
    ];
    
    const container = document.querySelector('.categories-grid');
    if (!container) return;
    
    container.innerHTML = categories.map(cat => `
        <div class="category-card" data-category="${cat.name}">
            <div class="category-icon">${cat.icon}</div>
            <h4>${cat.name}</h4>
        </div>
    `).join('');
    
    // Add click handlers
    container.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            window.location.href = `menu.html?category=${card.dataset.category}`;
        });
    });
}

// ============================================
// INITIALIZE PAGE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Core functionality
    initDarkMode();
    updateCartCount();
    initMobileMenu();
    initNewsletterForm();
    
    // Page-specific initialization
    const page = document.body.dataset.page;
    
    switch(page) {
        case 'home':
            initDealsCarousel();
            initCategories();
            renderPopularItems();
            renderBlogPosts(document.querySelector('.blog-preview-grid'), 3);
            break;
            
        case 'menu':
            // Check for category in URL
            const urlParams = new URLSearchParams(window.location.search);
            const category = urlParams.get('category');
            
            if (category) {
                filterMenuByCategory(category);
                // Update active filter button
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.toggle('active', btn.dataset.category === category);
                });
            } else {
                renderMenuItems(menuData, document.querySelector('.products-grid'));
            }
            
            initCategoryFilter();
            initSearch();
            break;
            
        case 'cart':
            renderCart();
            break;
            
        case 'checkout':
            renderCheckout();
            initCheckoutForm();
            break;
            
        case 'account':
            initAccountPage();
            break;
            
        case 'tracking':
            initOrderTracking();
            break;
            
        case 'reviews':
            renderReviews();
            initReviewForm();
            break;
            
        case 'blog':
            renderBlogPosts(document.querySelector('.blog-grid'));
            initBlogSearch();
            break;
            
        case 'blog-post':
            renderBlogPost();
            break;
            
        case 'contact':
            initContactForm();
            break;
            
        case 'login':
        case 'signup':
        case 'forgot-password':
            initAuthForms();
            break;
    }
});

// ============================================
// LOGOUT FUNCTION
// ============================================
function logout() {
    localStorage.removeItem('fafoUser');
    showToast('Logged out successfully', 'success');
    setTimeout(() => window.location.href = 'login.html', 1000);
}

// Make functions globally available
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.toggleDarkMode = toggleDarkMode;
window.logout = logout;
