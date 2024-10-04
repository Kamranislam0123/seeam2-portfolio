'use client';
import React from 'react';
import Image from 'next/image';
import star from '@/public/images/Star 1.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';  
import 'swiper/css/autoplay';  

const Slider = () => {
    return (
        <section className='box-border bg-[#181716] border border-1 border-solid border-[#DAC5A7]border  border-[rgba(218,197,167,0.25)] p-4  '>
            <div className='container mx-auto '>
                <Swiper
                    modules={[Autoplay]}  
                    spaceBetween={30}  
                    slidesPerView={7}  
                    loop={true}  
                    speed={3000}  // Adjust speed for smoother transition
                    autoplay={{
                        delay: 0,  // Set delay to 0 for continuous autoplay
                        disableOnInteraction: false,  // Keep autoplay even after user interaction
                    }}
                >
                    {[...Array(10)].map((_, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex flex-row gap-2  items-center justify-center'>
                                <div className='text-2xl text-primary font-bold'>
                                    Let&apos;s Talk
                                </div>
                                <Image src={star} alt='star' />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Slider;
