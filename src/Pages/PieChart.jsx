import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Youth", 80],
  ["Adults", 60],
  ["Average ", 40],
  ["Elderly", 20],
];

export const options = {
  title: "Online shopping statistics",
  is3D: true,
  titleTextStyle: {
    fontSize: 20,
  },
};

export default function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"500px"}
    />
  );
}
