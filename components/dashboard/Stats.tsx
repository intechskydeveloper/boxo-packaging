import React from "react";
import { Users, Package, ArrowUp, ArrowDown, Boxes } from "lucide-react";

const InfoCard = ({ icon, title, value, change, isPositive }: any) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-md flex items-center justify-between min-w-[300px] max-w-sm m-4 border border-gray-100">
      <div className="flex flex-col space-y-2">
        <div className="bg-gray-100 p-2 rounded-xl text-gray-700 w-fit">
          {icon}
        </div>
        <div className="text-sm text-gray-500 font-semibold">{title}</div>
        <div className="text-3xl font-bold text-gray-800">{value}</div>
      </div>
      <div
        className={`flex items-center space-x-1 text-sm font-medium ${
          isPositive ? "text-green-500" : "text-red-500"
        }`}
      >
        {isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
        <span>{change}</span>
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="flex flex-col md:flex-row">
        <InfoCard
          icon={<Package size={24} />}
          title="Total Boxes"
          value="156"
          change="11.01%"
          isPositive={true}
        />
        <InfoCard
          icon={<Boxes size={24} />}
          title="Categories"
          value="60"
          change="9.05%"
          isPositive={false}
        />
      </div>
    </div>
  );
};

export default Stats;
