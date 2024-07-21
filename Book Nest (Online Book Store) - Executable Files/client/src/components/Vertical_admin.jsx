import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

// Sample dataset for number of customers registered
const dataset = [
  { month: "January", "No. of Customers Registered": 120 },
  { month: "February", "No. of Customers Registered": 150 },
  { month: "March", "No. of Customers Registered": 175 },
  { month: "April", "No. of Customers Registered": 200 },
  { month: "May", "No. of Customers Registered": 225 },
  { month: "June", "No. of Customers Registered": 250 },
  { month: "July", "No. of Customers Registered": 275 },
  { month: "August", "No. of Customers Registered": 300 },
  { month: "September", "No. of Customers Registered": 325 },
  { month: "October", "No. of Customers Registered": 350 },
  { month: "November", "No. of Customers Registered": 375 },
  { month: "December", "No. of Customers Registered": 400 },
];

const chartSetting = {
  yAxis: [
    {
      label: 'No. of Customers Registered',
    },
  ],
  series: [{ 
    dataKey: 'No. of Customers Registered', 
    label: 'Customers Registered',
    color: '#FF7D29' // Set the color of the bars
  }],
  height: 450,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-12px)',
    },
    [`& .${axisClasses.directionX} .${axisClasses.tick}`]: {
      fontSize: '14px',
    },
    [`& .${axisClasses.directionX} .${axisClasses.label}`]: {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  },
};

export default function TickPlacementBars() {
  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <BarChart
        dataset={dataset}
        xAxis={[
          { scaleType: 'band', dataKey: 'month'},
        ]}
        {...chartSetting}
      />
    </div>
  );
}
