import React from 'react';
import { PieChart } from '@mui/x-charts';

const PieChartComponent = ({ data,h }) => (
    <PieChart
        series={[
            {
                data: data,
                highlightScope: { faded: 'global', highlighted: 'item' },
                faded: { innerRadius: 30, additionalRadius: -5, color: 'black' },
            },
        ]}
        height={h}
    />
);

export default PieChartComponent;