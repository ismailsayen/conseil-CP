import React from 'react';
import  BarChartComponent  from '../ChartComponent/BarChartComponent '
import  LineChartComponent  from '../ChartComponent/LineChartComponent '
import  PieChartComponent   from '../ChartComponent/PieChartComponent '
import '../CSS/statis.css';

const Statistiques = () => {
    const productData = [
        {
            "nomSousFamille": "PAPIER LASER BLANC",
            "totalQuantite": 1558
        },
        {
            "nomSousFamille": "PAPIER LASER VERT",
            "totalQuantite": 1363
        },
        {
            "nomSousFamille": "STYLO A BILLE BLEU",
            "totalQuantite": 705
        },
        {
            "nomSousFamille": "STYLO A BILLE NOIRE",
            "totalQuantite": 287
        },
        {
            "nomSousFamille": "STYLO A BILLE ROUGE",
            "totalQuantite": 191
        },
        {
            "nomSousFamille": "STYLO SPECIAL (PILOTE)",
            "totalQuantite": 482
        },
        {
            "nomSousFamille": "CRAYON",
            "totalQuantite": 672
        },
        {
            "nomSousFamille": "MARQUEUR",
            "totalQuantite": 817
        },
        {
            "nomSousFamille": "SURLIGNEUR",
            "totalQuantite": 432
        },
        {
            "nomSousFamille": "STYLO CORRECTEUR",
            "totalQuantite": 138
        },
        {
            "nomSousFamille": "BOITE ARCHIVES EN CARTONNE",
            "totalQuantite": 2627
        },
        {
            "nomSousFamille": "BOITE ARCHIVES EN PLASTIC",
            "totalQuantite": 779
        },
        {
            "nomSousFamille": "CHEMISE CARTONNE",
            "totalQuantite": 410
        },
        {
            "nomSousFamille": "CHEMISE BULLE",
            "totalQuantite": 354
        },
        {
            "nomSousFamille": "CHEMISE A SOUFFLET",
            "totalQuantite": 74
        },
        {
            "nomSousFamille": "CLASSEUR CHRONO",
            "totalQuantite": 340
        },
        {
            "nomSousFamille": "CHEMISE A RABAT",
            "totalQuantite": 658
        },
        {
            "nomSousFamille": "PORTES VUES",
            "totalQuantite": 1383
        },
        {
            "nomSousFamille": "POCHETTE TRANSPARENTE",
            "totalQuantite": 570
        },
        {
            "nomSousFamille": "REGISTRE PREIMPRIME",
            "totalQuantite": 1801
        },
        {
            "nomSousFamille": "REGISTRE 2 MAINS",
            "totalQuantite": 682
        },
        {
            "nomSousFamille": "REGISTRE 4 MAINS",
            "totalQuantite": 407
        },
        {
            "nomSousFamille": "BLOC NOTES",
            "totalQuantite": 551
        },
        {
            "nomSousFamille": "CHEMISE DE PRESENTATION",
            "totalQuantite": 385
        },
        {
            "nomSousFamille": "DATEUR MANUEL ARABE",
            "totalQuantite": 732
        },
        {
            "nomSousFamille": "DATEUR MANUEL Français",
            "totalQuantite": 324
        },
        {
            "nomSousFamille": "NUMEROTEUR",
            "totalQuantite": 629
        },
        {
            "nomSousFamille": "TAMPON ENCREUR",
            "totalQuantite": 666
        },
        {
            "nomSousFamille": "TAMPON ENCREUR",
            "totalQuantite": 83
        },
        {
            "nomSousFamille": "AGRAFE",
            "totalQuantite": 1218
        },
        {
            "nomSousFamille": "ARRACHE AGRAFES",
            "totalQuantite": 488
        },
        {
            "nomSousFamille": "COLLE STIK",
            "totalQuantite": 478
        },
        {
            "nomSousFamille": "COLLE NOTES ADHESIVES",
            "totalQuantite": 498
        },
        {
            "nomSousFamille": "ROULEAU ADHESIF EMBALLAGE",
            "totalQuantite": 800
        },
        {
            "nomSousFamille": "REGLE PLATE",
            "totalQuantite": 958
        },
        {
            "nomSousFamille": "TROMBONNES RONDES",
            "totalQuantite": 1324
        },
        {
            "nomSousFamille": "TRMOBONNES RONDES",
            "totalQuantite": 282
        },
        {
            "nomSousFamille": "ATTACHE GEANTE",
            "totalQuantite": 205
        },
        {
            "nomSousFamille": "DISQUE DUR",
            "totalQuantite": 382
        },
        {
            "nomSousFamille": "CLE USB",
            "totalQuantite": 77
        },
        {
            "nomSousFamille": "LECTEUR GRAVEUR",
            "totalQuantite": 510
        }
    ]


    const lineChartData = productData.map(product => ({
        label: product.nomSousFamille,
        quantity: product.totalQuantite
    }));

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
                <h1 className='chart2-title'>Quantité des produits de stock</h1>
                <LineChartComponent data={lineChartData} colors={colors} />
            </div>
        </div>
    );
};

export default Statistiques;