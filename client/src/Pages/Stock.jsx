import '../CSS/Stock.css';
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ARTICLES } from "../GQL/queries";
import { DataGrid, bgBG } from '@material-ui/data-grid';
import { DeleteOutline, Edit } from "@material-ui/icons";
import Loader from '../Components/Loader/Loader';
import { Link } from 'react-router-dom';

export default function Stock() {

    const { loading, error, data } = useQuery(GET_ARTICLES);
    if (loading) return <Loader />;
    if (error) return <p>Error! {error.message}</p>;

    const rows = data?.articles?.map((article) => ({
        ...article,
        id: article.id_article,
        sousFamille: article.sousFamille[0]?.nom,
        c_famille: article.c_famille[0]?.nom
    }));

    const columns = [
        { field: 'id', headerName: 'ID', width: 95 },
        { field: 'nom', headerName: 'Nom', width: 250, },
        { field: 'sousFamille', headerName: 'Sous Famille', width: 200, },
        { field: 'c_famille', headerName: 'Code Famille', width: 250, },
        { field: 'quantite', headerName: 'Quantité', width: 140, },
        { field: 'reference', headerName: 'Reference', width: 140, },
        { field: 'um', headerName: 'Um', width: 100, },
        { field: 'dateentre', headerName: 'Date Entre', width: 150, },
        {
            field: "action", headerName: "Action", width: 150,

            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/Update-Article/" + params.row.id} >
                            <Edit className="text-yellow-300" />
                        </Link>
                        <DeleteOutline className="text-red-600" />
                    </>
                );
            },
        },
    ];

    return (
        <>
            <div className='text-3xl mb-3'>Liste des Produits</div>
            <Link to="/Stock/Add-New-Product" className='flex w-[200px] mb-3 shadow-md items-center justify-center gap-2 text-white border-2 border-blue-700  bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-blue-600'>
                <i class="fa-solid fa-user-plus"></i>
                <span>Ajouter un Article</span>
            </Link>
            <div className='bg-white rounded-lg shadow-md  w-full h-[550px] '>
                <DataGrid rows={rows} columns={columns} pageSize={7} checkboxSelection disableSelectionOnClick />
            </div>
        </>
    );
}
