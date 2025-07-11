// Carrossel de Imagens
const carouselImages = [
    { src: 'https://i.ibb.co/CK1FRF4N/11.png', alt: 'Produto de Beleza 1' },
    { src: 'https://i.ibb.co/JFKtNrY8/22.png', alt: 'Produto de Beleza 2' },
    { src: 'https://i.ibb.co/rfLw6X9B/33.png', alt: 'Produto de Beleza 3' },
    { src: 'https://i.ibb.co/svwbDvSM/44.png', alt: 'Produto de Beleza 4' },
    { src: 'https://i.ibb.co/VcHBPC8D/55.png', alt: 'Produto de Beleza 5' },
    { src: 'https://i.ibb.co/4Cj2JPV/66.png', alt: 'Produto de Beleza 6' },
    { src: 'https://i.ibb.co/pjYBgzZd/77.png', alt: 'Produto de Beleza 7' },
    { src: 'https://i.ibb.co/4ZKcxcz0/88.png', alt: 'Produto de Beleza 8' }
];

let currentSlide = 0;
let autoplayInterval;
let isAutoplayPaused = false;

// Product data
const products = [
    {
        id: 1,
        name: 'Roza Amazônica',
        description: 'Suplemento natural de beleza para o bem-estar dos cabelos e da pele.',
        categories: ['skincare'],
        image: 'https://i.ibb.co/h0yr6Zy/ROZA-AMAZONICA.png',
        buttons: [
            { url: 'https://ev.braip.com/ref?pl=plamoxem&ck=chezlmgr&af=afijpxl883', text: '1 Frascos + 1 Grátis R$ 197,00', color: 'from-rose-500 to-pink-600' },
            { url: 'https://ev.braip.com/ref?pl=playxgyo&ck=chezlmgr&af=afijpxl883', text: '3 Frascos + 1 Grátis R$ 297,00', color: 'from-rose-500 to-pink-600' },
            { url: 'https://ev.braip.com/ref?pl=plax2qpn&ck=chezlmgr&af=afijpxl883', text: '5 Frascos + 1 Grátis R$ 397,00', color: 'from-rose-500 to-pink-600' }
        ],
        whatsappUrl: 'https://wa.me/5534998965230?text=Olá%21+Gostaria+de+saber+mais+sobre+o+Rosa+Amazônica'
    },
    {
        id: 2,
        name: 'Rosa Xantina',
        description: 'Fórmula revitalizante para a pele com propriedades antioxidantes.',
        categories: ['skincare', 'haircare', 'supplements'],
        image: 'https://i.ibb.co/TxpwbLwS/ROSA-XANTINA.png',
        buttons: [
            { url: 'https://ev.braip.com/ref?pl=plaj002g&ck=che1wmnj&af=afi8jmg66g', text: '1 Pote + 1 Grátis R$ 197,00', color: 'from-pink-500 to-rose-600' },
            { url: 'https://ev.braip.com/ref?pl=plan0010&ck=che1wmnj&af=afi8jmg66g', text: '3 Pote + 1 Grátis R$ 297,00', color: 'from-pink-500 to-rose-600' },
            { url: 'https://ev.braip.com/ref?pl=plawddjn&ck=che1wmnj&af=afi8jmg66g', text: '5 Pote + 1 Grátis R$ 397,00', color: 'from-pink-500 to-rose-600' }
        ],
        whatsappUrl: 'https://wa.me/5534998965230?text=Olá%21+Gostaria+de+saber+mais+sobre+o+Rosa+Xantina'
    },
    {
        id: 3,
        name: 'BB4U',
        description: 'Blend de beleza para energia, foco e brilho exterior.',
        categories: ['supplements', 'skincare', 'haircare'],
        image: 'https://i.ibb.co/4wf0QPQs/BB4U-PNG.png',
        buttons: [
            { url: 'https://pv.b4you.com.br/api/product/c/0k-w9Kx9Px/4dEPHbx8Ab', text: '1 Vitamina BB4U R$ 189,90', color: 'from-purple-500 to-indigo-600' },
            { url: 'https://pv.b4you.com.br/api/product/c/7TNyQwdDxw/4dEPHbx8Ab', text: '2 Vitaminas +1 Condicionador +1 Shampoo R$ 299,90', color: 'from-purple-500 to-indigo-600' },
            { url: 'https://pv.b4you.com.br/api/product/c/721p69gquM/4dEPHbx8Ab', text: '3 Vitaminas +Kit 3 Máscaras -Nutrição Reconstrução, Hidratação R$ 399,90', color: 'from-purple-500 to-indigo-600' },
            { url: 'https://pv.b4you.com.br/api/product/c/Bh-UNR_pY_/4dEPHbx8Ab', text: '3 Vitaminas +Kit Shampoo + Condicionador +Kit 3 Mascaras +1 Stick +1 Finalizador R$ 599,90', color: 'from-purple-500 to-indigo-600' }
        ],
        whatsappUrl: 'https://wa.me/5534998965230?text=Olá%21+Gostaria+de+saber+mais+sobre+o+BB4U'
    },
    {
        id: 4,
        name: 'Kit S.O.S',
        description: 'Kit completo de cuidados para recuperação e hidratação da pele.',
        categories: ['haircare'],
        image: 'https://i.ibb.co/99SQwYXM/KIT-SOS-PNG.png',
        buttons: [
            { url: 'https://app.monetizze.com.br/r/ARU25256290?u=c&pl=LB274419', text: '3 Tônico, 2 Máscara, 2 Shampoo, 1 Óleo de Argan, 1 Condicionador 2em1 R$ 299,00', color: 'from-amber-500 to-yellow-600' },
            { url: 'https://app.monetizze.com.br/r/ARU25256290?u=c&pl=JE132223', text: '1 Kit SOS Crescimento R$ 179,00', color: 'from-amber-500 to-yellow-600' },
            { url: 'https://app.monetizze.com.br/r/ARU25256290?u=c&pl=SB219235', text: '1 Tônico SOS Crescimento R$ 59,99', color: 'from-amber-500 to-yellow-600' },
            { url: 'https://app.monetizze.com.br/r/ARU25256290?u=c&pl=EC279015', text: '1 Condicionador Crescimento R$ 59,99', color: 'from-amber-500 to-yellow-600' },
            { url: 'https://app.monetizze.com.br/r/ARU25256290?u=c&pl=ZW326037', text: '1 Shampoo SOS Crescimento R$ 59,99', color: 'from-amber-500 to-yellow-600' },
            { url: 'https://app.monetizze.com.br/r/ARU25256290?u=c&pl=CN326040', text: '1 Máscara SOS Crescimento R$ 59,99', color: 'from-amber-500 to-yellow-600' }
        ],
        whatsappUrl: 'https://wa.me/5534998965230?text=Olá%21+Gostaria+de+saber+mais+sobre+o+KIT+SOS'
    },
    {
        id: 5,
        name: 'Hidraliso',
        description: 'Tratamento profissional de alisamento capilar com efeito nutritivo.',
        categories: ['haircare'],
        image: 'https://i.ibb.co/PsBwfvgv/HIDRALISO.png',
        buttons: [
            { url: 'https://ev.braip.com/ref?pl=plaerpgw&ck=chev95og&af=afivpe8mmq', text: '1 Hidraliso +1 Shampoo +1 Termo R$ 168,44', color: 'from-emerald-500 to-teal-600' },
            { url: 'https://ev.braip.com/ref?pl=planlvk0&ck=chev95og&af=afivpe8mmq', text: '2 Hidraliso +1 Shampoo +1 Termo R$ 211,19', color: 'from-emerald-500 to-teal-600' },
            { url: 'https://ev.braip.com/ref?pl=plaov1k2&ck=chev95og&af=afivpe8mmq', text: '3 Hidraliso +2 Shampoo +2 Termo R$ 296,69', color: 'from-emerald-500 to-teal-600' }
        ],
        whatsappUrl: 'https://wa.me/5534998965230?text=Olá%21+Gostaria+de+saber+mais+sobre+o+Hidraliso'
    },
    {
        id: 6,
        name: 'Harmony Hair',
        description: 'Fórmula avançada para a saúde capilar que reduz a queda e promove o crescimento.',
        categories: ['haircare', 'skincare', 'supplements'],
        image: 'https://i.ibb.co/p6tBVsFM/HARMONY-HAIR.png',
        buttons: [
            { url: 'https://ev.braip.com/ref?pl=pla7vo9n&ck=che2z0mp&af=afizjy6vvg', text: '1 Frascos + 1 Grátis R$ 197,00', color: 'from-fuchsia-600 to-pink-500' },
            { url: 'https://ev.braip.com/ref?pl=pla51qn2&ck=che2z0mp&af=afizjy6vvg', text: '2 Frascos + 2 Grátis R$ 297,00', color: 'from-fuchsia-600 to-pink-500' },
            { url: 'https://ev.braip.com/ref?pl=pla3dvx4&ck=che2z0mp&af=afizjy6vvg', text: '3 Frascos + 3 Grátis R$ 397,00', color: 'from-fuchsia-600 to-pink-500' }
        ],
        whatsappUrl: 'https://wa.me/5534998965230?text=Olá%21+Gostaria+de+saber+mais+sobre+o+Harmony+Hair'
    },
    {
        id: 7,
        name: 'Brain Hacker',
        description: 'Suplemento para melhora cognitiva com ingredientes naturais.',
        categories: ['supplements'],
        image: 'https://i.ibb.co/cKnGD8CC/BRAIN-HACKER-PNG.png',
        buttons: [
            { url: 'https://pv.b4you.com.br/api/product/c/UiHrvk5ZIm/eIHBsTFV1o', text: 'BrainHacker + 1Mind + 1Focus R$157,90', color: 'from-cyan-600 to-blue-700' }
        ],
        whatsappUrl: 'https://wa.me/5534998965230?text=Olá%21+Gostaria+de+saber+mais+sobre+o+Brain+Hacker'
    },
    {
        id: 8,
        name: 'Cabelo, Pele & Unhas',
        description: 'Suplemento completo para fortalecer cabelos, pele e unhas.',
        categories: ['haircare', 'skincare', 'supplements'],
        image: 'https://i.ibb.co/F4QbKsMY/CABELO-PELE-UNHAS.png',
        buttons: [
            { url: 'https://app.monetizze.com.br/r/AMR25407564?u=c&pl=KU309568', text: '1 POTE R$ 127,00', color: 'from-pink-500 to-rose-500' },
            { url: 'https://app.monetizze.com.br/r/AMR25407564?u=c&pl=TF309569', text: '2 POTES + 1 Grátis R$ 227,00', color: 'from-pink-500 to-rose-500' },
            { url: 'https://app.monetizze.com.br/r/AMR25407564?u=c&pl=MU317280', text: '1 POTE + 1 KIT SOS R$ 199,00', color: 'from-pink-500 to-rose-500' }
        ],
        whatsappUrl: 'https://wa.me/5534998965230?text=Olá%21+Gostaria+de+saber+mais+sobre+o+Cabelo+Pele+e+Unhas'
    }
];

// Categories
const categories = [
    { id: 'all', name: 'Todos os Produtos' },
    { id: 'skincare', name: 'Cuidados com a Pele' },
    { id: 'haircare', name: 'Cuidados Capilares' },
    { id: 'supplements', name: 'Suplementos' }
];

// Global state
let selectedCategory = 'all';

// Filter products based on selected category
function filterProducts() {
    const filteredProducts = selectedCategory === 'all' 
        ? products 
        : products.filter(product => product.categories.includes(selectedCategory));
    
    renderProducts(filteredProducts);
}

// Render products to the DOM
function renderProducts(productsToRender) {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';
    
    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden';
        
        // Generate buttons HTML
        const buttonsHTML = product.buttons.map(button => `
            <button 
                onclick="handleBuyNow('${button.url}')" 
                class="w-full px-6 py-3 bg-gradient-to-r ${button.color} text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
                ${button.text}
            </button>
        `).join('');
        
        productCard.innerHTML = `
            <div class="relative overflow-hidden">
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="w-full h-64 object-contain object-center group-hover:scale-105 transition-transform duration-300 bg-gray-50"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="p-6">
                <h4 class="text-xl font-bold text-gray-900 mb-2">${product.name}</h4>
                <p class="text-gray-600 mb-6 leading-relaxed">${product.description}</p>
                
                <!-- Botão Veja os Benefícios -->
                <div class="benefit-container mb-6">
                    <button 
                        class="w-full px-6 py-2.5 bg-white text-rose-600 font-medium rounded-full border border-rose-300 shadow-sm flex items-center justify-center gap-2 hover:bg-gradient-to-r hover:from-rose-100 hover:to-pink-100 hover:text-rose-700 hover:shadow-lg transition-all duration-300 group"
                        onclick="toggleBenefits(this)">
                        Veja os Benefícios
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-300 group-[.open]:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <!-- Conteúdo expansível -->
                    <div class="benefit-content hidden transition-all duration-300 text-sm text-gray-700 bg-rose-50 rounded-xl p-4 shadow-inner mt-4">
                        Será adicionado depois.
                    </div>
                </div>
                
                <div class="space-y-3">
                    ${buttonsHTML}
                    <button
                        onclick="handleWhatsApp('${product.whatsappUrl}')"
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
        
        productsContainer.appendChild(productCard);
    });
}

// Handle Buy Now button clicks
function handleBuyNow(url) {
    window.open(url, '_blank');
}

// Handle WhatsApp button clicks
function handleWhatsApp(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}

// Handle category filter clicks
function handleCategoryClick(categoryId) {
    selectedCategory = categoryId;
    
    // Update active category button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-category="${categoryId}"]`).classList.add('active');
    
    // Filter and render products
    filterProducts();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Update products count dynamically
    const productsCountElement = document.getElementById('products-count');
    if (productsCountElement) {
        productsCountElement.textContent = products.length;
    }
    
    // Initialize carousel
    initializeCarousel();
    
    // Render category buttons
    const categoryContainer = document.getElementById('category-container');
    categories.forEach(category => {
        const categoryBtn = document.createElement('button');
        categoryBtn.className = `category-btn px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            category.id === 'all' 
                ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg active' 
                : 'bg-white text-gray-700 hover:bg-rose-50 hover:text-rose-600 border border-gray-200'
        }`;
        categoryBtn.setAttribute('data-category', category.id);
        categoryBtn.textContent = category.name;
        categoryBtn.addEventListener('click', () => handleCategoryClick(category.id));
        categoryContainer.appendChild(categoryBtn);
    });
    
    // Initial render
    filterProducts();
    
    // Handle smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Handle "Ver Coleção" button
    const shopBtn = document.getElementById('shop-btn');
    if (shopBtn) {
        shopBtn.addEventListener('click', function() {
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Handle "Saiba Mais" button
    const learnMoreBtn = document.getElementById('learn-more-btn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            window.open('https://www.facebook.com/profile.php?viewas=100000686899395&id=61577588436601', '_blank');
        });
    }
});

// Carousel Functions
function initializeCarousel() {
    const thumbnailsContainer = document.getElementById('carousel-thumbnails');
    const indicatorsContainer = document.getElementById('carousel-indicators');
    const mainImageMobile = document.getElementById('carousel-main-image-mobile');
    const mainImageDesktop = document.getElementById('carousel-main-image-desktop');
    const carouselContainer = document.getElementById('carousel-container');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    
    // Generate thumbnails
    carouselImages.forEach((image, index) => {
        const thumbnail = document.createElement('button');
        thumbnail.className = `flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300 ${
            index === 0 ? 'ring-2 ring-rose-500 opacity-100 scale-105' : 'opacity-70 hover:opacity-90 hover:scale-105'
        }`;
        thumbnail.innerHTML = `
            <div class="w-14 h-10 md:w-16 md:h-12 overflow-hidden rounded-lg">
                <img src="${image.src}" alt="${image.alt}" class="w-full h-full object-cover" />
            </div>
        `;
        thumbnail.addEventListener('click', () => changeSlide(index));
        thumbnailsContainer.appendChild(thumbnail);
    });
    
    // Generate indicators
    carouselImages.forEach((_, index) => {
        const indicator = document.createElement('button');
        indicator.className = `w-2 h-2 rounded-full transition-all duration-300 ${
            index === 0 ? 'bg-white' : 'bg-white/50 hover:bg-white/70'
        }`;
        indicator.addEventListener('click', () => changeSlide(index));
        indicatorsContainer.appendChild(indicator);
    });
    
    // Navigation buttons
    prevBtn.addEventListener('click', () => {
        changeSlide(currentSlide === 0 ? carouselImages.length - 1 : currentSlide - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        changeSlide(currentSlide === carouselImages.length - 1 ? 0 : currentSlide + 1);
    });
    
    // Pause on hover (desktop only)
    if (window.innerWidth >= 768) {
        carouselContainer.addEventListener('mouseenter', () => {
            isAutoplayPaused = true;
            clearInterval(autoplayInterval);
        });
        
        carouselContainer.addEventListener('mouseleave', () => {
            isAutoplayPaused = false;
            startAutoplay();
        });
    }
    
    // Start autoplay
    startAutoplay();
}

function startAutoplay() {
    if (!isAutoplayPaused) {
        autoplayInterval = setInterval(() => {
            currentSlide = currentSlide === carouselImages.length - 1 ? 0 : currentSlide + 1;
            updateCarousel();
        }, 4000); // 4 segundos
    }
}

function changeSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function updateCarousel() {
    const mainImageMobile = document.getElementById('carousel-main-image-mobile');
    const mainImageDesktop = document.getElementById('carousel-main-image-desktop');
    const thumbnails = document.querySelectorAll('#carousel-thumbnails button');
    const indicators = document.querySelectorAll('#carousel-indicators button');
    
    // Update both main images
    if (mainImageMobile) {
        mainImageMobile.src = carouselImages[currentSlide].src;
        mainImageMobile.alt = carouselImages[currentSlide].alt;
    }
    
    if (mainImageDesktop) {
        mainImageDesktop.src = carouselImages[currentSlide].src;
        mainImageDesktop.alt = carouselImages[currentSlide].alt;
    }
    
    // Update thumbnail states
    thumbnails.forEach((thumbnail, index) => {
        if (index === currentSlide) {
            thumbnail.className = 'flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300 ring-2 ring-rose-500 opacity-100 scale-105';
        } else {
            thumbnail.className = 'flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300 opacity-70 hover:opacity-90 hover:scale-105';
        }
    });
    
    // Update indicator states
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.className = 'w-2 h-2 rounded-full transition-all duration-300 bg-white';
        } else {
            indicator.className = 'w-2 h-2 rounded-full transition-all duration-300 bg-white/50 hover:bg-white/70';
        }
    });
}

// Função para controlar benefícios (apenas um aberto por vez)
function toggleBenefits(clickedButton) {
    // Fechar todos os blocos primeiro
    document.querySelectorAll('.benefit-container').forEach(container => {
        const content = container.querySelector('.benefit-content');
        const button = container.querySelector('button');
        content.classList.add('hidden');
        button.classList.remove('open');
        // Reset da rotação da seta
        const arrow = button.querySelector('svg');
        arrow.style.transform = 'rotate(0deg)';
    });

    // Abrir o correspondente ao botão clicado
    const content = clickedButton.parentElement.querySelector('.benefit-content');
    const arrow = clickedButton.querySelector('svg');
    
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        clickedButton.classList.add('open');
        arrow.style.transform = 'rotate(90deg)';
    } else {
        content.classList.add('hidden');
        clickedButton.classList.remove('open');
        arrow.style.transform = 'rotate(0deg)';
    }
}