import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom';

const AddNewUser = () => {
    const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sexe, setSexe] = useState("homme");
  const [numero_de_telephone, setNumeroDeTelephone] = useState("");
  const [grade, setGrade] = useState("admin");
  const [error, setError] = useState("");
  const [registered, setRegistered] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const body = {
      nom,
      prenom,
      email,
      password,
      numero_de_telephone,
      grade,
      sexe
    };
    console.log(body)
    try {
      const response = await fetch("http://localhost:4500/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        credentials: "include",
      });
      if (response.ok) {
        setRegistered(true);
        navigate('/utilisateurs')
      } else {
        setError("Registration failed");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred, please try again later");
    }
  };

    const [alertModal, setAlertModal] = useState(false)

    const handleAlert = () => {
        setAlertModal(false)
    }
    return (
        <>
            <section className="bg-white rounded-md shadow-md">
                <div className=" px-4 py-8 mx-auto">
                    <h2 className="mb-4 text-xl font-bold">{error && <div>{error}</div>}Ajouter Utilisateur</h2>
                    <form onSubmit={handleRegister}>
                        <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                            <div className="w-full">
                                <label htmlFor="prenom" className="block mb-2 text-sm font-medium text-gray-900">Prénom</label>
                                <input onChange={(e) => setPrenom(e.target.value)} required type="text" name="prenom" id="prenom" className=" bg-[#FFFFff] border border-gray-300 text-gray-900 text-sm font-medium rounded-md focus:shadow-md focus:border-primary-600 hover:border-primary-500 hover:shadow-md block w-full p-2.5" />
                            </div>
                            <div className="w-full">
                                <label htmlFor="nom" className="block mb-2 text-sm font-medium text-gray-900">Nom</label>
                                <input onChange={(e) => setNom(e.target.value)} required type="text" name="nom" id="nom" className="bg-[#FFFFff] border border-gray-300 text-gray-900 text-sm font-medium rounded-md focus:shadow-md focus:border-primary-600 hover:border-primary-500 hover:shadow-md block w-full p-2.5" />
                            </div>
                            <div className="w-full">
                                <label htmlFor="numero_de_telephone" className="block mb-2 text-sm font-medium text-gray-900">Numéro de Téléhpone</label>
                                <input onChange={(e) => setNumeroDeTelephone(e.target.value)} required type="text" name="numero_de_telephone" id="numero_de_telephone" className="bg-[#FFFFff] border border-gray-300 text-gray-900 text-sm font-medium rounded-md focus:shadow-md focus:border-primary-600 hover:border-primary-500 hover:shadow-md block w-full p-2.5" />
                            </div>
                            <div className="w-full">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Adresse Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} required type="text" name="email" id="email" className="bg-[#FFFFff] border border-gray-300 text-gray-900 text-sm font-medium rounded-md focus:shadow-md focus:border-primary-600 hover:border-primary-500 hover:shadow-md block w-full p-2.5" />
                            </div>
                            <div className="w-full">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Mot de passe</label>
                                <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" className="bg-[#FFFFff] border border-gray-300 text-gray-900 text-sm font-medium rounded-md focus:shadow-md focus:border-primary-600 hover:border-primary-500 hover:shadow-md block w-full p-2.5" />
                            </div>
                            <div>
                                <label htmlFor="sexe" className="block mb-2 text-sm font-medium text-gray-900">Genre</label>
                                <select onChange={(e) => setSexe(e.target.value)} required  id="sexe" className="bg-[#FFFFff] border border-gray-300 text-gray-900 text-sm font-medium rounded-md focus:shadow-md focus:border-primary-600 hover:border-primary-500 hover:shadow-md block w-full p-2.5">
                                    <option value="homme">Homme</option>
                                    <option value="femme">Femme</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="grade" className="block mb-2 text-sm font-medium text-gray-900">Grade</label>
                                <select onChange={(e) => setGrade(e.target.value)} required id="grade" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                    <option value="admin">Admin</option>
                                    <option value="sous-Admin">Sous-Admin</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button type="submit"  className="text-green-600 gap-2 inline-flex items-center hover:text-white border-2 border-green-600 hover:bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Enregistrer
                            </button>
                            <button type="button" onClick={() => setAlertModal(prev => !prev)} className="text-red-600 gap-2 inline-flex items-center hover:text-white border-2 border-red-600 hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Annuler
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            {
                alertModal &&
                <div id="popup-modal" tabindex="-1" class="fixed inset-0 flex items-center justify-center">
                    <div class="p-4 w-full max-w-md max-h-full relative">
                        <div class="relative bg-white rounded-lg shadow-xl">
                            <button onClick={handleAlert} type="button" class="absolute top-3 right-3 text-red-500 hover:bg-red-600 hover:text-white  rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center">
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                            <div class="p-4 md:p-5 text-center">
                                <i class="fa-solid fa-circle-info text-5xl text-red-600 "></i>
                                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                    Vous voulez vraiment quitter ? <br />certaines informations seront non-enregistrées
                                </h3>
                                <Link to="/utilisateurs" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                                    Oui , Continuer
                                </Link>
                                <button onClick={handleAlert} type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border-2 border-gray-200 hover:border-primary-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 ">
                                    Annuler
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default AddNewUser