import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [isAdd, setIsAdd] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdd(true);
    
    // Limpa qualquer timeout existente antes de criar um novo
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    // Configura um novo timeout para resetar o estado após 2 segundos
    const newTimeoutId = setTimeout(() => {
      setIsAdd(false);
    }, 2000);
    
    setTimeoutId(newTimeoutId);
  };

  // Limpa o timeout quando o componente for desmontado
  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  // Função para renderizar as estrelas dinamicamente
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasPartial = rating % 1 !== 0;
    
    // Adiciona estrelas cheias
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="star filled">
          ★
        </span>
      );
    }
    
    // Adiciona estrela parcial se necessário
    if (hasPartial) {
      const percentage = (rating - fullStars) * 100;
      stars.push(
        <span 
          key="partial" 
          className="star partial"
          style={{
            background: `linear-gradient(90deg, #FFD700 ${percentage}%, #ddd ${percentage}%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          ★
        </span>
      );
    }
    
    // Adiciona estrelas vazias para completar 5
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="star">
          ★
        </span>
      );
    }
    
    return stars;
  };

  return (
    <article
      className="product-card"
      role="region"
      aria-labelledby={`product-title-${product.id}`}
    >
      {/* Tag de produto (Novo, Promo, etc) */}
      {product.tag && (
        <div className={`product-tag ${product.tag.toLowerCase()}`}>
          {product.tag}
        </div>
      )}

      {/* Imagem */}
      <div className="product-card-image">
        <img
          src={product.image}
          alt={`Imagem do produto ${product.title}`}
          loading="lazy"
        />
      </div>

      {/* Conteúdo */}
      <div className="product-card-content">
        <h3
          id={`product-title-${product.id}`}
          className="product-title"
          title={product.title}
        >
          {product.title}
        </h3>

        {/* Preço */}
        <p className="product-price">R$ {product.price.toFixed(2)}</p>

        {/* Avaliação com estrelas dinâmicas */}
        <div
          className="product-rating"
          aria-label={`Avaliação ${product.rating} de 5 estrelas`}
        >
          <div className="stars-container">
            {renderStars(product.rating)}
          </div>
          <span className="rating-value">{product.rating}</span>
        </div>

        {/* Botão */}
        <button
          className={`btn-add ${isAdd ? 'added' : ''}`}
          aria-label={`Adicionar ${product.title} ao carrinho`}
          onClick={handleAddToCart}
          disabled={isAdd}
        >
          {isAdd ? "Adicionado!" : "Adicionar ao Carrinho"}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;