import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_SOUS_FAMILLE } from "../GQL/queries";
import { Link } from 'react-router-dom'
import Loader from '../Components/Loader/Loader';

const AddNewArticle = () => {
    const { loading, error, data } = useQuery(GET_SOUS_FAMILLE);
    if (loading) return <Loader />;
    if (error) return `Error! ${error.message}`;

    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Ajouter un nouveaur Article</h2>
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
                            <Link to="/stock" type="submit"  className="text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Enregistrer
                            </Link>
                            <button type="button" onClick={() => setAlertModal(prev => !prev)} className="text-red-600 gap-2 inline-flex items-center hover:text-white border-2 border-red-600 hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Annuler
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default AddNewArticle