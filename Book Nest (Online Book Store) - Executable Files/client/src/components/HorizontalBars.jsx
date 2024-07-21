import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import "../components/HorizontalBars"; // Import the CSS file for additional styling if needed

const dataset = [
  { genre: "Fiction", sales: 120 },
  { genre: "Horror", sales: 85 },
  { genre: "Psychology", sales: 95 },
  { genre: "Dystopian", sales: 75 },
  { genre: "Action", sales: 150 },
  { genre: "Adventure", sales: 140 },
  { genre: "Comedy", sales: 110 },
  { genre: "Fantasy", sales: 130 },
  { genre: "Biography", sales: 100 },
  { genre: "Thriller", sales: 90 },
  { genre: "Philosophy", sales: 60 },
  { genre: "Science", sales: 80 },
];

const chartSetting = {
  xAxis: [
    {
      label: "No. of Sales",
    },
  ],
  width: 570, // Increased width for more space
  height: 450,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(5px, 0)",
    },
  },
};

const valueFormatter = (value) => `${value}`;

export default function HorizontalBars() {
  return (
    <div className="chart-container">
      <BarChart
        dataset={dataset}
        yAxis={[{ scaleType: "band", dataKey: "genre" }]}
        series={[
          {
            dataKey: "sales",
            label: "Sales",
            valueFormatter,
            color: "#002379",
          },
        ]}
        layout="horizontal"
        {...chartSetting}
      />
    </div>
  );
}
