import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "USA",
    uv: 590,
    pv: 6000,
    amt: 6000,
  },
  {
    name: "China",
    uv: 868,
    pv: 5000,
    amt: 4150,
  },
  {
    name: "Canada",
    uv: 1397,
    pv: 3000,
    amt: 2000,
  },
  {
    name: "Japan",
    uv: 1480,
    pv: 3000,
    amt: 1200,
  },
  {
    name: "India",
    uv: 1520,
    pv: 2000,
    amt: 2000,
  },
  {
    name: "Mexico",
    uv: 1400,
    pv: 1000,
    amt: 1100,
  },
];
export default function Gauge() {
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
