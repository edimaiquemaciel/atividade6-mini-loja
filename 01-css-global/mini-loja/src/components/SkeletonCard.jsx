
function SkeletonCard() {
  return (
    <article className="skeleton-card">
      <div className="skeleton-image">
        <div className="shimmer"></div>
      </div>
      <div className="skeleton-content">
        <div className="skeleton-line medium">
          <div className="shimmer"></div>
        </div>
        <div className="skeleton-line short">
          <div className="shimmer"></div>
        </div>
        <div className="skeleton-line" style={{width: '40%', height: '14px', marginBottom: '15px'}}>
          <div className="shimmer"></div>
        </div>
        <div className="skeleton-button">
          <div className="shimmer"></div>
        </div>
      </div>
    </article>
  )
}

export default SkeletonCard