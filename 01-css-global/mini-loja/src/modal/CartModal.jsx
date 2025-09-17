import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartModal({ isOpen }) {
  const { cartItems, clearCart } = useContext(CartContext);

  return (
    <div className={`cart-modal ${isOpen ? "open" : ""}`}>
      <h3 className="cart-modal-title">Carrinho</h3>

      {cartItems.length === 0 ? (
        <p className="cart-modal-empty">Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul className="cart-modal-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-modal-item">
                {item.title} - {item.quantity}{" "}
                {item.quantity > 1 ? "itens" : "item"}
              </li>
            ))}
          </ul>

          <button onClick={clearCart} className="cart-modal-clear">
            Limpar Carrinho
          </button>
        </>
      )}
    </div>
  );
}

export default CartModal;
