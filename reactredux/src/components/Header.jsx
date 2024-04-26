import React from 'react'
import { MdPostAdd } from "react-icons/md";
const Header = () => {
    return (
        <div className='flex items-center justify-between bg-indigo-600 text-white px-4 py-4'>
            <div className='text-3xl'>React Uygulama</div>
            <div className='flex items-center gap-5'>
                <div className='text-black'>
                    <select className='h-10000000' name="" id="">
                        <option value="asc">Artan</option>
                        <option value="desc">Azalan</option>
                    </select>
                </div>
                <div>
                    <input type="text" placeholder="Arama..." />
                </div>
                <div>
                    <MdPostAdd />
                </div>
            </div>
        </div>
    )
}

export default Header
