import React from 'react';
import LineChartComponent from '../ChartComponent/LineChartComponent ';
import PieChartComponent from '../ChartComponent/PieChartComponent ';
import BarChartComponent from '../ChartComponent/BarChartComponent ';
import '../CSS/statis.css';

const Statistiques = () => {
    // Generate product data
    const productData = Array.from({ length: 30 }, (_, i) => ({
        label: `P${i + 1}`,
        quantity: Math.floor(Math.random() * 500), // Random quantity
    }));

    // Filter products with quantity higher than 100
    const filteredProductData = productData.filter(product => product.quantity > 100);

    // Line chart data with single dataset
    const lineChartData = filteredProductData.map(product => product.quantity); // Extracting quantity data

    // Generate x-axis labels for the line chart
    const xAxisLabels = filteredProductData.map(product => product.label);

    // Array of colors for toggling
    const colors = [
        '#063CF3',
        'orange',
        '#F30906',
        'aqua',
        '#14C837',
        'yellow',
        '#8B06F3',
        '#ff9da7',
        '#F306EF',
        'gray',
    ];

    // Dummy pie chart data
    const pieChartData = [
        { id: 0, value: 30, label: 'PAPIER LASER BLANC' },
        { id: 1, value: 20, label: 'ENVELOPPE KRAFT AUTOADHESIVE' },
        { id: 2, value: 25, label: 'REGISTRE PREIMPRIME' },
        { id: 3, value: 15, label: 'CD DVD VIERGES' },
        { id: 4, value: 10, label: 'BOITE ARCHIVES EN CARTONNE' },
        { id: 5, value: 10, label: 'AGRAFE' },
        { id: 6, value: 10, label: 'ROULEAU ADHESIF TRANSPARENT' },
        { id: 7, value: 10, label: 'PORTES VUES' },
    ];

    // Dummy bar chart data
    const barChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Nombre de commandes (Vert)', // Label with color indication
                data: [20, 35, 40, 15, 30, 25, 40, 45, 50, 55, 60, 65],
                backgroundColor: 'green', // Set bar color to green
            },
        ],
    };

    return (
        <div className='statistique'>
            <div className='chart-container'>
                <h1 className='chart2-title'>Nombre des commandes par mois</h1>
                <BarChartComponent w={1000} h={300} />
            </div>
            <div className='chart-container'>
                <h1 className='chart2-title'>Répartition des produits par catégorie</h1>
                <div className='chart-container1'>
                    <PieChartComponent data={pieChartData} w={1000} h={300} />
                </div>
            </div>
            <div className='chart-container'>
                <h1 className='chart2-title'>Quantité puisque épuisés des produits de stock</h1>
                <LineChartComponent data={lineChartData} xAxisLabels={xAxisLabels} colors={colors} />
            </div>
        </div>
    );
};

export default Statistiques;