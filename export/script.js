// Product data
const products = [
    {
        id: 1,
        name: 'Roza Amazônica',
        description: 'Suplemento natural de beleza para o bem-estar dos cabelos e da pele.',
        category: 'supplements',
        image: 'https://i.ibb.co/4wQ2PLcZ/rosa-amazonica.jpg',
        checkoutUrl: 'https://ev.braip.com/ref?pv=proeo8oe&af=afijpxl883'
    },
    {
        id: 2,
        name: 'Rosa Xantina',
        description: 'Fórmula revitalizante para a pele com propriedades antioxidantes.',
        category: 'skincare',
        image: 'https://i.ibb.co/Nd9jnb7Y/rosa-xantina.jpg',
        checkoutUrl: 'https://ev.braip.com/ref?pv=pro9y44w&af=afi8jmg66g'
    },
    {
        id: 3,
        name: 'Kit S.O.S',
        description: 'Kit completo de cuidados para recuperação e hidratação da pele.',
        category: 'skincare',
        image: 'https://i.ibb.co/Cp5Dv7sm/kit-sos.jpg',
        checkoutUrl: 'https://app.monetizze.com.br/r/ARU25256290'
    },
    {
        id: 4,
        name: 'BB4U',
        description: 'Blend de beleza para energia, foco e brilho exterior.',
        category: 'supplements',
        image: 'https://i.ibb.co/v6fTxLbT/bb4u.jpg',
        checkoutUrl: 'https://pv.b4you.com.br/pages/97e22b30-02ed-417f-bc43-5c0d81a45370/4dEPHbx8Ab'
    },
    {
        id: 5,
        name: 'Hidraliso',
        description: 'Tratamento profissional de alisamento capilar com efeito nutritivo.',
        category: 'haircare',
        image: 'https://i.ibb.co/qFghTHTy/hidraliso.jpg',
        checkoutUrl: 'https://ev.braip.com/ref?pv=proyyn2e&af=afivpe8mmq'
    },
    {
        id: 6,
        name: 'Harmony Hair',
        description: 'Fórmula avançada para a saúde capilar que reduz a queda e promove o crescimento.',
        category: 'haircare',
        image: 'https://i.ibb.co/XrjKSjQ5/harmony-hair.jpg',
        checkoutUrl: 'https://ev.braip.com/ref?pv=prol9enx&af=afizjy6vvg'
    },
    {
        id: 7,
        name: 'Brain Hacker',
        description: 'Suplemento para melhora cognitiva com ingredientes naturais.',
        category: 'supplements',
        image: 'https://i.ibb.co/wh4SL8DK/brain-hacker.jpg',
        checkoutUrl: 'https://pv.b4you.com.br/pages/qfxlVb_02mWCCwuO7c4yV/eIHBsTFV1o'
    }
];

// Current filter
let currentFilter = 'all';

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const categoryButtons = document.querySelectorAll('.category-btn');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    setupEventListeners();
    setupMobileMenu();
    setupSmoothScrolling();
});

// Render products based on current filter
function renderProducts() {
    const filteredProducts = currentFilter === 'all' 
        ? products 
        : products.filter(product => product.category === currentFilter);

    productsGrid.innerHTML = '';

    filteredProducts.forEach((product, index) => {
        const productCard = createProductCard(product, index);
        productsGrid.appendChild(productCard);
    });
}

// Create product card element
function createProductCard(product, index) {
    const productDiv = document.createElement('div');
    productDiv.className = `product-item visible fade-in group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden product-card-hover`;
    productDiv.style.animationDelay = `${index * 0.1}s`;
    
    productDiv.innerHTML = `
        <div class="relative overflow-hidden">
            <img
                src="${product.image}"
                alt="${product.name}"
                class="w-full h-64 object-contain object-center group-hover:scale-105 transition-transform duration-300 bg-gray-50"
                loading="lazy"
                onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDQwMCAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjU2IiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjE1MCIgeT0iOTYiIHdpZHRoPSIxMDAiIGhlaWdodD0iNjQiIHJ4PSI4IiBmaWxsPSIjRTVFN0VCIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTM2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTdBM0I0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9IjUwMCI+SW1hZ2VtPC90ZXh0Pgo8L3N2Zz4='"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div class="p-6">
            <h4 class="text-xl font-bold text-gray-900 mb-2">${product.name}</h4>
            <p class="text-gray-600 mb-6 leading-relaxed">${product.description}</p>
            <button
                onclick="buyNow('${product.checkoutUrl}')"
                class="w-full px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 btn-primary"
            >
                Comprar Agora
            </button>
        </div>
    `;
    
    return productDiv;
}

// Filter products by category
function filterProducts(category) {
    currentFilter = category;
    
    // Update active button
    categoryButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    // Animate product filtering
    const productItems = document.querySelectorAll('.product-item');
    
    // Hide all products first
    productItems.forEach(item => {
        item.classList.add('hidden');
        item.classList.remove('visible');
    });
    
    // Re-render after a short delay for smooth animation
    setTimeout(() => {
        renderProducts();
    }, 300);
}

// Handle buy now button clicks
function buyNow(checkoutUrl) {
    // Add click animation
    const button = event.target;
    button.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        button.style.transform = '';
        // Open checkout URL in new tab
        window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
    }, 150);
}

// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Setup event listeners
function setupEventListeners() {
    // Category filter buttons
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            filterProducts(category);
        });
    });
    
    // Navigation links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
    
    // Add scroll effect to header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('backdrop-blur-lg');
        } else {
            header.classList.remove('backdrop-blur-lg');
        }
    });
}

// Setup mobile menu
function setupMobileMenu() {
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking on links
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
}

// Setup smooth scrolling
function setupSmoothScrolling() {
    // Ensure smooth scrolling is enabled
    document.documentElement.style.scrollBehavior = 'smooth';
}

// Image lazy loading fallback for older browsers
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.remove('image-placeholder');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            img.classList.add('image-placeholder');
            imageObserver.observe(img);
        });
    }
}

// Call lazy loading on page load
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Analytics and tracking (optional)
function trackEvent(eventName, eventData = {}) {
    // Add your analytics tracking code here
    console.log('Event tracked:', eventName, eventData);
    
    // Example for Google Analytics (uncomment if you use GA)
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', eventName, eventData);
    // }
}

// Track product views and clicks
function trackProductClick(productName, productUrl) {
    trackEvent('product_click', {
        product_name: productName,
        product_url: productUrl
    });
}

// Performance optimization: Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Error handling for images
function handleImageError(img) {
    img.onerror = null; // Prevent infinite loop
    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDQwMCAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjU2IiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjE1MCIgeT0iOTYiIHdpZHRoPSIxMDAiIGhlaWdodD0iNjQiIHJ4PSI4IiBmaWxsPSIjRTVFN0VCIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTM2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTdBM0I0IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9IjUwMCI+SW1hZ2VtPC90ZXh0Pgo8L3N2Zz4=';
}

// Console welcome message
console.log('%c🌹 Belle Boutique - Produtos de Beleza Premium', 'color: #f43f5e; font-size: 16px; font-weight: bold;');
console.log('Website carregado com sucesso! ✨');