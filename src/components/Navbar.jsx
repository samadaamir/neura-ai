import React from 'react'


const Navbar = () => {
    return (
        <div className='flex flex-row justify-between items-center p-3'>
            <div className="text-2xl bg-amber-400 font-bold p-2 rounded-2xl ">
                Neura
            </div>
            <div >
                <ul className='flex justify-between items-center gap-3.5 bg-amber-400 p-2 rounded-2xl'>
                    <li>Features</li>
                    <li>Solutions</li>
                    <li>How It Works</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <div>
                <button className='bg-amber-400 font-bold p-2 rounded-2xl'>Get Started <i class="ri-arrow-right-line bg-white p-1 rounded-[50%]"></i> </button>
            </div>
        </div>
    )
}

export default Navbar