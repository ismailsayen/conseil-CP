import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../public/assets/logo.png"
import Notifications from './Notification/Notifications'

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const Navbar = ({ setIsLoggedIn, setRole }) => {
    const [name, setName] = useState([]);
    const [notification, setNotification] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [profileConatiner, setProfileConatiner] = useState(false)
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
    const handleToggleProfile = () => {
        setProfileConatiner(false);
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
        }
    };
    function sidelock() {
        var sidebar = document.getElementById('logo-sidebar');
        var isSidebarHidden = sidebar.getAttribute('aria-hidden') === 'true';

        sidebar.classList.toggle('transform-none');

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
                                <img src={Logo} className="h-14" />
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
                                        onClick={() => setProfileConatiner(prev => !prev)} type="button" className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                                        <span className="sr-only">Open user menu</span>
                                        <svg className="w-12 h-12 text-green-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                                <div>
                                    {
                                        profileConatiner &&
                                        <div className='absolute right-1 mt-9 w-[300px] p-3 bg-white border border-gray-200 rounded-lg shadow-md'>
                                            <p className='mb-1 p-2 font-bold'>{name.nom} {name.prenom}</p>
                                            <ul className='flex flex-col gap-2'>
                                                <li className='p-3 border-b flex justify-between items-center cursor-pointer font-medium hover:text-white hover:bg-primary-500 rounded-md hover:shadow-md '>
                                                    <Link to="/acceuil">Profile</Link>
                                                    <i class="fa-solid fa-user"></i>
                                                </li>
                                                <li className='p-3 border-b flex justify-between items-center cursor-pointer font-medium hover:text-white hover:bg-primary-500 rounded-md hover:shadow-md '>
                                                    <Link to='/editPassowrd'>Modifier mot de passe</Link>
                                                    <i class="fa-solid fa-key"></i>
                                                </li>
                                                <li className='p-3 border-b flex justify-between items-center cursor-pointer font-medium hover:text-white hover:bg-red-600 rounded-md hover:shadow-md ' onClick={handleLogout}>
                                                    Déconnection
                                                    <i class="fa-solid fa-right-from-bracket"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    }
                                    {/* <Menu
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
                                    </Menu> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <aside id="logo-sidebar" className="shadow-md mt-2 fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-[#fff] border-r  sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full flex flex-col justify-between px-3 pb-4 overflow-y-scroll  bg-white">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link to="/" className="flex items-center p-3 text-gray-700 rounded-md hover:bg-[#5D5FEF] hover:shadow hover:text-white group">
                                <i className="fa-solid fa-home"></i>
                                <span className="flex-1 font-semibold ms-3 whitespace-nowrap">Accueil</span>
                            </Link>
                        </li>
                        <li>
                            <div className='p-3 cursor-pointer  rounded-md flex text-gray-700 mb-3 justify-between items-center hover:bg-[#5D5FEF] hover:shadow hover:text-white' onClick={() => setDropdown(prev => !prev)}>
                                <Link className="flex items-center rounded-md group">
                                    <i className="fa-solid fa-store"></i>
                                    <span className="flex-1 font-semibold ms-3 whitespace-nowrap">Stock</span>
                                </Link>
                                {dropdown ? (
                                    <i className="fa-solid fa-caret-up text-xl"></i>
                                ) : (
                                    <i className="fa-solid fa-caret-down text-xl"></i>
                                )}
                            </div>
                            {
                                dropdown && <ul className='p-2 bg-gray-200 shadow-md text-white rounded-md flex flex-col gap-2'>
                                    <li>
                                        <Link to="/Stock" className="flex items-center p-3 hover:bg-gray-800 hover:text-white text-gray-700 rounded-md hover:shadow group">
                                            <i className="fa-solid fa-boxes-stacked"></i>
                                            <span className="flex-1 font-semibold ms-3 whitespace-nowrap">Articles</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Stock/PCs" className="flex items-center p-3 hover:bg-gray-800 hover:text-white  text-gray-700 rounded-md hover:shadow group">
                                            <i className="fa-solid fa-desktop"></i>
                                            <span className="flex-1 font-semibold ms-3 whitespace-nowrap">PCs</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Stock/En-Panne" className="flex items-center p-3 hover:bg-gray-800 hover:text-white text-gray-700 rounded-md hover:shadow group">
                                            <i className="fa-solid fa-wrench"></i>
                                            <span className="flex-1 font-semibold ms-3 whitespace-nowrap">Pannes</span>
                                        </Link>
                                    </li>
                                </ul>
                            }
                        </li>
                        <li>
                            <Link to="/Commandes" className="flex items-center p-3 text-gray-700 rounded-md hover:bg-[#5D5FEF] hover:shadow hover:text-white group">
                                <i className="fa-solid fa-clipboard"></i>
                                <span className="flex-1 font-semibold ms-3 whitespace-nowrap">Commandes</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Utilisateurs" className="flex items-center p-3 text-gray-700 rounded-md hover:bg-[#5D5FEF] hover:shadow hover:text-white group">
                                <i className="fa-solid fa-users"></i>
                                <span className="flex-1 font-semibold ms-3 whitespace-nowrap">Utilisateurs</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Directions-Bureaus" className="flex items-center p-3 text-gray-700 rounded-md hover:bg-[#5D5FEF] hover:shadow hover:text-white group">
                                <i className="fa-solid fa-building"></i>
                                <span className="flex-1 font-semibold ms-3 whitespace-nowrap">Directions & Bureaus</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Fournisseurs" className="flex items-center p-3 text-gray-700 rounded-md hover:bg-[#5D5FEF] hover:shadow hover:text-white group">
                                <i className="fa-solid fa-truck"></i>
                                <span className="flex-1 ms-3 whitespace-nowrap">Fournisseurs</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Statistiques" className="flex font-semibold mb-3 items-center p-3 text-gray-700 rounded-md hover:bg-[#5D5FEF] hover:shadow hover:text-white group">
                                <i className="fa-solid fa-chart-simple"></i>
                                <span className="flex-1 ms-3 whitespace-nowrap">Statistiques</span>
                            </Link>
                        </li>
                    </ul>
                    <button onClick={handleLogout} className="flex shadow-md items-center p-3 bg-red-600 text-white rounded-md hover:bg-red-700 hover:shadow hover:text-white group">
                        <i className="fa-solid fa-right-from-bracket"></i>
                        <span className="ms-2 font-semibold whitespace-nowrap">Deconnexion</span>
                    </button>
                </div>
            </aside>
        </>
    )
}

export default Navbar