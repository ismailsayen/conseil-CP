import * as React from 'react';
import { BarChart, barElementClasses } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
function BarChartComponent({ w, h }) { // Added curly braces to destructure props
    // Provided JSON data
    const jsonData = {
        "data": {
            "commandes": [
                { "quantite": 19, "id_commande": "451", "date_commande": "09" },
                { "quantite": 80, "id_commande": "452", "date_commande": "06" },
                { "quantite": 70, "id_commande": "453", "date_commande": "12" },
                { "quantite": 11, "id_commande": "454", "date_commande": "12" },
                { "quantite": 13, "id_commande": "455", "date_commande": "12" },
                { "quantite": 54, "id_commande": "456", "date_commande": "11" },
                { "quantite": 50, "id_commande": "457", "date_commande": "10" },
                { "quantite": 72, "id_commande": "458", "date_commande": "10" },
                { "quantite": 46, "id_commande": "459", "date_commande": "09" },
                { "quantite": 18, "id_commande": "460", "date_commande": "09" },
                { "quantite": 30, "id_commande": "461", "date_commande": "09" },
                { "quantite": 24, "id_commande": "462", "date_commande": "08" },
                { "quantite": 63, "id_commande": "463", "date_commande": "08" },
                { "quantite": 98, "id_commande": "464", "date_commande": "07" },
                { "quantite": 64, "id_commande": "465", "date_commande": "07" },
                { "quantite": 63, "id_commande": "466", "date_commande": "06" },
                { "quantite": 48, "id_commande": "467", "date_commande": "06" },
                { "quantite": 96, "id_commande": "468", "date_commande": "05" },
                { "quantite": 91, "id_commande": "469", "date_commande": "05" },
                { "quantite": 84, "id_commande": "470", "date_commande": "04" },
                { "quantite": 59, "id_commande": "471", "date_commande": "04" },
                { "quantite": 92, "id_commande": "472", "date_commande": "04" },
                { "quantite": 74, "id_commande": "473", "date_commande": "03" },
                { "quantite": 85, "id_commande": "474", "date_commande": "02" },
                { "quantite": 63, "id_commande": "475", "date_commande": "03" },
                { "quantite": 75, "id_commande": "476", "date_commande": "02" },
                { "quantite": 80, "id_commande": "477", "date_commande": "02" },
                { "quantite": 96, "id_commande": "478", "date_commande": "01" },
                { "quantite": 19, "id_commande": "479", "date_commande": "01" },
                { "quantite": 4, "id_commande": "480", "date_commande": "04" }
            ]
        }
    };

    // Map the month names to their corresponding numbers
    const monthNumbers = {
        "January": "01",
        "February": "02",
        "March": "03",
        "April": "04",
        "May": "05",
        "June": "06",
        "July": "07",
        "August": "08",
        "September": "09",
        "October": "10",
        "November": "11",
        "December": "12"
    };

    // Calculate the number of orders per month from the provided JSON data
    const ordersPerMonthData = Array.from({ length: 12 }, (_, i) => {
        const monthNumber = (i + 1).toString().padStart(2, '0'); // Format month as two digits
        const monthName = Object.keys(monthNumbers).find(key => monthNumbers[key] === monthNumber); // Convert month number to month name
        const ordersForMonth = jsonData.data.commandes
            .filter(item => item.date_commande === monthNumber)
            .reduce((acc, curr) => acc + curr.quantite, 0); // Sum the quantities for the month
        return { month: monthName, orders: ordersForMonth };
    });

    const colors = ['#3BFF02'];

    return (
        <BarChart
            width={w}
            height={h}
            sx={(theme) => ({
                [`.${barElementClasses.root}`]: {
                    fill: colors[0], // Set fill color for bars
                    strokeWidth: 2,
                },
                [`.${axisClasses.root}`]: {
                    [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                        stroke: '#3BFF02',
                        strokeWidth: 3,
                    },
                    [`.${axisClasses.tickLabel}`]: {
                        fill: '#14C837',
                    },
                },
                backgroundSize: '35px 35px',
                backgroundPosition: '20px 20px, 20px 20px',
            })}
            xAxis={[{ scaleType: 'band', data: ordersPerMonthData.map(entry => entry.month) }]}
            series={[
                { data: ordersPerMonthData.map(entry => entry.orders), label: 'Nombre des commandes par mois', id: 'orders_id' },
            ]}
            colors={colors} 
        />
    );
}
export default BarChartComponent;