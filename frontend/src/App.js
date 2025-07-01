import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Roza Amazônica',
      description: 'Suplemento natural de beleza para o bem-estar dos cabelos e da pele.',
      category: 'supplements',
      price: 'Compre Agora',
      image: 'https://i.ibb.co/4wQ2PLcZ/rosa-amazonica.jpg',
      checkoutUrl: 'https://ev.braip.com/ref?pv=proeo8oe&af=afijpxl883',
      whatsappUrl: 'https://wa.me/5534998965230?text=Olá%21+Gostaria+de+saber+mais+sobre+o+Rosa+Amazônica'
    },
    {
      id: 2,
      name: 'Rosa Xantina',
      description: 'Fórmula revitalizante para a pele com propriedades antioxidantes.',
      category: 'skincare',
      price: 'Compre Agora',
      image: 'https://i.ibb.co/Nd9jnb7Y/rosa-xantina.jpg',
      checkoutUrl: 'https://ev.braip.com/ref?pv=pro9y44w&af=afi8jmg66g',
      whatsappUrl: 'https://wa.me/5534998965230?text=Olá%21+Gostaria+de+saber+mais+sobre+o+Rosa+Xantina'
    },
    {
      id: 3,
      name: 'Kit S.O.S',
      description: 'Kit completo de cuidados para recuperação e hidratação da pele.',
      category: 'skincare',
      price: 'Compre Agora',
      image: 'https://i.ibb.co/Cp5Dv7sm/kit-sos.jpg',
      checkoutUrl: 'https://app.monetizze.com.br/r/ARU25256290',
      whatsappUrl: 'https://wa.me/5534998965230?text=Olá%21+Gostaria+de+saber+mais+sobre+o+KIT+SOS'
    },
    {
      id: 4,
      name: 'BB4U',
      description: 'Blend de beleza para energia, foco e brilho exterior.',
      category: 'supplements',
      price: 'Compre Agora',
      image: 'https://i.ibb.co/v6fTxLbT/bb4u.jpg',
      checkoutUrl: 'https://pv.b4you.com.br/pages/97e22b30-02ed-417f-bc43-5c0d81a45370/4dEPHbx8Ab',
      whatsappUrl: 'https://wa.me/5534998965230?text=Olá%21+Gostaria+de+saber+mais+sobre+o+BB4U'
    },
    {
      id: 5,
      name: 'Hidraliso',
      description: 'Tratamento profissional de alisamento capilar com efeito nutritivo.',
      category: 'haircare',
      price: 'Compre Agora',
      image: 'https://i.ibb.co/qFghTHTy/hidraliso.jpg',
      checkoutUrl: 'https://ev.braip.com/ref?pv=proyyn2e&af=afivpe8mmq',
      whatsappUrl: 'https://wa.me/5534998965230?text=Olá%21+Gostaria+de+saber+mais+sobre+o+Hidraliso'
    },
    {
      id: 6,
      name: 'Harmony Hair',
      description: 'Fórmula avançada para a saúde capilar que reduz a queda e promove o crescimento.',
      category: 'haircare',
      price: 'Compre Agora',
      image: 'https://i.ibb.co/XrjKSjQ5/harmony-hair.jpg',
      checkoutUrl: 'https://ev.braip.com/ref?pv=prol9enx&af=afizjy6vvg',
      whatsappUrl: 'https://wa.me/5534998965230?text=Olá%21+Gostaria+de+saber+mais+sobre+o+Harmony+Hair'
    },
    {
      id: 7,
      name: 'Brain Hacker',
      description: 'Suplemento para melhora cognitiva com ingredientes naturais.',
      category: 'supplements',
      price: 'Compre Agora',
      image: 'https://i.ibb.co/wh4SL8DK/brain-hacker.jpg',
      checkoutUrl: 'https://pv.b4you.com.br/pages/qfxlVb_02mWCCwuO7c4yV/eIHBsTFV1o',
      whatsappUrl: 'https://wa.me/5534998965230?text=Olá%21+Gostaria+de+saber+mais+sobre+o+Brain+Hacker'
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos os Produtos' },
    { id: 'skincare', name: 'Cuidados com a Pele' },
    { id: 'haircare', name: 'Cuidados Capilares' },
    { id: 'supplements', name: 'Suplementos' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleBuyNow = (checkoutUrl) => {
    window.open(checkoutUrl, '_blank');
  };

  // Handle WhatsApp button clicks
  const handleWhatsApp = (whatsappUrl) => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                DA BOUTIQUE BELLE
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-rose-500 transition-colors">Início</a>
              <a href="#products" className="text-gray-700 hover:text-rose-500 transition-colors">Produtos</a>
              <a href="#about" className="text-gray-700 hover:text-rose-500 transition-colors">Sobre Nós</a>
              <a href="#contact" className="text-gray-700 hover:text-rose-500 transition-colors">Contato</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              Desperte Sua
              <span className="block bg-gradient-to-r from-rose-500 via-pink-500 to-rose-400 bg-clip-text text-transparent">
                Beleza Natural
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Descubra nossa coleção cuidadosamente selecionada de produtos premium de beleza e bem-estar, criados para realçar seu brilho natural.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Ver Coleção
              </button>
              <button 
                onClick={() => window.open('https://www.facebook.com/profile.php?viewas=100000686899395&id=61577588436601', '_blank')}
                className="px-8 py-4 border-2 border-rose-300 text-rose-600 font-semibold rounded-full hover:bg-rose-50 transition-all duration-300"
              >
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="mt-16 relative">
          <div className="max-w-4xl mx-auto px-4">
            <img 
              src="https://images.unsplash.com/photo-1531646317777-0619c7c5d1d3" 
              alt="Beauty Products"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nossa Coleção Premium
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Produtos cuidadosamente selecionados para ajudar você a se sentir e parecer incrível
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-rose-50 hover:text-rose-600 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-contain object-center group-hover:scale-105 transition-transform duration-300 bg-gray-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                  <button
                    onClick={() => handleBuyNow(product.checkoutUrl)}
                    className="w-full px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Comprar Agora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-rose-100 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Sobre a DA BOUTIQUE BELLE
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Acreditamos que a verdadeira beleza vem de dentro, e nossa coleção cuidadosamente selecionada de produtos premium de beleza e bem-estar foi criada para ajudar você a despertar seu brilho natural.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Dos suplementos revolucionários aos tratamentos profissionais, cada produto em nossa coleção foi selecionado por sua qualidade excepcional e resultados comprovados.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-500 mb-2">100%</div>
                  <div className="text-gray-700">Ingredientes Naturais</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-500 mb-2">7</div>
                  <div className="text-gray-700">Produtos Premium</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3865712/pexels-photo-3865712.jpeg" 
                alt="Spa wellness setup"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Entre em Contato
          </h3>
          <p className="text-xl text-gray-600 mb-12">
            Tem dúvidas sobre nossos produtos? Estamos aqui para ajudar você em sua jornada de beleza.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Nos Envie um E-mail</h4>
              <p className="text-gray-600">contato@belleboutique.com.br</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Ligue para Nós</h4>
              <p className="text-gray-600">(11) 9 9999-9999</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Visite Nossa Loja</h4>
              <p className="text-gray-600">Rua da Beleza, 123<br />São Paulo, SP 01234-567</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent mb-4">
                DA BOUTIQUE BELLE
              </h4>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Sua parceira de confiança em beleza e bem-estar. Descubra o poder dos ingredientes naturais e formulações premium.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61577588436601" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/mr_andrade.store/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Links Rápidos</h5>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-rose-400 transition-colors">Início</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-rose-400 transition-colors">Produtos</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-rose-400 transition-colors">Sobre Nós</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-rose-400 transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Categorias</h5>
              <ul className="space-y-2">
                <li><a href="#products" className="text-gray-400 hover:text-rose-400 transition-colors">Cuidados com a Pele</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-rose-400 transition-colors">Cuidados Capilares</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-rose-400 transition-colors">Suplementos</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-rose-400 transition-colors">Bem-estar</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 DA BOUTIQUE BELLE. Todos os direitos reservados. Feito com ❤️ para você linda.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;