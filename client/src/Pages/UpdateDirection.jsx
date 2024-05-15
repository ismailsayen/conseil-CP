import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UpdateDirection = () => {

    const [alertModal, setAlertModal] = useState(false)

    const handleAlert = () => {
        setAlertModal(false)
    }
    return (
        <>
            
            <section className="bg-white h-[450px] rounded-md shadow-md">
                <div className=" px-4 py-8 mx-auto flex flex-col justify-center">
                    <h2 className="mb-4 text-xl font-bold">Modifier une Direction</h2>
                    <form>
                        <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                            <div className="w-full">
                                <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numéro Direction</label>
                                <input type="number" name="code" id="code" className=" bg-[#FFFFff] border border-gray-300 text-gray-900 text-sm font-medium rounded-md focus:shadow-md focus:border-primary-600 hover:border-primary-500 hover:shadow-md block w-full p-2.5"
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="nom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ABS</label>
                                <input type="text" name="nom" id="nom" className="bg-[#FFFFff] border border-gray-300 text-gray-900 text-sm font-medium rounded-md focus:shadow-md focus:border-primary-600 hover:border-primary-500 hover:shadow-md block w-full p-2.5"
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <input type="text" name="desc" id="desc" className="bg-[#FFFFff] border border-gray-300 text-gray-900 text-sm font-medium rounded-md focus:shadow-md focus:border-primary-600 hover:border-primary-500 hover:shadow-md block w-full p-2.5"
                                />
                            </div>
                            
                        </div>
                        <div className="flex items-center space-x-4">
                            <Link to="/Directions-Bureaus" type="submit" className="text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Enregistrer
                            </Link>
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
                                <Link to="/Directions-Bureaus" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
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

export default UpdateDirection