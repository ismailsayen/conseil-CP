import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_DIRECTIONS } from "../GQL/queries";
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline, Edit } from "@material-ui/icons";
import Loader from '../Components/Loader/Loader';
import { Link } from 'react-router-dom';

const DirectionsBureaus = () => {
    const { loading, error, data } = useQuery(GET_DIRECTIONS);
    if (loading) return <Loader />;
    if (error) return <p>Error! {error.message}</p>;

    const rows = data?.directions?.map((direction) => ({
        ...direction,
        id: direction.numero,
    }));

    const columns = [
        { field: 'id', headerName: 'Numéro de la Direction', width: 180 },
        { field: 'nom', headerName: 'Description', width: 500, },
        { field: 'abs', headerName: 'abs', width: 150, },
        {
            field: "action", headerName: "Action", width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to="/Directions-Bureaus/Update-Direction">
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
            <div className='text-3xl mb-3'>Liste des direction</div>
            <Link to="/Directions-Bureaus/Add-New-Direction" className='flex w-[200px] mb-3 shadow-md items-center justify-center gap-2 text-white border-2 border-blue-700  bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-blue-600'>
                <i class="fa-solid fa-plus"></i>
                <span>Ajouter un direction</span>
            </Link>
            <div className='bg-white rounded-lg shadow-md  w-full h-[500px] '>
                <DataGrid rows={rows} columns={columns} pageSize={7} checkboxSelection disableSelectionOnClick />
            </div>
        </>)
}

export default DirectionsBureaus