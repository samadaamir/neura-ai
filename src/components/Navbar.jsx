import React from 'react'


const Navbar = () => {
    return (
        <div className='absolute top-0 left-0 z-10 w-full px-8 py-4'>
        <div className='flex justify-between items-center flex-row gap-2.5  '>
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
    </div>
    )
}

export default Navbar