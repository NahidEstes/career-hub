import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Assignment-1",
    Marks: 60,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Assignment-2",
    Marks: 60,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Assignment-3",
    Marks: 60,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Assignment-4",
    Marks: 60,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Assignment-5",
    Marks: 58,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Assignment-6",
    Marks: 54,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Assignment-7",
    Marks: 60,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Assignment-8",
    Marks: 60,
    pv: 4300,
    amt: 2100,
  },
];

export default function Statistics() {
  return (
    <div className="custom-container">
      <h1 className="text-center mb-4 font-bold text-xl text-slate-800">
        My Assignment Marks
      </h1>
      <AreaChart
        width={1200}
        height={500}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Marks" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
}
