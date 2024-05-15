import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import { GET_SOUS_FAMILLE } from "../GQL/queries";
import { Link } from 'react-router-dom'
import Loader from '../Components/Loader/Loader';


const UpdateArticle = () => {

    const { loading, error, data } = useQuery(GET_SOUS_FAMILLE);
    if (loading) return <Loader />;
    if (error) return `Error! ${error.message}`;


    const [alertModal, setAlertModal] = useState(false)

    const handleAlert = () => {
        setAlertModal(false)
    }
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Modifier Article</h2>
                    <form action="#">
                        <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                            <div className="sm:col-span-2">
                                <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900">Nome Article</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                            </div>
                            <div className="w-full">
                                <label htmlFor="id_article" className="block mb-2 text-sm font-medium text-gray-900">ID Article</label>
                                <input type="text" name="id_article" id="id_article" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                            </div>
                            <div className="w-full">
                                <label htmlFor="dateentre" className="block mb-2 text-sm font-medium text-gray-900">Date Entré au Stock</label>
                                <input type="date" name="dateentre" id="dateentre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                            </div>
                            <div className="w-full">
                                <label htmlFor="quantite" className="block mb-2 text-sm font-medium text-gray-900">Quantité</label>
                                <input type="number" name="quantite" id="quantite" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                            </div>
                            <div>
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">Category</label>
                                <select id='category' name='category' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'>
                                    {data.sousfamilles.map((sousfamille) => (
                                        <option value={sousfamille.nom}>
                                            {sousfamille.nom}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">Unité de Mesure (UM)</label>
                                <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                    <option selected="">Séléction une UM</option>
                                    <option value="TV">R</option>
                                    <option value="PC">U</option>
                                    <option value="GA">B</option>
                                    <option value="PH">M</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Link to="/stock" type="submit" className="text-white bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Modifier
                            </Link>
                            <Link to="/stock" type="button" className="text-red-600 gap-2 inline-flex items-center hover:text-white border-2 border-red-600 hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Annuler
                            </Link>
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
                                <Link to="/stock" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
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

export default UpdateArticle