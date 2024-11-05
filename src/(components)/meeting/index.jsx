import React from "react";

const Meeting = () => {
    return (
        <section className="box-border py-12 sm:py-16 md:py-20 bg-[#181716]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 items-center justify-center text-center">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary">ANY PROJECT IN MIND?</p>
                    <h2 className="text-[5.875rem] font-solenoidal sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                        Let&apos;s bring your
                    </h2>
                    <p className="text-[4rem]  font-solenoidal sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
                        Product to Life
                    </p>
                    <p className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-[500px] text-[1.5rem] sm:text-base md:text-lg lg:text-xl text-primary font-light text-center pb-4 sm:pb-6 md:pb-8">
                        Premium product design, development, and UX/UI services to help your vision stand out in the market.
                    </p>
                    <a 
                        href="https://calendly.com/seeamahmod/hello_seeam" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-primary text-black px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base md:text-lg inline-block hover:bg-opacity-90 transition duration-300 uppercase"
                    >
                        Schedule a Meeting
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Meeting;
