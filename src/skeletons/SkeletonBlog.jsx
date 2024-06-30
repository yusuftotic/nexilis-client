import React from 'react';

import SkeletonElement from './SkeletonElement.jsx';
import Shimmer from './Shimmer.jsx';

export default function SkeletonBlog() {
  return (
    <div className="skeleton-wrapper">

      <div className="skeleton-blog">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>

      <Shimmer />

    </div>
  )
}
