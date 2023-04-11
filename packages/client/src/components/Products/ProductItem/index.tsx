import CartIcon from '../../Icons/CartIcon';

interface ProductItemProps {
  name: string;
  price: string;
  imgSrc: string;
}

const ProductItem = ({ name, price, imgSrc }: ProductItemProps) => {
  return (
    <div className="product-info">
      <img
        src={imgSrc}
        alt=""
        style={{ background: '#c7c7c7', width: '282px', height: '282px' }}
      />
      <div className="product-info-bottom">
        <div>
          <div className="product-info__name">{name}</div>
          <div className="product-info__price">{price} 원</div>
        </div>
        <CartIcon />
      </div>
    </div>
  );
};

export default ProductItem;
