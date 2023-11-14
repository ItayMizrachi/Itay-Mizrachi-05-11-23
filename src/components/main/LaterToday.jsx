import HourlyDataItem from "./HourlyDataItem";

const LaterToday = ({ hourlyData }) => {
  return (
    <div>
      <h2 className="font-semibold text-xl my-5 ml-2">Today At</h2>
      <div className="overflow-x-auto rounded-lg scrollbar-hide transition-all duration-200 ease-out  scrollbar-thumb-gray-600 scrollbar-track-gray-300 flex space-x-5 hover:scrollbar-auto">
        {hourlyData?.map((item, index) => (
          <HourlyDataItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default LaterToday;