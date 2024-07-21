import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

// Extended dataset with 12 months and sales data for each book
const dataset = [
  { month: "January", "Harry Potter and the Sorcerer's Stone": 120, "Rich Dad, Poor Dad": 85, "1984": 95, "Pride and Prejudice": 75 },
  { month: "February", "Harry Potter and the Sorcerer's Stone": 100, "Rich Dad, Poor Dad": 90, "1984": 110, "Pride and Prejudice": 70 },
  { month: "March", "Harry Potter and the Sorcerer's Stone": 130, "Rich Dad, Poor Dad": 80, "1984": 85, "Pride and Prejudice": 90 },
  { month: "April", "Harry Potter and the Sorcerer's Stone": 140, "Rich Dad, Poor Dad": 75, "1984": 100, "Pride and Prejudice": 80 },
  { month: "May", "Harry Potter and the Sorcerer's Stone": 110, "Rich Dad, Poor Dad": 95, "1984": 120, "Pride and Prejudice": 85 },
  { month: "June", "Harry Potter and the Sorcerer's Stone": 115, "Rich Dad, Poor Dad": 100, "1984": 95, "Pride and Prejudice": 90 },
  { month: "July", "Harry Potter and the Sorcerer's Stone": 125, "Rich Dad, Poor Dad": 105, "1984": 100, "Pride and Prejudice": 95 },
  { month: "August", "Harry Potter and the Sorcerer's Stone": 135, "Rich Dad, Poor Dad": 110, "1984": 105, "Pride and Prejudice": 100 },
  { month: "September", "Harry Potter and the Sorcerer's Stone": 140, "Rich Dad, Poor Dad": 115, "1984": 110, "Pride and Prejudice": 105 },
  { month: "October", "Harry Potter and the Sorcerer's Stone": 145, "Rich Dad, Poor Dad": 120, "1984": 115, "Pride and Prejudice": 110 },
  { month: "November", "Harry Potter and the Sorcerer's Stone": 150, "Rich Dad, Poor Dad": 125, "1984": 120, "Pride and Prejudice": 115 },
  { month: "December", "Harry Potter and the Sorcerer's Stone": 155, "Rich Dad, Poor Dad": 130, "1984": 125, "Pride and Prejudice": 120 },
];

const chartSetting = {
  yAxis: [
    {
      label: 'No. of Sales',
    },
  ],
  xAxis: [
    {
      scaleType: 'band',
      dataKey: 'month',
      label: 'Month',
    },
  ],
  width: 1200,
  height: 500,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-10px, 0)',
    },
  },
};

const valueFormatter = (value) => `${value}`;

export default function BarsDataset() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      yAxis={[{ scaleType: 'linear', dataKey: 'sales' }]}
      series={[
        { dataKey: "Harry Potter and the Sorcerer's Stone", label: "Harry Potter", valueFormatter, color: "#FF5733" },
        { dataKey: "Rich Dad, Poor Dad", label: "Rich Dad", valueFormatter, color: "#33FF57" },
        { dataKey: "1984", label: "1984", valueFormatter, color: "#3357FF" },
        { dataKey: "Pride and Prejudice", label: "Pride and Prejudice", valueFormatter, color: "#F3FF33" },
      ]}
      {...chartSetting}
    />
  );
}
