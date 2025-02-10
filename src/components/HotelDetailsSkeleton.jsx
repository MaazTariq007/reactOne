
const HotelDetailsSkeleton = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-4xl p-4 bg-white shadow-lg rounded-lg animate-pulse">
        {/* Image Skeleton */}
        <div className="w-1/2">
          <div className="w-full h-96 bg-gray-300 rounded-lg"></div>
        </div>

        {/* Details Skeleton */}
        <div className="w-1/2 pl-6 space-y-4">
          <div className="w-3/4 h-8 bg-gray-300 rounded-lg"></div>{" "}
          {/* Title Skeleton */}
          <div className="w-1/2 h-6 bg-gray-300 rounded-lg"></div>{" "}
          {/* City, Country Skeleton */}
          <div className="w-1/3 h-6 bg-gray-300 rounded-lg"></div>{" "}
          {/* Hotel Type Skeleton */}
          {/* Buttons Skeleton */}
          <div className="mt-6 space-x-4">
            <div className="inline-block w-20 h-8 bg-gray-300 rounded-lg"></div>
            <div className="inline-block w-20 h-8 bg-gray-300 rounded-lg"></div>
            <div className="inline-block w-40 h-8 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailsSkeleton;
