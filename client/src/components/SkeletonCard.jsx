import React from "react";

const SkeletonCard = () => {
  return (
    <div className="animate-pulse rounded-xl overflow-hidden shadow-lg bg-gray-800 flex flex-col">
      {/* Image placeholder */}
      <div className="h-48 bg-gray-700"></div>

      {/* Body */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="h-6 bg-gray-600 rounded w-3/4 mb-4"></div>
          <div className="flex gap-2 mb-4">
            <div className="h-4 w-12 bg-gray-700 rounded"></div>
            <div className="h-4 w-10 bg-gray-700 rounded"></div>
            <div className="h-4 w-8 bg-gray-700 rounded"></div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-700"></div>
            <div className="flex flex-col">
              <div className="h-4 w-24 bg-gray-600 rounded mb-2"></div>
              <div className="h-3 w-20 bg-gray-700 rounded"></div>
            </div>
          </div>
          <div className="h-4 w-16 bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
