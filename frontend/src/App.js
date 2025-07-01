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
      checkoutUrl: 'https://ev.braip.com/ref?pv=proeo8oe&af=afijpxl883'
    },
    {
      id: 2,
      name: 'Rosa Xantina',
      description: 'Fórmula revitalizante para a pele com propriedades antioxidantes.',
      category: 'skincare',
      price: 'Compre Agora',
      image: 'https://i.ibb.co/Nd9jnb7Y/rosa-xantina.jpg',
      checkoutUrl: 'https://ev.braip.com/ref?pv=pro9y44w&af=afi8jmg66g'
    },
    {
      id: 3,
      name: 'Kit S.O.S',
      description: 'Kit completo de cuidados para recuperação e hidratação da pele.',
      category: 'skincare',
      price: 'Compre Agora',
      image: 'https://i.ibb.co/Cp5Dv7sm/kit-sos.jpg',
      checkoutUrl: 'https://app.monetizze.com.br/r/ARU25256290'
    },
    {
      id: 4,
      name: 'BB4U',
      description: 'Blend de beleza para energia, foco e brilho exterior.',
      category: 'supplements',
      price: 'Compre Agora',
      image: 'https://i.ibb.co/v6fTxLbT/bb4u.jpg',
      checkoutUrl: 'https://pv.b4you.com.br/pages/97e22b30-02ed-417f-bc43-5c0d81a45370/4dEPHbx8Ab'
    },
    {
      id: 5,
      name: 'Hidraliso',
      description: 'Tratamento profissional de alisamento capilar com efeito nutritivo.',
      category: 'haircare',
      price: 'Compre Agora',
      image: 'https://i.ibb.co/qFghTHTy/hidraliso.jpg',
      checkoutUrl: 'https://ev.braip.com/ref?pv=proyyn2e&af=afivpe8mmq'
    },
    {
      id: 6,
      name: 'Harmony Hair',
      description: 'Fórmula avançada para a saúde capilar que reduz a queda e promove o crescimento.',
      category: 'haircare',
      price: 'Compre Agora',
      image: 'https://i.ibb.co/XrjKSjQ5/harmony-hair.jpg',
      checkoutUrl: 'https://ev.braip.com/ref?pv=prol9enx&af=afizjy6vvg'
    },
    {
      id: 7,
      name: 'Brain Hacker',
      description: 'Suplemento para melhora cognitiva com ingredientes naturais.',
      category: 'supplements',
      price: 'Compre Agora',
      image: 'https://i.ibb.co/wh4SL8DK/brain-hacker.jpg',
      checkoutUrl: 'https://pv.b4you.com.br/pages/qfxlVb_02mWCCwuO7c4yV/eIHBsTFV1o'
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
                Belle Boutique
              </h4>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Sua parceira de confiança em beleza e bem-estar. Descubra o poder dos ingredientes naturais e formulações premium.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.294 1.194-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.751-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.04 0C5.408 0 .002 5.407.002 12.04c0 5.313 3.464 9.845 8.253 11.44-.113-.994-.216-2.52.046-3.604.237-1.007 1.529-6.461 1.529-6.461s-.391-.782-.391-1.937c0-1.815 1.052-3.174 2.363-3.174 1.115 0 1.654.836 1.654 1.838 0 1.12-.713 2.792-1.081 4.342-.307 1.299.652 2.358 1.936 2.358 2.323 0 4.111-2.448 4.111-5.978 0-3.123-2.247-5.307-5.458-5.307-3.718 0-5.898 2.789-5.898 5.673 0 1.123.433 2.329.973 2.982.107.131.122.245.09.378-.1.408-.32 1.301-.363 1.484-.057.245-.187.296-.43.179-1.624-.758-2.639-3.135-2.639-5.046 0-4.118 2.991-7.897 8.625-7.897 4.527 0 8.045 3.229 8.045 7.548 0 4.505-2.84 8.127-6.788 8.127-1.325 0-2.573-.688-2.998-1.508l-.815 3.109c-.295 1.137-1.092 2.561-1.625 3.426 1.223.479 2.521.74 3.885.74 6.63 0 12.036-5.376 12.036-12.005C24.076 5.407 18.67.001 12.04.001z"/>
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
              © 2025 Belle Boutique. Todos os direitos reservados. Feito com ❤️ para você linda.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;