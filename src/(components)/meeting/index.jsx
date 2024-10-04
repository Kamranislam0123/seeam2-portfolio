import React from "react";

const Meeting = () => {
    return (
        <section className="box-border pt-20 bg-[#181716]">
            <div className="container mx-auto">
                <div className="flex flex-col gap-2  items-center justify-center">
                    <p className="text-xl text-primary f">ANY PROJECT IN MIND?</p>
                    <p className="text-8xl font-bold">
                        Let’s bring your
                    </p>
                    <p className="text-6xl font-light ">
                        Product to Life
                    </p>
                    <p className=" w-[500px] text-xl  text-primary font-light  text-center pb-4">
                        Premium product design, development, and UX/UI services to help your vision stand out in the market.
                    </p>
                    <a 
                        href="https://calendly.com/seeamahmod/hello_seeam" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-primary text-black px-6 py-2 inline-block hover:bg-opacity-90 transition duration-300"
                    >
                        Schedule a Meeting
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Meeting;
