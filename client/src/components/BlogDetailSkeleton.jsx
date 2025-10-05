import React from "react";

export default function BlogDetailSkeleton() {
  return (
    <div className="min-h-screen bg-[#0a0a2a] text-white px-6 md:px-20 py-10 animate-pulse">
      {/* Breadcrumb */}
      <div className="h-4 bg-gray-700 w-1/3 mb-4 rounded"></div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Blog Skeleton */}
        <div className="lg:col-span-3 bg-[#1a1a3a] p-6 rounded-lg space-y-6">
          <div className="w-full h-[450px] bg-gray-700 rounded-lg"></div>
          <div className="h-8 bg-gray-600 w-2/3 rounded"></div>
          <div className="h-4 bg-gray-700 w-1/4 rounded"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-700 rounded w-11/12"></div>
            <div className="h-4 bg-gray-700 rounded w-10/12"></div>
            <div className="h-4 bg-gray-700 rounded w-9/12"></div>
          </div>
        </div>

        {/* Sidebar Skeleton */}
        <div className="lg:col-span-1 flex flex-col gap-4">
          <div className="bg-[#10103a] p-4 rounded-lg shadow-md space-y-4">
            <div className="h-6 bg-gray-700 w-1/2 rounded"></div>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-700 rounded-md"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-600 w-3/4 rounded"></div>
                  <div className="h-3 bg-gray-700 w-1/2 rounded"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#10103a] p-4 rounded-lg shadow-md">
            <div className="h-6 bg-gray-700 w-1/3 rounded mb-3"></div>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-5 w-14 bg-gray-700 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
