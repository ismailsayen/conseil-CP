import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PANNE } from "../../GQL/queries";
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline, Edit } from "@material-ui/icons";
import Loader from '../../Components/Loader/Loader';
import { Link } from 'react-router-dom';



const PanneList = () => {
    const { loading, error, data } = useQuery(GET_PANNE);
    if (loading) return <Loader />;
    if (error) return <p>Error! {error.message}</p>;

    const rows = data?.pannes?.map((panne) => ({
        ...panne,
        id: panne.id,
        pc_n_serie: panne.pc_n_serie[0].n_serie,
    }));

    const columns = [
        { field: 'id', headerName: 'Numéro de Série', width: 190 },
        { field: 'description', headerName: 'Description du Problème', width: 450 },
        { field: 'pc_n_serie', headerName: 'Numéro de Série du PC', width: 200 },
        { field: 'date_panee', headerName: 'Date d\'Entrée en Panne', width: 250 },
        {
            field: "action", headerName: "Action", width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/Stock/Pc/Update-Pc/" + params.row.id} >
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
            <div className='text-3xl mb-3'>liste des Ordinateurs hors-service</div>
            <Link to="/Stock/En-Panne/Add-New-Pc-hors-Service" className='flex w-[200px] mb-3 shadow-md items-center justify-center gap-2 text-white border-2 border-blue-700  bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-blue-600'>
                <i class="fa-solid fa-plus"></i>
                <span>Ajouter</span>
            </Link>
            <div className='bg-white rounded-lg shadow-md  w-full h-[60vh] '>
                <DataGrid rows={rows} columns={columns} pageSize={7} checkboxSelection disableSelectionOnClick />
            </div>
        </>)
}

export default PanneList