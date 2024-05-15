
import '../CSS/Stock.css';
import React from 'react';
import { DeleteOutline, Edit } from "@material-ui/icons";

import { useQuery } from '@apollo/client';
import { GET_COMMANDES } from "../GQL/queries";
import { DataGrid } from '@material-ui/data-grid';
import Loader from '../Components/Loader/Loader';
import { Link } from 'react-router-dom';

export default function Commandes() {

    const { loading, error, data } = useQuery(GET_COMMANDES);
    if (loading) return <Loader />;
    if (error) {
        return (
            <p className='bg-red-300 text-center py-2 font-semibold rounded-md border-2 border-red-500'>
                Error! {error.message}
            </p>
        )
    }
    const rows = data?.commandes?.map((commande) => ({
        ...commande,
        id: commande.id_commande,
        id_article: commande.id_article[0].nom,
        c_bureau: commande.c_bureau[0].nom,
    }));
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'id_article', headerName: 'Nom d\'Article', width: 200, },
        { field: 'c_bureau', headerName: 'Nom Bureau', width: 240, },
        { field: 'quantite', headerName: 'Qantité', width: 240, },
        { field: 'date_commande', headerName: 'Date de Commande', width: 215, },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/Commandes/Update-Commande`} onClick={() => dispatch(setUserdata(params.row))}>
                            <Edit className="productListEdit" />
                        </Link>
                        <DeleteOutline className="productListDelete" />
                    </>
                );
            },
        },
    ];

    return (
        <>
            <div className='text-3xl mb-3'>Commandes</div>
            <div className=' flex flex-col h-[500px] gap-2'>
                <Link to="/Commandes/Add-New-Commande">
                    <button className=" flex items-center justify-center gap-2 text-white border-2 border-blue-700  bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-blue-600 ">
                        <i class="fa-solid fa-plus"></i>
                        <span>Ajouter un commande</span>
                    </button>
                </Link>
                <div className='bg-white rounded-lg shadow-md  w-full h-screen '>
                    <DataGrid rows={rows} columns={columns} pageSize={7} checkboxSelection disableSelectionOnClick />
                </div>
            </div>
        </>
    );
}
