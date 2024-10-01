import './Header.css';

function Header() {
  return (
    <header>
      <div className="container">
        <h1>header</h1>
        <div className="right-section">
          <i className="fas fa-shopping-cart"></i>
          <div className="cart-count-header">3</div> 
        </div>
      </div>
    </header>
  );
}

export default Header;
