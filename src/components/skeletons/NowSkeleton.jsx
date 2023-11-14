import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/solid";

const NowSkeleton = () => {
  return (
    <div className="mx-auto grid grid-cols-1 p-5 rounded-xl border border-base-300 bg-base-200 shadow-md max-w-md text-base-content">
      <div className="flex justify-between items-center">
        <div className="h-6 w-32 bg-gray-300 rounded-lg animate-pulse"></div>
      </div>
      <div className="flex justify-between border-b border-base-100 pb-3">
        <div className="mt-1">
          <div className="h-16 w-32 bg-gray-300 rounded-lg animate-pulse mb-2"></div>
          <div className="h-6 w-48 bg-gray-300 rounded-lg animate-pulse"></div>
        </div>

        <div className="w-16 h-16 bg-gray-300 rounded-full animate-pulse"></div>
      </div>
      <div className="mt-2 space-y-2">
        <div className="flex items-center">
          <CalendarDaysIcon className="w-5 h-5 mr-2" />
          <div className="h-4 w-32 bg-gray-300 rounded-lg animate-pulse"></div>
        </div>
        <div className="flex items-center">
          <MapPinIcon className="h-5 w-5 mr-2 text-red-500 " />
          <div className="h-4 w-48 bg-gray-300 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default NowSkeleton;