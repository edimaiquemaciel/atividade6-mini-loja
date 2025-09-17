# Mini Loja - Implementações com Diferentes Estratégias de CSS

Este projeto demonstra a implementação da mesma interface de uma mini loja online utilizando 4 abordagens diferentes de estilização CSS em React.

## 📋 Sobre o Projeto

Uma aplicação de e-commerce simples que exibe uma grade de produtos com as seguintes funcionalidades:

- **Navbar fixa** com logo, toggle de tema e badge do carrinho
- **Grid responsivo** de produtos com breakpoints específicos
- **Cards de produto** com imagem, título, preço, avaliação e botão
- **Tema claro/escuro** com persistência no localStorage
- **Carrinho de compras** funcional
- **Estados de loading** com skeleton
- **Acessibilidade** completa

## 🎯 Funcionalidades

### Layout Responsivo
- **≤480px**: 1 coluna
- **481–768px**: 2 colunas  
- **769–1024px**: 3 colunas
- **≥1025px**: 4 colunas

### Componentes
- Navbar com controles de tema e carrinho
- Cards de produto com hover effects
- Sistema de avaliação por estrelas
- Loading skeletons
- Modal do carrinho

### Interações
- Hover com elevação e sombra
- Focus visível para acessibilidade
- Estados disabled e loading
- Transições suaves (150-250ms)

## 🚀 Tecnologias Utilizadas

- React 18
- Vite
- Context API para gerenciamento de estado
- CSS Custom Properties (CSS Variables)
- localStorage para persistência

## 📁 Estrutura do Projeto

```
/
├── 01-css-global/          # CSS Global tradicional
├── 02-css-modules/         # CSS Modules
├── 03-tailwind/           # Tailwind CSS
├── 04-styled-components/  # Styled Components
└── README.md
```

## 🎨 Implementações

### 1. CSS Global (`01-css-global/`)
- Arquivos CSS tradicionais com classes globais
- CSS Variables para tokens de design
- Organização modular dos estilos

### 2. CSS Modules (`02-css-modules/`)
- Escopo local de classes CSS
- Prevenção de conflitos de nomenclatura
- Importação de estilos por componente

### 3. Tailwind CSS (`03-tailwind/`)
- Classes utilitárias predefinidas
- Customização via configuração
- Design system consistente

### 4. Styled Components (`04-styled-components/`)
- CSS-in-JS com template literals
- ThemeProvider para tema global
- Props dinâmicas para variações

## 🔧 Como Executar

Cada implementação é independente. Para executar qualquer uma:

```bash
# Navegue até a pasta desejada
cd 01-css-global/mini-loja

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

## ✨ Características Técnicas

### Acessibilidade
- Navegação por teclado completa
- Atributos ARIA apropriados
- Contraste mínimo de 4.5:1
- Labels descritivos

### Performance
- Lazy loading de imagens
- Otimização de re-renders
- Transições com transform/opacity

### UX/UI
- Dark mode com persistência
- Feedback visual em todas as interações
- Estados de loading sem layout shift
- Design responsivo mobile-first

## 🎯 Objetivos de Aprendizado

Este projeto demonstra:
- Diferentes abordagens de estilização em React
- Implementação de design systems
- Boas práticas de acessibilidade
- Gerenciamento de estado com Context API
- Otimização de performance em interfaces

---

**Cada pasta contém sua própria documentação específica com detalhes de implementação.**
