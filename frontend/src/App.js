import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

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
      image: 'https://i.ibb.co/ynJPxds6/ROSA-XANTINA.png',
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

  const categories = [
    { id: 'all', name: 'Todos os Produtos' },
    { id: 'skincare', name: 'Cuidados com a Pele' },
    { id: 'haircare', name: 'Cuidados Capilares' },
    { id: 'supplements', name: 'Suplementos' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.categories.includes(selectedCategory));

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
              <img 
                src="https://i.ibb.co/5dyqRYS/logo-da-belle-2.png" 
                alt="DA BOUTIQUE BELLE Banner" 
                width="292"
                height="36"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-rose-500 transition-colors">Início</a>
              <a href="#products" className="text-gray-700 hover:text-rose-500 transition-colors">Produtos</a>
              <a href="#about" className="text-gray-700 hover:text-rose-500 transition-colors">Sobre Nós</a>
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
              Produtos cuidadosamente selecionados para realçar sua beleza e bem-estar todos os dias
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
                  <div className="space-y-3">
                    {product.buttons.map((button, index) => (
                      <button
                        key={index}
                        onClick={() => handleBuyNow(button.url)}
                        className={`w-full px-6 py-3 bg-gradient-to-r ${button.color} text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}
                      >
                        {button.text}
                      </button>
                    ))}
                    <button
                      onClick={() => handleWhatsApp(product.whatsappUrl)}
                      className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                      </svg>
                      WhatsApp
                    </button>
                  </div>
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
                  <div className="text-3xl font-bold text-rose-500 mb-2">{products.length}</div>
                  <div className="text-gray-700">Produtos Premium</div>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Seção de Dúvidas Remodelada */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-rose-100">
                <div className="text-center">
                  <div className="mb-8">
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      Ainda tem dúvidas?
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                      Nossos especialistas estão prontos para te ajudar a encontrar o produto perfeito para suas necessidades. Fale conosco pelo WhatsApp!
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    <button
                      onClick={() => window.open('https://wa.me/5534998965230?text=Olá%21+Quero+Tirar+Uma+Dúvida', '_blank')}
                      className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                      </svg>
                      Falar com Especialista
                    </button>
                  </div>
                  
                  {/* Decoração sutil */}
                  <div className="mt-8 flex justify-center">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-rose-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-rose-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <img 
                src="https://i.ibb.co/5dyqRYS/logo-da-belle-2.png" 
                alt="DA BOUTIQUE BELLE Banner" 
                width="220"
                height="27"
                className="mb-4"
              />
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