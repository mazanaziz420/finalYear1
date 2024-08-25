import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '24:00'],
    datasets: [
      {
        label: 'Sales ($)',
        data: [0, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500],
        fill: false,
        borderColor: '#3f51b5',
        tension: 0.1,
      },
    ],
  };

  useEffect(() => {
    const chart = chartRef.current?.chartInstance;

    if (chart) {
      chart.destroy();
    }
  }, []);

  return <Line data={data} height={200} ref={chartRef} />;
};

export default Chart;
