import CartIcon from '../../Icons/CartIcon';

const TopNav = () => {
  return (
    <nav className="nav">
      <div className="nav-content">
        <div className="nav-title">
          <CartIcon fill="#fff" size="lg" />
          NEXTSTEP
        </div>
        <div className="nav-buttons">
          <button className="nav-button">장바구니</button>
          <button className="nav-button">주문목록</button>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
