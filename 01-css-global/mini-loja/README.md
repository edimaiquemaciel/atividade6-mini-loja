# Mini Loja - CSS Global

Esta implementação utiliza **CSS Global tradicional** com arquivos `.css` separados e classes globais.

## 🎨 Abordagem de Estilização

### Estratégia
- CSS tradicional com classes globais
- CSS Custom Properties para tokens de design
- Arquivo único de estilos (`global.css`)
- Separação de tokens em arquivo próprio (`tokens.css`)

### Organização dos Estilos
```
src/styles/
├── global.css    # Todos os estilos da aplicação
└── tokens.css    # Variáveis CSS (cores, espaçamentos, etc.)
```

## 🔧 Características Técnicas

### Tokens de Design
```css
:root {
  /* Cores */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --text-primary: #1a1a1a;
  --accent: #3b82f6;
  
  /* Espaçamentos */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  
  /* Sombras */
  --shadow-lg: 0 10px 25px -3px rgba(0, 0, 0, 0.2);
}
```

### Dark Mode
- Implementado com `data-theme="dark"` no body
- Redefinição de variáveis CSS para tema escuro
- Persistência via localStorage

### Componentes Implementados
- **NavBar**: navegação fixa com controles
- **ProductCard**: card de produto completo
- **SkeletonCard**: estado de loading
- **CartModal**: modal do carrinho

## 🎯 Funcionalidades

### Grid Responsivo
- Mobile first design
- Breakpoints usando CSS Grid
- `auto-fit` e `minmax()` para responsividade

### Interações
- Hover effects com `transform: translateY()`
- Transições suaves de 200ms
- Focus rings para acessibilidade
- Estados disabled e loading

### Sistema de Estrelas
- Renderização dinâmica de rating
- Suporte a estrelas parciais
- Gradiente para estrelas "meio cheias"

## 🚀 Como Executar

```bash
# Instale as dependências
npm install

# Execute em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## ✅ Vantagens desta Abordagem

- **Simples**: fácil de entender e implementar
- **Familiar**: sintaxe CSS tradicional
- **Controle total**: acesso completo aos estilos
- **Performance**: CSS nativo sem overhead

## ⚠️ Desvantagens

- **Escopo global**: risco de conflitos de classes
- **Manutenção**: difícil de manter em projetos grandes
- **Organização**: estilos podem ficar dispersos
- **Reutilização**: menos modular que outras abordagens

## 📦 Dependências

- React 18
- Vite
- CSS puro (sem pré-processadores)

---

Esta implementação serve como base para comparação com as outras abordagens de estilização.
