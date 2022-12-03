import React from "react";
import ActionsCard from "./shared/ActionsCard";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const Dashboard = () => {
  return (
    <div>
      <div className="flex items-center">
        <FiberManualRecordIcon className="text-[#F4851F] p-0.5 shadow-[#F4BF8F] shadow-inner border-[#F4BF8F] rounded-full" />
        <span className="text-xl font-bold ml-2">Posts pending actions</span>
      </div>
      <div className="font-normal mb-6">
        Lists of posts on which actions have not been taken
      </div>
      <div className="flex-1 flex-col space-y-4">
        <ActionsCard />
        {/* <ActionsCard /> */}
      </div>
    </div>
  );
};

export default Dashboard;
