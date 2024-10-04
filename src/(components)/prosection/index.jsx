import React from 'react'
import Image from 'next/image'
import proimg from "@/public/images/subbannerimg.png";
import girdbd from "@/public/images/gridbg.png"; // Import your background image

const Prosection = () => {
    return (
        <section 
            className='box-border py-12 bg-cover bg-center bg-no-repeat relative '  id='prosection' 
            style={{ 
                backgroundImage: `url(${girdbd.src})`,
                backgroundSize: '200%', // Adjust this value to control the zoom level
            }}
        >
            <div className='absolute inset-0 bg-black bg-opacity-50'></div> {/* Optional overlay */}
            <div className='container mx-auto relative z-10'>
                <div className='flex flex-row gap-10' >
                    <div className=''>
                        <Image src={proimg} alt='project' />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h2 className='text-[80px] font-bold text-[#DAC5A7]'>Crafting Human Centric Experiences!</h2>
                        <p className='text-[18px] font-light text-[#DAC5A7]'>Professional Product Designer</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Prosection