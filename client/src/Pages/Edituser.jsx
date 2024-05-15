// src/components/EditUser.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loader from '../Components/Loader/Loader';
import { Link } from 'react-router-dom';

const Edituser = () => {
    const userdata = useSelector(state => state.user.userdata); // Access userdata from Redux store
    const [nom, setNom] = useState(userdata.nom);
    const [prenom, setPrenom] = useState(userdata.prenom);
    const [email, setEmail] = useState(userdata.email);
    const [sexe, setSexe] = useState(userdata.sexe);
    const [numero_de_telephone, setNumeroDeTelephone] = useState(userdata.numero_de_telephone);
    const [grade, setGrade] = useState(userdata.grade);
    const [error, setError] = useState("");
    const navigate = useNavigate()
    const [clicked, setClicked] = useState(false)

    const handleRegister = async (e) => {
        e.preventDefault();
        setClicked(true)

        const body = {
            nom,
            prenom,
            email,
            numero_de_telephone,
            grade,
            sexe
        };
        console.log(body)
        try {
            const response = await fetch(`http://localhost:4500/dashboard/edituser/${userdata.id}`, {
                method: "put",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
                credentials: "include",
            });
            if (response.ok) {
                setClicked(false)
                navigate('/utilisateurs')
            } else {
                setClicked(false)
                setError("modification failed");
            }
        } catch (err) {
            console.error(err);
            setError("An error occurred, please try again later");
        }
    };

    return (
        <>
            {clicked ? <Loader /> : (<section className="bg-white rounded-md shadow-md">
                <div className=" px-4 py-8 mx-auto">
                    <h2 className="mb-4 text-xl font-bold">{error && <div>{error}</div>}Modilier Utilisateur</h2>
                    <form onSubmit={handleRegister}>
                        <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                            <div className="w-full">
                                <label htmlFor="prenom" className="block mb-2 text-sm font-medium text-gray-900">Prénom</label>
                                <input value={prenom} onChange={(e) => setPrenom(e.target.value)} required type="text" name="prenom" id="prenom" className=" bg-[#FFFFff] border border-gray-300 text-gray-900 text-sm font-medium rounded-md focus:shadow-md focus:border-primary-600 hover:border-primary-500 hover:shadow-md block w-full p-2.5" />
                            </div>
                            <div className="w-full">
                                <label htmlFor="nom" className="block mb-2 text-sm font-medium text-gray-900">Nom</label>
                                <input value={nom} onChange={(e) => setNom(e.target.value)} required type="text" name="nom" id="nom" className="bg-[#FFFFff] border border-gray-300 text-gray-900 text-sm font-medium rounded-md focus:shadow-md focus:border-primary-600 hover:border-primary-500 hover:shadow-md block w-full p-2.5" />
                            </div>
                            <div className="w-full">
                                <label htmlFor="numero_de_telephone" className="block mb-2 text-sm font-medium text-gray-900">Numéro de Téléhpone</label>
                                <input value={numero_de_telephone} onChange={(e) => setNumeroDeTelephone(e.target.value)} required type="text" name="numero_de_telephone" id="numero_de_telephone" className="bg-[#FFFFff] border border-gray-300 text-gray-900 text-sm font-medium rounded-md focus:shadow-md focus:border-primary-600 hover:border-primary-500 hover:shadow-md block w-full p-2.5" />
                            </div>
                            <div className="w-full">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Adresse Email</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} required type="text" name="email" id="email" className="bg-[#FFFFff] border border-gray-300 text-gray-900 text-sm font-medium rounded-md focus:shadow-md focus:border-primary-600 hover:border-primary-500 hover:shadow-md block w-full p-2.5" />
                            </div>
                            {sexe !== "homme" ? (<div>
                                <label htmlFor="sexe" className="block mb-2 text-sm font-medium text-gray-900">Genre</label>
                                <select onChange={(e) => setSexe(e.target.value)} required id="grade" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                    <option value={sexe}>{sexe}</option>
                                    <option value="homme">Homme</option>
                                </select>
                            </div>) : <div>
                                <label htmlFor="sexe" className="block mb-2 text-sm font-medium text-gray-900">Genre</label>
                                <select onChange={(e) => setSexe(e.target.value)} required id="grade" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                    <option value={sexe}>{sexe}</option>
                                    <option value="femme">Femme</option>
                                </select>
                            </div>}
                            <div>
                                <label htmlFor="grade" className="block mb-2 text-sm font-medium text-gray-900">Grade</label>
                                <select value={grade} onChange={(e) => setGrade(e.target.value)} required id="grade" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                    <option value="admin">Admin</option>
                                    <option value="sous-Admin">Sous-Admin</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button type="submit" className="text-green-600 gap-2 inline-flex items-center hover:text-white border-2 border-green-600 hover:bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Enregistrer
                            </button>
                            <Link to="/utilisateurs" type="button" className="text-red-600 gap-2 inline-flex items-center hover:text-white border-2 border-red-600 hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Annuler
                            </Link>
                        </div>
                    </form>
                </div>
            </section>)}


        </>
    )

};

export default Edituser;
