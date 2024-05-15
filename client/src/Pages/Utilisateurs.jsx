import '../CSS/Stock.css';
import { DeleteOutline, Edit } from "@material-ui/icons";
import { useQuery } from '@apollo/client';
import { GET_UTILISATEURS } from "../GQL/queries";
import { DataGrid } from '@material-ui/data-grid';
import Loader from '../Components/Loader/Loader';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserdata } from '../store/actions/userActions';
import { useState, useEffect } from 'react';

export default function Utilisateurs({ role }) {
    const dispatch = useDispatch();
    const { loading, error, data } = useQuery(GET_UTILISATEURS);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (data?.utilisateurs) {
            setUsers(data.utilisateurs);
        }
    }, [data]);

    if (loading) return <Loader />;
    if (error) {
        return (
            <p className='bg-red-300 text-center py-2 font-semibold rounded-md border-2 border-red-500'>
                Error! {error.message}
            </p>
        );
    }

    const handleDeleteUser = async (email) => {
        try {
            const response = await fetch(`http://localhost:4500/dashboard/delete/${email}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            });
            if (response.ok) {
                setUsers(prevUsers => prevUsers.filter(user => user.email !== email));
            } else {
                console.error("Deletion failed");
            }
        } catch (err) {
            console.error("An error occurred:", err);
        }
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'nom', headerName: 'Nom', width: 130 },
        { field: 'prenom', headerName: 'Prénom', width: 130 },
        { field: 'sexe', headerName: 'Genre', width: 120 },
        { field: 'email', headerName: 'Adresse E-mail', width: 215 },
        { field: 'numero_de_telephone', headerName: 'Numéro de Téléphone', width: 220 },
        { field: 'grade', headerName: 'Grade', width: 130 },
        role === "admin" ? {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => (
                <>
                    <Link to={`/edituser/${params.row.id}`} onClick={() => dispatch(setUserdata(params.row))}>
                        <Edit className="productListEdit" />
                    </Link>
                    <button onClick={() => handleDeleteUser(params.row.email)}>
                        <DeleteOutline className="productListDelete" />
                    </button>
                </>
            ),
        } : {}
    ];

    return (
        <>
            <div className='text-3xl mb-3'>Utilisateurs</div>
            <div className='flex flex-col h-auto gap-2'>
                {role === "admin" && (
                    <Link to="/Add-New-User">
                        <button className="flex items-center justify-center gap-2 text-white border-2 border-blue-700 bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-blue-600">
                            <i className="fa-solid fa-user-plus"></i>
                            <span>Ajouter un Utilisateur</span>
                        </button>
                    </Link>
                )}
                <div className='bg-white rounded-lg shadow-md w-full h-[350px]'>
                    <DataGrid rows={users} columns={columns} pageSize={8} checkboxSelection disableSelectionOnClick />
                </div>
            </div>
        </>
    );
}
