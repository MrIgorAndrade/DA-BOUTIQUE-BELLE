// Product data
const products = [
    {
        id: 1,
        name: 'Roza Amazônica',
        description: 'Suplemento natural de beleza para o bem-estar dos cabelos e da pele.',
        categories: ['skincare'],
        image: 'https://i.ibb.co/4wQ2PLcZ/rosa-amazonica.jpg',
        checkoutUrl: 'https://ev.braip.com/ref?pv=proeo8oe&af=afijpxl883',
        whatsappUrl: 'https://wa.me/5534998965230?text=Olá%21+Gostaria+de+saber+mais+sobre+o+Rosa+Amazônica'
    },
    {
        id: 2,
        name: 'Rosa Xantina',
        description: 'Fórmula revitalizante para a pele com propriedades antioxidantes.',
        categories: ['skincare', 'haircare', 'supplements'],
        image: 'https://i.ibb.co/Nd9jnb7Y/rosa-xantina.jpg',
        checkoutUrl: 'https://ev.braip.com/ref?pv=pro9y44w&af=afi8jmg66g',
        whatsappUrl: 'https://wa.me/5534998965230?text=Olá%21+Gostaria+de+saber+mais+sobre+o+Rosa+Xantina'
    },
    {
        id: 3,
        name: 'Kit S.O.S',
        description: 'Kit completo de cuidados para recuperação e hidratação da pele.',
        categories: ['haircare'],
        image: 'https://i.ibb.co/Cp5Dv7sm/kit-sos.jpg',
        checkoutUrl: 'https://app.monetizze.com.br/r/ARU25256290',
        whatsappUrl: 'https://wa.me/5534998965230?text=Olá%21+Gostaria+de+saber+mais+sobre+o+KIT+SOS'
    },
    {
        id: 4,
        name: 'BB4U',
        description: 'Blend de beleza para energia, foco e brilho exterior.',
        categories: ['supplements', 'skincare', 'haircare'],
        image: 'https://i.ibb.co/v6fTxLbT/bb4u.jpg',
        checkoutUrl: 'https://pv.b4you.com.br/pages/97e22b30-02ed-417f-bc43-5c0d81a45370/4dEPHbx8Ab',
        whatsappUrl: 'https://wa.me/5534998965230?text=Olá%21+Gostaria+de+saber+mais+sobre+o+BB4U'
    },
    {
        id: 5,
        name: 'Hidraliso',
        description: 'Tratamento profissional de alisamento capilar com efeito nutritivo.',
        categories: ['haircare'],
        image: 'https://i.ibb.co/qFghTHTy/hidraliso.jpg',
        checkoutUrl: 'https://ev.braip.com/ref?pv=proyyn2e&af=afivpe8mmq',
        whatsappUrl: 'https://wa.me/5534998965230?text=Olá%21+Gostaria+de+saber+mais+sobre+o+Hidraliso'
    },
    {
        id: 6,
        name: 'Harmony Hair',
        description: 'Fórmula avançada para a saúde capilar que reduz a queda e promove o crescimento.',
        categories: ['haircare', 'skincare', 'supplements'],
        image: 'https://i.ibb.co/XrjKSjQ5/harmony-hair.jpg',
        checkoutUrl: 'https://ev.braip.com/ref?pv=prol9enx&af=afizjy6vvg',
        whatsappUrl: 'https://wa.me/5534998965230?text=Olá%21+Gostaria+de+saber+mais+sobre+o+Harmony+Hair'
    },
    {
        id: 7,
        name: 'Brain Hacker',
        description: 'Suplemento para melhora cognitiva com ingredientes naturais.',
        categories: ['supplements'],
        image: 'https://i.ibb.co/wh4SL8DK/brain-hacker.jpg',
        checkoutUrl: 'https://pv.b4you.com.br/pages/qfxlVb_02mWCCwuO7c4yV/eIHBsTFV1o',
        whatsappUrl: 'https://wa.me/5534998965230?text=Olá%21+Gostaria+de+saber+mais+sobre+o+Brain+Hacker'
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
        : products.filter(product => product.categories.includes(currentFilter));

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
            <div class="space-y-3">
                <button
                    onclick="buyNow('${product.checkoutUrl}')"
                    class="w-full px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                    Comprar Agora
                </button>
                <button
                    onclick="whatsappContact('${product.whatsappUrl}')"
                    class="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                    </svg>
                    WhatsApp
                </button>
            </div>
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

// Handle WhatsApp button clicks
function whatsappContact(whatsappUrl) {
    // Add click animation
    const button = event.target;
    button.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        button.style.transform = '';
        // Open WhatsApp URL in new tab
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 150);
}
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