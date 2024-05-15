import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import {
    Acceuil, Stock, Statistiques, Commandes, DirectionsBureaus, Fournisseurs, Utilisateurs,
    UpdateArticle, AddNewUser, AddNewFournisseur, AddNewProduct, NotFoundPage, AddNewCommande,
    Edituser, UpdateCommande ,AddNewDirection ,UpdateDirection
} from './Pages';

import { PanneList, PcList, AddNewPc, UpdatePc } from './Pages/StockPage/index'

import { Route, Routes } from 'react-router-dom';
import Login from './loginPage/Login';
import EditPassword from './Pages/EditPassword';

const Dashboard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState('');
    async function authentificated() {
        try {
            const response = await fetch('http://localhost:4500/auth/verify', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include'
            });
            const parseRes = await response.json();
            parseRes === true ? setIsLoggedIn(true) : setIsLoggedIn(false);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        authentificated();
    }, []);
    return (
        <div>
            {isLoggedIn ?
                <div className="bgContainer p-4 pt-10 sm:ml-64 h-screen overflow-y-scroll ">
                    <div className="mt-14">
                        <Routes>
                            <Route path='/' element={<Acceuil />} />
                            <Route path='/Stock' element={<Stock />} />


                            <Route path='/Utilisateurs' element={<Utilisateurs role={role} />} />
                            {role == "admin" && <Route path='/edituser/:id' element={<Edituser />} />}
                            {role == "admin" && <Route path='/Add-New-User' element={<AddNewUser />} />}
                            <Route path='/Update-Utilisateur/:id' element={<Edituser />} />
                            <Route path='/editPassowrd' element={<EditPassword />} />

                            <Route path='/UpdateArticle' element={<UpdateArticle />} />
                            <Route path='/Update-Article/:id' element={<UpdateArticle />} />
                            <Route path='/Stock/Add-New-Product' element={<AddNewProduct />} />

                            <Route path='/Commandes' element={<Commandes />} />
                            <Route path='/Commandes/Add-New-Commande' element={<AddNewCommande />} />
                            <Route path='/Commandes/Update-Commande' element={<UpdateCommande />} />

                            <Route path='/Stock/PCs' element={<PcList />} />
                            <Route path='/Stock/PCs/AddNewPc' element={<AddNewPc />} />
                            <Route path='/Stock/Pc/Update-Pc/' element={<UpdatePc />} />

                            <Route path='/Stock/En-Panne' element={<PanneList />} />

                            <Route path='/Directions-Bureaus' element={<DirectionsBureaus />} />
                            <Route path='/Directions-Bureaus/Add-New-Direction' element={<AddNewDirection />} />
                            <Route path='/Directions-Bureaus/Update-Direction' element={<UpdateDirection />} />

                            <Route path='/Add-New-Fournisseur' element={<AddNewFournisseur />} />
                            <Route path='/Fournisseurs' element={<Fournisseurs />} />

                            <Route path='/Statistiques' element={<Statistiques />} />
                            <Route path='*' element={<NotFoundPage />} />
                        </Routes>
                    </div>
                </div>
                : <Login setIsLoggedIn={setIsLoggedIn} />}
            {isLoggedIn && <Navbar setRole={setRole} setIsLoggedIn={setIsLoggedIn} />}

        </div>
    );
};

export default Dashboard;
