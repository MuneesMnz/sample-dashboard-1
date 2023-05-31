import React, { useContext } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { DarkModeContext } from "../../Context/darkModeContext";

const Chart = ({aspect,title}) => {
  const data = [
   {name:"January",Total:1200},
   {name:"February",Total:2100},
   {name:"March",Total:1800},
   {name:"April",Total:1450},
   {name:"May",Total:900},
   {name:"June",Total:1900}
  ];
  const {darkMode}=useContext(DarkModeContext)

  return (
    <div className={`flex-[4] ${darkMode ? "shadow shadow-white" :"shadow-md"} p-2.5 text-gray-700 `}>
      <div className={`mb-5 font-semibold ${darkMode ? "text-gray-200" :"text-gray-500"} text-xl`}>{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect} >
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />

          <CartesianGrid strokeDasharray="3 3" className=" stroke-[lightgray]" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
