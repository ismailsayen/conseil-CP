import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import {
    Acceuil, Stock, Statistiques, Commandes, DirectionsBureaus, Fournisseurs, Utilisateurs,
    UpdateArticle, AddNewUser, AddNewFournisseur, Product, NotFoundPage
} from './Pages';
import { Route, Routes } from 'react-router-dom';
import Login from './loginPage/Login';
import Edituser from './Pages/Edituser';
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
                <div className="p-4 pt-10 sm:ml-64 bg-[#E8E8E8] h-screen overflow-y-scroll ">
                    <div className="mt-14">
                        <Routes>
                            <Route path='/' element={<Acceuil />} />
                            <Route path='/Stock' element={<Stock />} />
                            <Route path='/UpdateArticle' element={<UpdateArticle />} />
                            {role == "admin" && <Route path='/edituser/:id' element={<Edituser />} />}
                            {role == "admin" && <Route path='/Add-New-User' element={<AddNewUser />} />}
                            <Route path='/Add-New-Fournisseur' element={<AddNewFournisseur />} />
                            <Route path='/Update-Article/:id' element={<UpdateArticle />} />
                            <Route path='/Product' element={<Product />} />
                            <Route path='/Commandes' element={<Commandes />} />
                            <Route path='/Utilisateurs' element={<Utilisateurs role={role} />} />
                            <Route path='/Directions-Bureaus' element={<DirectionsBureaus />} />
                            <Route path='/Fournisseurs' element={<Fournisseurs />} />
                            <Route path='/Statistiques' element={<Statistiques />} />
                            <Route path='/editPassowrd' element={<EditPassword />} />
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
