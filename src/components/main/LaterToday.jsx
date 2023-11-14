import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import HourlyDataItem from "./HourlyDataItem";

const LaterToday = ({ hourlyData }) => {
  return (
    <div>
      <h2 className="font-semibold text-xl my-5 ml-2">Today At</h2>
      <div className="overflow-hidden rounded-lg">
        <SimpleBar style={{ maxHeight: '100%', overflowX: 'auto' }} autoHide={true}>
          <div className="flex space-x-5">
            {hourlyData?.map((item, index) => (
              <HourlyDataItem key={index} item={item} />
            ))}
          </div>
        </SimpleBar>
      </div>
    </div>
  );
};

export default LaterToday;