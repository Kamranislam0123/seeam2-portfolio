import React from 'react'
import Image from 'next/image'
import proimg from "@/public/images/subbannerimg.png";
import girdbd from "@/public/images/gridbg.png"; // Import your background image

const Prosection = () => {
    return (
        <section 
            className='box-border py-8 sm:py-12 bg-cover bg-center bg-no-repeat relative'  
            id='prosection' 
            style={{ 
                backgroundImage: `url(${girdbd.src})`,
                backgroundSize: '200%',
            }}
        >
            <div className='absolute inset-0 bg-black bg-opacity-50'></div> {/* Optional overlay */}
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                <div className='flex flex-col lg:flex-row gap-6 lg:gap-10 items-center'>
                    <div className='w-full lg:w-1/2'>
                        <Image 
                            src={proimg} 
                            alt='project'
                            layout='responsive'
                            width={500}
                            height={300}
                            objectFit='contain'
                        />
                    </div>
                    <div className='flex flex-col justify-center w-full lg:w-1/2 text-center lg:text-left'>
                        <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-bold text-[#DAC5A7] leading-tight mb-4'>
                            Crafting Human Centric Experiences!
                        </h2>
                        <p className='text-base sm:text-lg md:text-xl font-light text-[#DAC5A7]'>
                            Professional Product Designer
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Prosection