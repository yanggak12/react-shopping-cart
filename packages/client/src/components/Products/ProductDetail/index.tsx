interface ProductDetailProps {}

const ProductDetail = (props: ProductDetailProps) => {
  return (
    <div className="product-detail-info">
      <div className="product-detail-info__name">[든든] 동동 스위트콘</div>
      <div className="product-detail-divider" />
      <div className="product-detail-info__price">
        <span>금액</span>
        <span>99,800원</span>
      </div>
      <button className="product-detail-button flex justify-center item-center">
        장바구니
      </button>
    </div>
  );
};

export default ProductDetail;
