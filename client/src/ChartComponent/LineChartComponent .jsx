import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const LineChartComponent = ({ data, colors }) => {
    const [color, setColor] = React.useState(colors[0]);
    const handleChange = (event, nextColor) => {
        setColor(nextColor);
    };

    return (
        <Stack direction="column" spacing={2} alignItems="center" sx={{ width: '100%' }}>
            <LineChart
                margin={{ bottom: 20, left: 27, right: 5 }}
                height={300}
                series={[
                    {
                        data: data,
                        label: 'QuantitÃ© des produits de stock',
                        color,
                    },
                ]}
            />
            <ToggleButtonGroup
                value={color}
                exclusive
                onChange={handleChange}
            >
                {colors.map((value) => (
                    <ToggleButton key={value} value={value} sx={{ p: 1 }}>
                        <div
                            style={{
                                width: 15,
                                height: 15,
                                backgroundColor: value,
                                display: 'inline-block',
                            }}
                        />
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </Stack>
    );
};

export default LineChartComponent;