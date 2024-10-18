// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function SlowDataSkeleton() {
  return (
    <div className={` ${shimmer} max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 p-6`}>

      <div className="text-center">
        <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto"></div>
      </div>
    </div>
  );
}

export function GallerySkeleton() {
  return (
    <div className={`${shimmer} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`}>
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="aspect-square overflow-hidden rounded-lg bg-gray-100"></div>
      ))}
    </div>
  );
}

export function PictureSkeleton() {
  return (
    <div className="aspect-square overflow-hidden rounded-lg bg-blue-100"></div>
  );
}
