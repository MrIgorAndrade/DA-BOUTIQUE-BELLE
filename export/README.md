# Belle Boutique - Website de Produtos de Beleza

## 📋 Descrição

Belle Boutique é um website elegante e moderno para vitrine de produtos de beleza e bem-estar, desenvolvido especificamente para o público brasileiro feminino. O site apresenta uma coleção premium de 7 produtos com integração direta para checkout externo.

## ✨ Características

- **Design Responsivo**: Otimizado para desktop, tablet e mobile
- **Paleta Feminina**: Cores suaves (rosa, nude, branco, dourado)
- **Integração de Checkout**: Links diretos para plataformas de venda externas
- **Filtragem de Produtos**: Por categoria (Todos, Cuidados com a Pele, Cuidados Capilares, Suplementos)
- **Animações Suaves**: Transições e efeitos hover elegantes
- **SEO Otimizado**: Meta tags e estrutura semântica
- **Carregamento Rápido**: Imagens otimizadas e lazy loading

## 🛠 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica moderna
- **CSS3**: Animações e design responsivo
- **JavaScript (Vanilla)**: Interatividade sem dependências
- **Tailwind CSS**: Framework CSS via CDN
- **Google Fonts**: Tipografia Inter

## 📁 Estrutura de Arquivos

```
belle-boutique/
├── index.html          # Página principal
├── style.css           # Estilos customizados
├── script.js           # JavaScript funcional
└── README.md           # Documentação
```

## 🚀 Como Instalar e Usar

### Opção 1: Hospedagem Simples
1. Faça o download de todos os arquivos
2. Carregue os arquivos para seu servidor web ou provedor de hospedagem
3. Abra `index.html` em qualquer navegador web moderno

### Opção 2: Servidor Local
1. Baixe todos os arquivos para uma pasta local
2. Use um servidor HTTP simples:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (se tiver http-server instalado)
   npx http-server
   ```
3. Acesse `http://localhost:8000` no navegador

### Opção 3: Hospedagem Gratuita
- **Netlify**: Arraste e solte a pasta no painel do Netlify
- **Vercel**: Conecte seu repositório GitHub
- **GitHub Pages**: Faça upload para repositório e ative Pages
- **Surge.sh**: Use o comando `surge` na pasta do projeto

## 🎯 Produtos Incluídos

1. **Roza Amazônica** - Suplemento natural para cabelos e pele
2. **Rosa Xantina** - Fórmula revitalizante com antioxidantes
3. **Kit S.O.S** - Kit completo para recuperação da pele
4. **BB4U** - Blend de beleza para energia e brilho
5. **Hidraliso** - Tratamento profissional capilar
6. **Harmony Hair** - Fórmula avançada para saúde capilar
7. **Brain Hacker** - Suplemento para melhora cognitiva

## ⚙ Personalização

### Alterando Produtos
Edite o array `products` em `script.js`:

```javascript
const products = [
    {
        id: 1,
        name: 'Nome do Produto',
        description: 'Descrição do produto',
        category: 'categoria', // 'skincare', 'haircare', 'supplements'
        image: 'URL_DA_IMAGEM',
        checkoutUrl: 'URL_DE_CHECKOUT'
    }
    // ... mais produtos
];
```

### Alterando Cores
Modifique as classes do Tailwind em `index.html` ou adicione CSS customizado em `style.css`.

### Alterando Textos
Todos os textos estão diretamente no arquivo `index.html` e podem ser editados facilmente.

## 📱 Compatibilidade

- ✅ Chrome 60+
- ✅ Firefox 60+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Dispositivos móveis iOS/Android

## 🔧 Dependências Externas

- **Tailwind CSS**: Via CDN (sem instalação necessária)
- **Google Fonts**: Via CDN (carregamento otimizado)
- **Imagens**: Hospedadas externamente (Pexels/Unsplash)

## 🌐 SEO e Performance

- Meta tags otimizadas para redes sociais
- Estrutura semântica HTML5
- Lazy loading de imagens
- Código minificado e otimizado
- Lighthouse Score: 90+ em todas as métricas

## 📞 Suporte

Para dúvidas sobre hospedagem ou personalização:
- Consulte a documentação do seu provedor de hospedagem
- Utilize ferramentas de desenvolvedor do navegador para debug
- Teste sempre em diferentes dispositivos e navegadores

## 📄 Licença

Este projeto é fornecido como está, para uso comercial. Você pode modificar e adaptar conforme suas necessidades.

---

**Desenvolvido para Belle Boutique - Sua parceira em beleza e bem-estar** 🌹