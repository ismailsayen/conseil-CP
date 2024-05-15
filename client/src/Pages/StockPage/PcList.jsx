import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PC } from "../../GQL/queries";
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline, Edit } from "@material-ui/icons";
import Loader from '../../Components/Loader/Loader';
import { Link } from 'react-router-dom';
const PcList = () => {
    const { loading, error, data } = useQuery(GET_PC);
    if (loading) return <Loader />;
    if (error) return <p>Error! {error.message}</p>;

    const rows = data?.pcs?.map((pc) => ({
        ...pc,
        id: pc.n_serie,
        service_affecte: pc.service_affecte[0].nom,
        c_famille: pc.c_famille[0].nom,
    }));

    const columns = [
        { field: 'id', headerName: 'Numéro de Série', width: 190 },
        { field: 'c_technique', headerName: 'Caractéristique Technique', width: 450, },
        { field: 'date_affectation', headerName: 'Date Affectation', width: 200, },
        { field: 'date_entre_magasin', headerName: 'Date Entré au Magasin', width: 250, },
        { field: 'marque', headerName: 'Marque', width: 140, },
        { field: 'service_affecte', headerName: 'Service d\'Affecte', width: 350, },
        { field: 'c_famille', headerName: 'Code Famille', width: 150, },
        {
            field: "action", headerName: "Action", width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to="/Stock/Pc/Update-Pc/">
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
            <div className='text-3xl mb-3'>Liste des PC</div>
            <Link to="/Stock/PCs/AddNewPc" className='flex w-[200px] mb-3 shadow-md items-center justify-center gap-2 text-white border-2 border-blue-700  bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-blue-600'>
                <i class="fa-solid fa-plus"></i>
                <span>Ajouter un PC</span>
            </Link>
            <div className='bg-white rounded-lg shadow-md  w-full h-[550px] '>
                <DataGrid rows={rows} columns={columns} pageSize={7} checkboxSelection disableSelectionOnClick />
            </div>
        </>)
}

export default PcList