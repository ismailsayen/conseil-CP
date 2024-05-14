import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../public/assets/logo.png"
import Notifications from './Notification/Notifications'

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const Navbar = ({ setIsLoggedIn , setRole}) => {
    const [notification, setNotification] = useState(false)
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [name, setName] = useState([]);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCloseNotification = () => {
        setNotification(false);
    };
    const handleRoleAndName = async () => {
        try {
            const response = await fetch("http://localhost:4500/dashboard/", {
                method: "get",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            });
            const data = await response.json();
            if (response.ok) {
                setRole(data.role)
                setName(data.user[0])
            }
            else {
                throw new Error('Failed to logout');
            }
        } catch (error) {
            console.error('Error during logout:', error.message);
            // Handle error (e.g., show error message to the user)
        }
    }
    const handleLogout = async () => {
        try {
            const response = await fetch("http://localhost:4500/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            });
            if (response.ok) {
                setIsLoggedIn(false);
                ser
            }
            else {
                throw new Error('Failed to logout');
            }
        } catch (error) {
            console.error('Error during logout:', error.message);
            // Handle error (e.g., show error message to the user)
        }
    };
    function sidelock() {
        var sidebar = document.getElementById('logo-sidebar');
        var isSidebarHidden = sidebar.getAttribute('aria-hidden') === 'true';

        sidebar.classList.toggle('transform-none');

        // Toggle ARIA attributes
        sidebar.setAttribute('aria-hidden', isSidebarHidden ? 'false' : 'true');
        sidebar.setAttribute('aria-modal', isSidebarHidden ? 'true' : 'false');
        sidebar.setAttribute('role', isSidebarHidden ? 'dialog' : 'none');
    };
    useEffect(() => {
        handleRoleAndName()
    }, [])
    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-white shadow-md">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button onClick={sidelock} data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focusdark:text-gray-400  dark:focus:ring-gray-600">
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <a className="flex ms-2 md:me-24">
                                <img src={Logo} class="h-14" />
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className='relative'>
                                <div onClick={() => setNotification(prev => !prev)} className='cursor-pointer'>
                                    {notification ?
                                        <i className="fa-solid fa-bell text-[20px] text-yellow-300"></i>
                                        :
                                        <>
                                            <div className='relative'>
                                                <i className="fa-solid fa-bell text-[20px] text-yellow-300"></i>
                                                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-4">3</div>
                                            </div>
                                        </>
                                    }
                                </div>
                                {notification &&
                                    <Notifications onclose={handleCloseNotification} />
                                }
                            </div>
                            <div className="flex items-center ms-3">
                                <div>
                                    <button aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleMenu} type="button" class="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                                        <span class="sr-only">Open user menu</span>
                                        <svg class="w-12 h-12 text-green-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                                <div style={{ zIndex: "1" }} >
                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem><p><strong>{name.nom} {name.prenom}</strong>  </p></MenuItem>
                                        <hr />
                                        <MenuItem>Profile</MenuItem>
                                        <MenuItem><Link to='/editPassowrd'>Modifier mot de passe</Link></MenuItem>
                                        <MenuItem onClick={handleLogout}>Déconnection</MenuItem>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <aside id="logo-sidebar" className="shadow-md mt-2 fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-[#fff] border-r  sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full flex flex-col justify-between px-3 pb-4 bg-white">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link to="/" className="flex items-center p-3 text-gray-700 rounded-md hover:bg-gray-300 hover:shadow hover:text-gray-900 group">
                                <svg class="w-8 h-8 text-green-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" />
                                </svg>
                                <span class="flex-1 font-semibold ms-3 whitespace-nowrap">Accueil</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Stock" className="flex items-center p-3 text-gray-700 rounded-md hover:bg-gray-300 hover:shadow hover:text-gray-900 group">
                                <svg className="w-8 h-8 text-green-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857Zm10 0A1.857 1.857 0 0 0 13 14.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 19.143v-4.286A1.857 1.857 0 0 0 19.143 13h-4.286Z" clip-rule="evenodd" />
                                </svg>
                                <span class="flex-1 font-semibold ms-3 whitespace-nowrap">Stock</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Commandes" className="flex items-center p-3 text-gray-700 rounded-md hover:bg-gray-300 hover:shadow hover:text-gray-900 group">
                                <svg className="w-8 h-8 text-green-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M5.617 2.076a1 1 0 0 1 1.09.217L8 3.586l1.293-1.293a1 1 0 0 1 1.414 0L12 3.586l1.293-1.293a1 1 0 0 1 1.414 0L16 3.586l1.293-1.293A1 1 0 0 1 19 3v18a1 1 0 0 1-1.707.707L16 20.414l-1.293 1.293a1 1 0 0 1-1.414 0L12 20.414l-1.293 1.293a1 1 0 0 1-1.414 0L8 20.414l-1.293 1.293A1 1 0 0 1 5 21V3a1 1 0 0 1 .617-.924ZM9 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" clip-rule="evenodd" />
                                </svg>
                                <span class="flex-1 font-semibold ms-3 whitespace-nowrap">Commandes</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Utilisateurs" className="flex items-center p-3 text-gray-700 rounded-md hover:bg-gray-300 hover:shadow hover:text-gray-900 group">
                                <svg className="w-8 h-8 text-green-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z" clip-rule="evenodd" />
                                </svg>
                                <span class="flex-1 font-semibold ms-3 whitespace-nowrap">Utilisateurs</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Directions-Bureaus" className="flex items-center p-3 text-gray-700 rounded-md hover:bg-gray-300 hover:shadow hover:text-gray-900 group">
                                <svg className="w-8 h-8 text-green-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M4 4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2v14a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2V5a1 1 0 0 1-1-1Zm5 2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1Zm-5 4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1Zm-3 4a2 2 0 0 0-2 2v3h2v-3h2v3h2v-3a2 2 0 0 0-2-2h-2Z" clip-rule="evenodd" />
                                </svg>
                                <span class="flex-1 font-semibold ms-3 whitespace-nowrap">Directions & Bureaus</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Fournisseurs" className="flex items-center p-3 text-gray-700 rounded-md hover:bg-gray-300 hover:shadow hover:text-gray-900 group">
                                <svg class="w-8 h-8 text-green-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M4 4a2 2 0 0 0-2 2v9a1 1 0 0 0 1 1h.535a3.5 3.5 0 1 0 6.93 0h3.07a3.5 3.5 0 1 0 6.93 0H21a1 1 0 0 0 1-1v-4a.999.999 0 0 0-.106-.447l-2-4A1 1 0 0 0 19 6h-5a2 2 0 0 0-2-2H4Zm14.192 11.59.016.02a1.5 1.5 0 1 1-.016-.021Zm-10 0 .016.02a1.5 1.5 0 1 1-.016-.021Zm5.806-5.572v-2.02h4.396l1 2.02h-5.396Z" clip-rule="evenodd" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Fournisseurs</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Statistiques" className="flex font-semibold items-center p-3 text-gray-700 rounded-md hover:bg-gray-300 hover:shadow hover:text-gray-900 group">
                                <i className="fa-solid fa-chart-simple"></i>
                                <span className="flex-1 ms-3 whitespace-nowrap">Statistiques</span>
                            </Link>
                        </li>
                    </ul>
                    <button onClick={handleLogout} className="flex shadow-md items-center p-3 bg-red-600 text-white rounded-md hover:bg-red-700 hover:shadow hover:text-white group">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        <span className="ms-2 font-semibold whitespace-nowrap">Déconnexion</span>
                    </button>
                </div>
            </aside>
        </>
    )
}

export default Navbar