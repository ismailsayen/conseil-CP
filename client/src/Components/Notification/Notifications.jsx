import React from 'react'
import { Link } from 'react-router-dom'

const Notifications = ( {onclose} ) => {
    return (
        <div className='absolute right-1 mt-2 w-[300px] p-3 bg-white border border-gray-200 rounded-lg shadow-md'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-800'>Nouveaux Messages non-lues</p>
                <button onClick={onclose} className='text-sm text-primary-700 hover:text-gray-800 focus:outline-none'>
                    <i class="fa-solid fa-clock"></i>
                </button>
            </div>
            <ul className='mt-2 space-y-2'>
                <li className='flex rounded shadow cursor-pointer p-2 justify-between items-center hover:bg-primary-500 hover:text-white'>
                    <div className='flex gap-2 items-center '>
                        <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                        <p>notification 1</p>
                    </div>
                    <span className='text-sm'>il y a 30min</span>
                </li>
                <li className='flex rounded shadow p-2 cursor-pointer justify-between items-center hover:bg-primary-500 hover:text-white'>
                    <div className='flex gap-2 items-center '>
                        <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                        <p>notification 2</p>
                    </div>
                    <span className='text-sm'>il y a 3h</span>
                </li>
                <li className='flex rounded shadow p-2 cursor-pointer justify-between items-center hover:bg-primary-500 hover:text-white'>
                    <div className='flex gap-2 items-center '>
                        <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                        <p>notification 2</p>
                    </div>
                    <span className='text-sm'>il y a une semaine</span>
                </li>
            </ul>
            <Link onClick={onclose}>
                <span className='mt-2 text-primary-600 flex items-center gap-2 justify-center hover:text-primary-800 hover:underline'>
                    Ancien Messges <i class="fa-solid fa-arrow-right"></i>
                </span>
            </Link>
        </div>

    )
}

export default Notifications