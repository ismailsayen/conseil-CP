import React from "react";
import "../CSS/Accueil.css";
import Chart from "../Components/chart/chart";
import { Link } from "react-router-dom";
import PresqueFinit from "../Components/PresqueFinit";

const Acceuil = () => {
    return (
        <>
            <div class="container-cards grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link to="/utilisateurs" className="userCard bg-[#FFE2E5] flex flex-col justify-center rounded-lg shadow-md p-3 ">
                    <div className="icon rounded-full mx-auto bg-[#FA5A7D] flex justify-center items-center h-[45px] w-[45px] ">
                        <i class="fa-solid fa-user text-white  rounded-full"></i>
                    </div>
                    <div className="flex justify-center text-center flex-col gap-2 mt-2">
                        <span className="text-xl font-normal text-[#151D48] ">Ajouter</span>
                        <p className="text-2xl font-semibold text-[#425166] ">Utilisateur</p>
                        <span className="text-[14px]">
                            4 utilisateurs 
                        </span>
                    </div>
                </Link>
                <Link to="/stock" className="stockCard bg-[#FFF4DE] flex flex-col justify-center rounded-lg shadow-md p-3 cursor-pointer hover:bg-[#FF947A] hover:text-[#FFF4DE] ">
                    <div className="icon rounded-full mx-auto bg-[#FF947A] flex justify-center items-center h-[45px] w-[45px] ">
                        <i class="fa-solid fa-box text-white  rounded-full"></i>
                    </div>
                    <div className="flex justify-center text-center flex-col gap-2 mt-2">
                        <span className="text-xl font-normal text-[#151D48] ">Ajouter</span>
                        <p className="text-2xl font-semibold text-[#425166] ">Article</p>
                        <span className="text-[14px]">
                            91 articles en Stocks 
                        </span>
                    </div>
                </Link>
                <Link to="/fournisseurs" className="fournisseurCard bg-[#DCFCE7] flex flex-col justify-center rounded-lg shadow-md p-3 ">
                    <div className="icon rounded-full mx-auto bg-[#3CD856] flex justify-center items-center h-[45px] w-[45px] ">
                        <i class="fa-solid fa-truck text-white  rounded-full"></i>
                    </div>
                    <div className="flex justify-center text-center flex-col gap-2 mt-2">
                        <span className="text-xl font-normal text-[#151D48] ">Ajouter</span>
                        <p className="text-2xl font-semibold text-[#425166] ">Fournisseurs</p>
                        <span className="text-[14px]">
                            26 fournisseurs 
                        </span>
                    </div>
                </Link>
                <Link to="/statistiques" className="statsCard bg-[#F3E8FF] flex flex-col justify-center rounded-lg shadow-md p-3 ">
                    <div className="icon rounded-full mx-auto bg-[#BF83FF] flex justify-center items-center h-[45px] w-[45px] ">
                        <i class="fa-solid fa-chart-pie text-white  rounded-full"></i>
                    </div>
                    <div className="flex justify-center text-center flex-col gap-2 mt-2">
                        <p className="text-xl font-normal text-[#151D48] ">Voir</p>
                        <p className="text-2xl font-semibold text-[#425166] ">Statistiques</p>
                        <span className="text-[12px]">
                            consulter les nouveautés 
                        </span>
                    </div>
                </Link>
            </div>
            <Chart />   	
            <PresqueFinit/>
        </>
    );
};

export default Acceuil;
