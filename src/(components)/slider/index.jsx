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
        <section className='box-border bg-[#181716] border border-1 border-solid border-[#DAC5A7] border-[rgba(218,197,167,0.25)] py-2 sm:py-4'>
            <div className='container mx-auto px-2 sm:px-4'>
                <Swiper
                    modules={[Autoplay]}  
                    spaceBetween={5}  
                    slidesPerView={4}  
                    loop={true}  
                    speed={3000}  
                    autoplay={{
                        delay: 0,  
                        disableOnInteraction: false,  
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 3,
                            spaceBetween: 5
                        },
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 10
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 15
                        },
                        768: {
                            slidesPerView: 2.5,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 25
                        }
                    }}
                >
                    {[...Array(10)].map((_, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex items-center justify-center py-1 sm:py-2'>
                                <span className='text-xs sm:text-sm md:text-base lg:text-lg text-[#DAC5A7] font-bold whitespace-nowrap mr-1'>
                                    Let&apos;s Talk
                                </span>
                                <Image 
                                    src={star} 
                                    alt='star' 
                                    width={12} 
                                    height={12} 
                                    className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" 
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Slider;
