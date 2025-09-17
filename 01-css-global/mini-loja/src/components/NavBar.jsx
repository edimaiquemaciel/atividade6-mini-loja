import useTheme from "../hooks/useTheme";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CartModal from "../modal/CartModal";

function NavBar() {
  const {cartItems} = useContext(CartContext);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const [open, setOpen] = useState(false);
  
  const [theme, toggleTheme] = useTheme();

  return (
    <nav className="navbar" role="navigation" aria-label="Barra de navegação principal">
      <a href="/" className="logo">
        MiniShop
      </a>

      <div className="navbar-controls">
        {/* Botão de alternância de tema */}
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label={`Ativar tema ${theme === "light" ? "escuro" : "claro"}`}
        >
          {theme === "light" ? "☀️" : "🌙"}
        </button>

        {/* Botão do carrinho com badge */}
        <button
          className="cart-badge"
          aria-label="Abrir carrinho de compras"
          onClick={()=> setOpen(!open)}
        >
          🛒
          <CartModal isOpen={open} /> 
          {cartTotal > 0 ? (
            <span
            className="badge-count"
            aria-live="polite"
            aria-atomic="true"
          >
            {cartTotal}
          </span>
          ) : ""}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
