import React from 'react'
import { Link } from 'react-router-dom'

const PresqueFinit = () => {
    return (
        <>
            <div className='w-full divide-y bg-white shadow-md p-5 rounded-md divide-gray-200 dark:divide-gray-700'>
                <h1 className='text-2xl font-medium my-3'>Les Produits presque Finir</h1>
                <ul className="pt-5">
                    <li className="py-3 sm:py-4 border-b cursor-pointer rounded-md hover:bg-gray-200 px-4">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                            <div className="flex-shrink-0 p-[2px] bg-gray-300 shadow-md rounded-full">
                                <img className="w-12 h-12 rounded-full" src="https://i0.wp.com/www.papeterie-maroc.com/wp-content/uploads/2020/06/A4.png?fit=417%2C417&ssl=1" alt="Neil image" />
                            </div>
                            <div className="flex-1 flex flex-col gap-2 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    PAPIER LASER BLANC
                                </p>
                                <div className='max-w-xs rounded-full shadow border border-red-500 '>
                                    <div className='p-2 bg-red-500 max-w-12  rounded-tl-full rounded-bl-full '>
                                    </div>
                                </div>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                15% de qnt restante dans le stock
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4 border-b cursor-pointer rounded-md hover:bg-gray-200 px-4">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                            <div className="flex-shrink-0 p-[2px] bg-gray-300 shadow-md rounded-full">
                                <img className="w-12 h-12 object-cover rounded-full" src="https://kymai.ma/cdn/shop/products/51lbhSZ_kZL.jpg?v=1655476574" alt="Neil image" />
                            </div>
                            <div className="flex-1 flex flex-col gap-2 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    STYLO A BILLE BLEU
                                </p>
                                <div className='max-w-xs rounded-full shadow border border-[#FFC100] '>
                                    <div className='p-2 bg-[#FFC100] max-w-24  rounded-tl-full rounded-bl-full '>
                                    </div>
                                </div>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                24% de qnt restante dans le stock
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4 border-b cursor-pointer rounded-md hover:bg-gray-200 px-4">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                            <div className="flex-shrink-0 p-[2px] bg-gray-300 shadow-md rounded-full">
                                <img className="w-12 h-12 object-cover rounded-full" src="https://www.burostockguyane.com/123791-thickbox_default/1-surligneur-stabilo-boss-original-jaune.jpg" alt="Neil image" />
                            </div>
                            <div className="flex-1 flex flex-col gap-2 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    SURLIGNEUR
                                </p>
                                <div className='max-w-xs rounded-full  shadow border border-[#FFFF00] '>
                                    <div className='p-2 bg-[#FFFF00] max-w-36  rounded-tl-full rounded-bl-full '>
                                    </div>
                                </div>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                44% de qnt restante dans le stock
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4 border-b cursor-pointer rounded-md hover:bg-gray-200 px-4">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                            <div className="flex-shrink-0 p-[2px] bg-gray-300 shadow-md rounded-full">
                                <img className="w-12 h-12 object-cover rounded-full" src="https://www.direct-fournitures.fr/326305-large_default/pergamy-chemise-de-presentation-a-lamelle-en-polypropylene-17-100eme-format-a4-coloris-rouge.jpg" alt="Neil image" />
                            </div>
                            <div className="flex-1 flex flex-col gap-2 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    CHEMISE DE PRESENTATION
                                </p>
                                <div className='max-w-xs rounded-full shadow border border-[#D6FF00] '>
                                    <div className='p-2 bg-[#D6FF00] max-w-40  rounded-tl-full rounded-bl-full '>
                                    </div>
                                </div>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                52% de qnt restante dans le stock
                            </div>
                        </div>
                    </li>
                </ul>
                <div className='text-center p-4 text-md font-semibold text-primary-500 hover:underline'>
                    <Link to="/stock">
                        <span>
                            Visiter le stock
                        </span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default PresqueFinit