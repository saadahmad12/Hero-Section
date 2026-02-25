import React from 'react'

const Navbar = ()=>{
    return(
        <div className='flex item-center justify-between py-6 px-16'>
            <h4 className='bg-black text-white px-6 py-2 rounded-full text-xs'> Target Audience</h4>
            <button className='bg-gray-200 px-6 py-2 rounded-full uppercase tracking-widest text-xs'>Digital Banking Platform</button>
        </div>
    )
}

export default Navbar;