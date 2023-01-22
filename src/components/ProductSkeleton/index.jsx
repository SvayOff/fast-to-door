import ContentLoader from 'react-content-loader';

const ProductSkeleton = (props) => (
  <ContentLoader
    className="products__items"
    speed={2}
    width={287}
    height={350}
    viewBox="4 0 287 350"
    backgroundColor="#f5f5f5"
    foregroundColor="#ededed"
    {...props}>
    <rect x="398" y="418" rx="0" ry="0" width="272" height="23" />
    <rect x="9" y="0" rx="0" ry="0" width="279" height="351" />
    <circle cx="91" cy="76" r="41" />
  </ContentLoader>
);

export default ProductSkeleton;
