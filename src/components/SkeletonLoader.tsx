import "../css/skeletonloader.css";

const SkeletonLoader = () => {
  return (
    <div className="skeleton-loader">
      <div className="skeleton-title"></div>
      <div className="sk-line"></div>
      <div className="skeleton-title-sb"></div>
      <div className="sk-veriant-wrap">
        <div className="skeleton-variant"></div>
        <div className="skeleton-variant"></div>
        <div className="skeleton-variant"></div>
        <div className="skeleton-variant"></div>
        <div className="skeleton-variant"></div>
        <div className="skeleton-variant"></div>
      </div>
      <div className="skeleton-title"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-title"></div>
      <div className="skeleton-variant"></div>
      <div className="skeleton-variant"></div>
    </div>
  );
};

export default SkeletonLoader;
