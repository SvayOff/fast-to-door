import ContentLoader from 'react-content-loader';

const ProductSkeleton = (props) => (
  <ContentLoader
    className="products__item"
    speed={2}
    width={287}
    height={351}
    viewBox="0 0 287 351"
    backgroundColor="#f5f5f5"
    foregroundColor="#ededed"
    {...props}>
    <rect x="0" y="0" rx="0" ry="0" width="279" height="351" />
  </ContentLoader>
);

export default ProductSkeleton;
